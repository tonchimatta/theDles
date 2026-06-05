export const KEYS = {
  STREAK: 'dles_streak',
  LAST_PLAYED: 'dles_last_played',
  SHUFFLED_QUEUE: 'dles_shuffled_queue',
  DLES_VERSION: 'dles_version',
} as const;

export function getItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable (private browsing quota, etc.) — fail silently
  }
}
