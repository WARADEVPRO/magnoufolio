import { cn } from '../../utils/cn';

const Badge = ({ text, color = 'primary', className }) => {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    accent: 'bg-accent/10 text-accent border-accent/20',
    green: 'bg-green-500/10 text-green-500 border-green-500/20',
    blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border',
        colorClasses[color] || colorClasses.primary,
        className
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
