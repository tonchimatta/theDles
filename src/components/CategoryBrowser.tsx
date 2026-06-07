import { useState } from 'react';
import type { Dle } from '../types';
import { CATEGORIES } from '../data';
import { getCategoryColor } from '../lib/categoryColors';
import { GameListItem } from './GameListItem';

interface Props {
  games: Dle[];
}

export function CategoryBrowser({ games }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? games.filter((g) => g.category === active) : games;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="bg-[#B9FF66] text-black text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wide">
          Browse
        </span>
        <span className="text-zinc-400 text-sm">All {games.length} dles</span>
      </div>

      {/* Category filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setActive(null)}
          className={`shrink-0 rounded-full text-xs font-semibold px-3 py-1 border-2 transition-all ${
            active === null
              ? 'bg-[#B9FF66] text-black border-[#B9FF66]'
              : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500'
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => {
          const { bg, text } = getCategoryColor(cat);
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(isActive ? null : cat)}
              className={`shrink-0 rounded-full text-xs font-semibold px-3 py-1 border-2 transition-all ${
                isActive
                  ? `${bg} ${text} border-transparent`
                  : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Game list */}
      <div className="card-brutalist bg-zinc-900 border-2 border-zinc-700 rounded-2xl overflow-hidden">
        <div className="divide-y divide-zinc-800/50">
          {filtered.map((game) => (
            <GameListItem key={game.id} game={game} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-zinc-500 text-sm text-center py-8">No games found.</p>
        )}
      </div>

      {active && (
        <p className="text-zinc-600 text-xs text-center">
          Showing {filtered.length} {active} game{filtered.length !== 1 ? 's' : ''}
          {' · '}
          <button
            onClick={() => setActive(null)}
            className="text-[#B9FF66] hover:text-[#caff7a] underline"
          >
            Show all
          </button>
        </p>
      )}
    </section>
  );
}
