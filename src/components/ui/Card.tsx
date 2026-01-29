import { CardProps } from '@/types';

const paddingStyles = {
  sm: 'p-4 md:p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10',
};

export const Card = ({
  children,
  hoverable = false,
  padding = 'md',
  className = '',
}: CardProps) => {
  const baseStyles =
    'bg-white dark:bg-surface rounded-xl shadow-premium transition-all duration-300';

  const hoverStyles = hoverable
    ? 'hover:shadow-premium-lg hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
};
