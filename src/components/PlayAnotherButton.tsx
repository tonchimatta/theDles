interface Props {
  onPlay: () => void;
}

export function PlayAnotherButton({ onPlay }: Props) {
  return (
    <button
      onClick={onPlay}
      className="card-brutalist w-full flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800/80 border-2 border-zinc-700 hover:border-[#B9FF66]/40 text-white font-bold py-4 px-6 rounded-2xl text-base group"
    >
      <span className="text-xl group-hover:rotate-180 transition-transform duration-500 leading-none">🎲</span>
      Surprise Me
      <span className="text-zinc-500 text-sm font-normal">(random, no repeats)</span>
    </button>
  );
}
