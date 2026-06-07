import { StreakBadge } from './StreakBadge';
import { ALL_GAMES } from '../data';

interface Props {
  streak: number;
}

export function Header({ streak }: Props) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b-2 border-zinc-800">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#B9FF66] rounded-lg flex items-center justify-center shrink-0">
          <span className="text-black font-bold text-sm leading-none">D</span>
        </div>
        <span className="font-bold text-lg tracking-tight text-white">theDles</span>
        <span className="hidden sm:inline bg-[#B9FF66]/10 border border-[#B9FF66]/30 text-[#B9FF66] text-xs font-semibold rounded-full px-2.5 py-0.5">
          {ALL_GAMES.length} games
        </span>
      </div>
      <StreakBadge streak={streak} />
    </header>
  );
}
