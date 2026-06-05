interface Props {
  streak: number;
}

export function StreakBadge({ streak }: Props) {
  if (streak === 0) return null;
  return (
    <div className="flex items-center gap-1.5 bg-orange-500/20 border border-orange-500/40 text-orange-400 rounded-full px-3 py-1 text-sm font-semibold">
      <span className="text-base">🔥</span>
      <span>{streak} day{streak !== 1 ? 's' : ''}</span>
    </div>
  );
}
