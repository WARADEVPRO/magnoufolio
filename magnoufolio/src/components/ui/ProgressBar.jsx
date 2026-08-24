import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function ProgressBar({ label, value, color = 'primary' }) {
  const colors = {
    primary: "bg-primary",
    accent: "bg-accent",
    blue: "bg-blue-500"
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", colors[color])}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
