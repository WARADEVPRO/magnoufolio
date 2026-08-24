import { cn } from '../../utils/cn';

export default function Card({ children, className, hover = true }) {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6",
        hover && "hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
