import { useState } from 'react';
import { ALL_GAMES } from '../data';
import { getNextRandom } from '../lib/randomizer';
import { getDailyGame } from '../lib/dailyGame';
import type { Dle } from '../types';

export function useRandomizer() {
  const [game, setGame] = useState<Dle | null>(null);

  function playNext() {
    const dailyId = getDailyGame(ALL_GAMES).id;
    const next = getNextRandom(ALL_GAMES, dailyId);
    setGame(next);
  }

  return { game, playNext };
}
