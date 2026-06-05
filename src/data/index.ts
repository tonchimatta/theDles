import type { Dle } from '../types';
import rawDles from './dles.json';

export const ALL_GAMES: Dle[] = rawDles as Dle[];

export const GAMES_BY_ID = new Map<number, Dle>(
  ALL_GAMES.map((g) => [g.id, g])
);

export const CATEGORIES: string[] = [...new Set(ALL_GAMES.map((g) => g.category))].sort();
