import { useState } from 'react';
import { readStreak, updateStreak } from '../lib/streak';

export function useStreak() {
  const [streak, setStreak] = useState(() => readStreak().streak);

  function markDailyPlayed() {
    const updated = updateStreak();
    setStreak(updated);
  }

  return { streak, markDailyPlayed };
}
