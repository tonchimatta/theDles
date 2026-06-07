import { ALL_GAMES } from './data';
import { useDaily } from './hooks/useDaily';
import { useRandomizer } from './hooks/useRandomizer';
import { Header } from './components/Header';
import { GameCard } from './components/GameCard';
import { PlayAnotherButton } from './components/PlayAnotherButton';
import { CategoryBrowser } from './components/CategoryBrowser';

function App() {
  const { game: dailyGame, markPlayed, streak } = useDaily();
  const { game: randomGame, playNext } = useRandomizer();

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header streak={streak} />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 flex flex-col gap-8">

        {/* Hero */}
        <section className="flex flex-col gap-3 pt-2">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            Play a new{' '}
            <span className="text-[#B9FF66]">-dle</span>{' '}
            every day
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-md">
            {ALL_GAMES.length}+ word games, music puzzles, geography challenges — all in one place.
          </p>
        </section>

        {/* Daily game */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="bg-[#B9FF66] text-black text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wide">
                Today's Dle
              </span>
            </div>
            <span className="text-xs text-zinc-600">{today}</span>
          </div>
          <GameCard game={dailyGame} onPlay={markPlayed} label="Daily Pick" />
        </section>

        {/* Random game */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-zinc-800 text-zinc-300 text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wide border-2 border-zinc-700">
              Random
            </span>
          </div>
          <PlayAnotherButton onPlay={playNext} />
          {randomGame && (
            <GameCard game={randomGame} label="Random Pick" />
          )}
        </section>

        {/* Browse */}
        <CategoryBrowser games={ALL_GAMES} />
      </main>

      <footer className="text-center text-zinc-700 text-xs py-6 border-t-2 border-zinc-800/50">
        Game data from{' '}
        <a
          href="https://dles.aukspot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-[#B9FF66] underline transition-colors"
        >
          dles.aukspot.com
        </a>
      </footer>
    </div>
  );
}

export default App;
