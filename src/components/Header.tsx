import { StreakBadge } from './StreakBadge';
import { ALL_GAMES } from '../data';

interface Props {
  streak: number;
}

export function Header({ streak }: Props) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
      <div className="flex items-center gap-2">
        <span className="text-xl">🎮</span>
        <span className="font-bold text-lg tracking-tight text-white">Daily Dles</span>
        <span className="text-zinc-500 text-sm hidden sm:inline">· {ALL_GAMES.length} games</span>
      </div>
      <StreakBadge streak={streak} />
    </header>
  );
}
