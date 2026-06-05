interface Props {
  url: string;
  onPlay?: () => void;
}

export function PlayNowButton({ url, onPlay }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onPlay}
      className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-zinc-100 active:bg-zinc-200 transition-colors text-sm"
    >
      Play Now
      <span className="text-base">→</span>
    </a>
  );
}
