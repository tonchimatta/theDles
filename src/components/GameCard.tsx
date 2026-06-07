import type { Dle } from '../types';
import { CategoryChip } from './CategoryChip';
import { PlayNowButton } from './PlayNowButton';

interface Props {
  game: Dle;
  onPlay?: () => void;
  label?: string;
}

export function GameCard({ game, onPlay, label }: Props) {
  return (
    <div className="card-brutalist bg-zinc-900 border-2 border-zinc-700 hover:border-[#B9FF66]/40 rounded-2xl p-6 flex flex-col gap-4">
      {label && (
        <span className="self-start bg-[#B9FF66] text-black text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wide">
          {label}
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2 min-w-0">
          <CategoryChip category={game.category} />
          <h2 className="text-2xl font-bold text-white leading-tight">{game.name}</h2>
          {game.theme && (
            <p className="text-xs text-zinc-500">{game.theme}</p>
          )}
          <p className="text-zinc-400 text-sm leading-relaxed">{game.description}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <PlayNowButton url={game.url} onPlay={onPlay} />
      </div>
    </div>
  );
}
