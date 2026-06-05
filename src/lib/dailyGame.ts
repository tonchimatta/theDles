import type { Dle } from '../types';

export function getDailyGame(games: Dle[]): Dle {
  const days = Math.floor(Date.now() / 86_400_000);
  return games[days % games.length];
}

export function todayUTC(): string {
  return new Date(Math.floor(Date.now() / 86_400_000) * 86_400_000)
    .toISOString()
    .slice(0, 10);
}
