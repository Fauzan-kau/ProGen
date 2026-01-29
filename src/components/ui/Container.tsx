import { BaseComponentProps } from '@/types';

interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

const maxWidthStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export const Container = ({
  children,
  maxWidth = 'lg',
  padding = true,
  className = '',
}: ContainerProps) => {
  const paddingStyles = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div className={`w-full mx-auto ${maxWidthStyles[maxWidth]} ${paddingStyles} ${className}`}>
      {children}
    </div>
  );
};
