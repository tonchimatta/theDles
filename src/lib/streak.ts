import { KEYS, getItem, setItem } from './storage';
import { todayUTC } from './dailyGame';

export function readStreak(): { streak: number; lastPlayed: string | null } {
  return {
    streak: getItem<number>(KEYS.STREAK, 0),
    lastPlayed: getItem<string | null>(KEYS.LAST_PLAYED, null),
  };
}

export function updateStreak(): number {
  const today = todayUTC();
  const { streak, lastPlayed } = readStreak();

  if (lastPlayed === today) return streak;

  let newStreak: number;
  if (lastPlayed === null) {
    newStreak = 1;
  } else {
    const lastMs = new Date(lastPlayed).getTime();
    const todayMs = new Date(today).getTime();
    const daysDiff = Math.round((todayMs - lastMs) / 86_400_000);
    newStreak = daysDiff === 1 ? streak + 1 : 1;
  }

  setItem(KEYS.STREAK, newStreak);
  setItem(KEYS.LAST_PLAYED, today);
  return newStreak;
}
