interface Props {
  streak: number;
}

export function StreakBadge({ streak }: Props) {
  if (streak === 0) return null;
  return (
    <div className="flex items-center gap-1.5 bg-[#B9FF66] text-black rounded-full px-3 py-1 text-sm font-bold border-2 border-[#B9FF66]">
      <span className="text-base leading-none">🔥</span>
      <span>{streak} day{streak !== 1 ? 's' : ''}</span>
    </div>
  );
}
