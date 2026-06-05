import { KEYS, getItem, setItem } from './storage';
import { todayUTC } from './dailyGame';

export function readStreak(): { streak: number; lastPlayed: string | null } {
  return {
    streak: getItem<number>(KEYS.STREAK, 0),
    lastPlayed: getItem<string | null>(KEYS.LAST_PLAYED, null),
  };
}

/**
 * The streak as it should be displayed *right now*, accounting for missed days.
 * Stored streak is only rewritten on play, so it can be stale — e.g. a 10-day
 * streak that the user abandoned a week ago is "broken" (0) even though the
 * stored value is still 10. A streak survives as long as the last play was
 * today or yesterday.
 */
export function currentStreak(): number {
  const { streak, lastPlayed } = readStreak();
  if (lastPlayed === null) return 0;

  const today = todayUTC();
  if (lastPlayed === today) return streak;

  const daysDiff = Math.round(
    (new Date(today).getTime() - new Date(lastPlayed).getTime()) / 86_400_000
  );
  return daysDiff === 1 ? streak : 0;
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
