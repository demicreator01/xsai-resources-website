import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline-white' | 'white';
    className?: string;
    onClick?: () => void;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    href,
    type = 'button',
    fullWidth = false,
    size = 'md',
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-green-primary text-white hover:bg-[#059669] shadow-sm hover:translate-y-[-1px]",
        secondary: "border-2 border-[#10b981] text-green-primary bg-transparent hover:bg-[#d1fae5]",
        ghost: "text-green-primary hover:bg-[#d1fae5]/50 hover:underline px-4 py-2",
        'outline-white': "border border-white text-white hover:bg-white/10",
        white: "bg-white text-[#059669] hover:bg-gray-100 shadow-sm"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm min-h-[36px]",
        md: "px-7 py-3.5 text-base min-h-[48px]",
        lg: "px-8 py-4 text-lg min-h-[56px]"
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    if (href) {
        if (href.startsWith('http')) {
            return (
                <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        return (
            <Link to={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
};
