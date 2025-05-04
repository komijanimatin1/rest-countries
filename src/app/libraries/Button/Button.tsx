import { ButtonHTMLAttributes } from 'react';

// type for size and varint 
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

// interface for props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    isFullWidth?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    size = 'medium',
    variant = 'primary',
    isFullWidth = false,
    className = '',
    disabled,
    // client plugins
    ...props
}) => {
    // defult styles
    const baseStyles = 'rounded-md font-medium transition-all duration-200';
    
    // size of button
    const sizeStyles = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };
    
    // variants of button
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
        ghost: 'text-blue-600 hover:bg-blue-50',
    };

    
    const classes = [
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        isFullWidth ? 'w-full' : '',
        disabled,
        'cursor-pointer',
        className,
    ].join(' ');

    return (
        <button
            className={classes}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;