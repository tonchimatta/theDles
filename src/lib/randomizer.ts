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

function buildQueue(games: Dle[], excludeId?: number): number[] {
  const ids = games.map((g) => g.id).filter((id) => id !== excludeId);
  return fisherYates(ids);
}

export function getNextRandom(games: Dle[], excludeId?: number): Dle {
  const storedVersion = getItem<number>(KEYS.DLES_VERSION, 0);
  const currentVersion = games.length;

  let queue = getItem<number[]>(KEYS.SHUFFLED_QUEUE, []);

  // Invalidate queue if game list has changed
  if (storedVersion !== currentVersion || queue.length === 0) {
    queue = buildQueue(games, excludeId);
    setItem(KEYS.DLES_VERSION, currentVersion);
  }

  const nextId = queue.shift()!;

  // Reshuffle when queue is exhausted after this pick
  if (queue.length === 0) {
    queue = buildQueue(games, excludeId);
  }

  setItem(KEYS.SHUFFLED_QUEUE, queue);

  return games.find((g) => g.id === nextId) ?? games[0];
}
