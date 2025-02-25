import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'outline',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex justify-center items-center font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg';

  const variants = {
    primary:
      'text-white bg-secondary hover:bg-primary',
    secondary:
      'text-white bg-secondary border-2 border-secondary hover:bg-yellow hover:text-secondary',
    outline:
      'text-yellow border-2 border-yellow hover:border-2 hover:border-white hover:bg-secondary hover:text-white',
  };

  const sizes = {
    sm: 'text-sm',
    md: ' text-base',
    lg: ' text-lg',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
