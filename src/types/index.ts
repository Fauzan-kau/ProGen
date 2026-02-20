/**
 * Global TypeScript types and interfaces
 */

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseComponentProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends BaseComponentProps {
  hoverable?: boolean;
  padding?: Size;
  onClick?: () => void;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface CTASection {
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}
