import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  const baseClasses =
    'inline-block text-[var(--font-size-btn)] font-normal py-[var(--spacing-btn-y)] px-[var(--spacing-btn-x)] rounded-[var(--radius-pill)] shadow-md hover:shadow-lg transition-all duration-300 text-center';

  const variantClasses = {
    primary: 'bg-primary text-secondary hover:bg-primary/90',
    secondary: 'bg-secondary text-primary border-2 border-primary',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`.trim();

  // If href is provided, render as a link
  if (href) {
    // Check if it's an external link or anchor
    const isExternal =
      href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    const isAnchor = href.startsWith('#');

    if (isExternal || isAnchor) {
      return (
        <a
          href={href}
          className={combinedClasses}
          aria-label={ariaLabel}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    }

    // Internal Next.js link
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
