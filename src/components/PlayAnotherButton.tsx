interface Props {
  onPlay: () => void;
}

export function PlayAnotherButton({ onPlay }: Props) {
  return (
    <button
      onClick={onPlay}
      className="w-full flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 border border-zinc-700 hover:border-zinc-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors text-base group"
    >
      <span className="text-xl group-hover:rotate-180 transition-transform duration-500">🎲</span>
      Play Another Dle
      <span className="text-zinc-400 text-sm font-normal">(random, no repeats)</span>
    </button>
  );
}
