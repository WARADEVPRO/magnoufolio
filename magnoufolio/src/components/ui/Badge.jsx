import { cn } from '../../utils/cn';

export default function Badge({ text, color = 'primary' }) {
  const colors = {
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    green: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
  };

  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border",
      colors[color]
    )}>
      {text}
    </span>
  );
}
