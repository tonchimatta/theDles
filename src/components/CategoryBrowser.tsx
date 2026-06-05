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
      <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
        Browse All Dles · {games.length} games
      </h3>

      {/* Category chips — horizontal scroll on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setActive(null)}
          className={`shrink-0 rounded-full text-xs font-medium px-3 py-1 transition-colors ${
            active === null
              ? 'bg-white text-black'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
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
              className={`shrink-0 rounded-full text-xs font-medium px-3 py-1 transition-all ${
                isActive
                  ? `${bg} ${text} ring-2 ring-white/30`
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Game list */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
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
            className="text-zinc-400 hover:text-white underline"
          >
            Show all
          </button>
        </p>
      )}
    </section>
  );
}
