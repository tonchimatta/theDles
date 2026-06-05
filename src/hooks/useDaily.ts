import { useMemo } from 'react';
import { ALL_GAMES } from '../data';
import { getDailyGame } from '../lib/dailyGame';
import { useStreak } from './useStreak';
import type { Dle } from '../types';

export function useDaily(): { game: Dle; markPlayed: () => void; streak: number } {
  const { streak, markDailyPlayed } = useStreak();
  const game = useMemo(() => getDailyGame(ALL_GAMES), []);

  return { game, markPlayed: markDailyPlayed, streak };
}
