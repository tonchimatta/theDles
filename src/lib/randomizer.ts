import type { Dle } from '../types';
import { KEYS, getItem, setItem } from './storage';

function fisherYates(ids: number[]): number[] {
  const arr = [...ids];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * A fresh shuffle of every game id. If `avoidFirstId` is given and lands at the
 * front, it's swapped back one slot so the same game can't be served twice in a
 * row across a reshuffle boundary.
 */
function freshQueue(games: Dle[], avoidFirstId?: number): number[] {
  const q = fisherYates(games.map((g) => g.id));
  if (avoidFirstId !== undefined && q.length > 1 && q[0] === avoidFirstId) {
    [q[0], q[1]] = [q[1], q[0]];
  }
  return q;
}

/**
 * Returns the next random game, never repeating until every game has been shown.
 * `excludeId` (today's daily game) is skipped at serve time but kept in rotation
 * for other days. The queue and "last served" marker persist in localStorage.
 */
export function getNextRandom(games: Dle[], excludeId?: number): Dle {
  const storedVersion = getItem<number>(KEYS.DLES_VERSION, -1);
  const currentVersion = games.length;
  const lastServed = getItem<number | null>(KEYS.LAST_RANDOM, null);

  let queue = getItem<number[]>(KEYS.SHUFFLED_QUEUE, []);

  // Rebuild if the game list changed or the queue ran out
  if (storedVersion !== currentVersion || queue.length === 0) {
    queue = freshQueue(games, lastServed ?? undefined);
    setItem(KEYS.DLES_VERSION, currentVersion);
  }

  // Pop the next id; if it's today's daily, send it to the back and take the
  // next one (so the daily stays in rotation but isn't served as "another").
  let nextId = queue.shift()!;
  if (excludeId !== undefined && nextId === excludeId && queue.length > 0) {
    queue.push(nextId);
    nextId = queue.shift()!;
  }

  // Rebuild now if we just drained the queue, avoiding an immediate repeat
  if (queue.length === 0) {
    queue = freshQueue(games, nextId);
  }

  setItem(KEYS.SHUFFLED_QUEUE, queue);
  setItem(KEYS.LAST_RANDOM, nextId);

  return games.find((g) => g.id === nextId) ?? games[0];
}
