/**
 * Utility function to merge class names conditionally
 * Simplified version of clsx/tailwind-merge
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
