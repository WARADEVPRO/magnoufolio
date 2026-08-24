import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const ProgressBar = ({ label, value, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-primary',
    accent: 'bg-accent',
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={cn('h-2.5 rounded-full', colorClasses[color])}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
