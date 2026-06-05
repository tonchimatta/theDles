import { useState } from 'react';
import { currentStreak, updateStreak } from '../lib/streak';

export function useStreak() {
  const [streak, setStreak] = useState(() => currentStreak());

  function markDailyPlayed() {
    const updated = updateStreak();
    setStreak(updated);
  }

  return { streak, markDailyPlayed };
}
