import type { Dle } from '../types';
import { CategoryChip } from './CategoryChip';

interface Props {
  game: Dle;
}

export function GameListItem({ game }: Props) {
  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors group"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-white font-medium text-sm truncate">{game.name}</span>
        <CategoryChip category={game.category} small />
      </div>
      <span className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors shrink-0">
        Play →
      </span>
    </a>
  );
}
