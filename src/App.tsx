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

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 flex flex-col gap-6">
        {/* Daily game */}
        <section className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
              Today's Dle
            </h2>
            <span className="text-xs text-zinc-600">{today}</span>
          </div>
          <GameCard game={dailyGame} onPlay={markPlayed} label="Daily Pick" />
        </section>

        {/* Random game */}
        <section className="flex flex-col gap-3">
          <PlayAnotherButton onPlay={playNext} />
          {randomGame && (
            <GameCard game={randomGame} label="Random Pick" />
          )}
        </section>

        {/* Browse */}
        <CategoryBrowser games={ALL_GAMES} />
      </main>

      <footer className="text-center text-zinc-700 text-xs py-6 border-t border-zinc-800/50">
        Game data from{' '}
        <a
          href="https://dles.aukspot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-400 underline"
        >
          dles.aukspot.com
        </a>
      </footer>
    </div>
  );
}

export default App;
