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
      className="inline-flex items-center gap-2 bg-[#B9FF66] text-black font-bold px-5 py-2.5 rounded-lg hover:bg-[#caff7a] active:bg-[#a8f050] transition-colors text-sm border-2 border-[#B9FF66]"
    >
      Play Now →
    </a>
  );
}
