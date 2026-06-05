const colors: Record<string, { bg: string; text: string }> = {
  'Words':           { bg: 'bg-blue-600',    text: 'text-white' },
  'Music':           { bg: 'bg-purple-600',  text: 'text-white' },
  'Geography':       { bg: 'bg-green-600',   text: 'text-white' },
  'Math/Logic':      { bg: 'bg-yellow-500',  text: 'text-black' },
  'Movies/TV':       { bg: 'bg-red-600',     text: 'text-white' },
  'Sports':          { bg: 'bg-orange-500',  text: 'text-white' },
  'Video Games':     { bg: 'bg-indigo-600',  text: 'text-white' },
  'History':         { bg: 'bg-amber-700',   text: 'text-white' },
  'Trivia':          { bg: 'bg-teal-600',    text: 'text-white' },
  'Science/Nature':  { bg: 'bg-emerald-600', text: 'text-white' },
  'Shapes/Patterns': { bg: 'bg-cyan-600',    text: 'text-white' },
  'Card/Board Games':{ bg: 'bg-pink-600',    text: 'text-white' },
  'Colors':          { bg: 'bg-fuchsia-600', text: 'text-white' },
  'Estimation':      { bg: 'bg-sky-600',     text: 'text-white' },
  'Food':            { bg: 'bg-lime-600',    text: 'text-white' },
  'Vehicles':        { bg: 'bg-stone-500',   text: 'text-white' },
  'Novelty':         { bg: 'bg-rose-500',    text: 'text-white' },
  'Miscellaneous':   { bg: 'bg-zinc-500',    text: 'text-white' },
};

export function getCategoryColor(category: string): { bg: string; text: string } {
  return colors[category] ?? { bg: 'bg-zinc-600', text: 'text-white' };
}
