import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick,
  className,
  type = 'button',
  disabled = false
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg focus:ring-primary",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-gray-500",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <motion.button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  );
}
