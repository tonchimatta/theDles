import { getCategoryColor } from '../lib/categoryColors';

interface Props {
  category: string;
  small?: boolean;
}

export function CategoryChip({ category, small }: Props) {
  const { bg, text } = getCategoryColor(category);
  return (
    <span
      className={`inline-block rounded-full font-medium ${bg} ${text} ${
        small ? 'text-xs px-2 py-0.5' : 'text-xs px-3 py-1'
      }`}
    >
      {category}
    </span>
  );
}
