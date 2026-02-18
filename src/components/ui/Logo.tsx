import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'color' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'color' }) => {
    const strokeColor = variant === 'white' ? 'white' : '#10b981';
    const textColor = variant === 'white' ? 'white' : '#111827';
    const subTextColor = variant === 'white' ? 'rgba(255,255,255,0.7)' : '#6b7280';

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Icon */}
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M12 12L36 36M36 12L12 36" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
            </svg>
            {/* Wordmark */}
            <div className="flex flex-col leading-none">
                <span className="font-bold tracking-widest text-lg" style={{ color: textColor }}>XSAI</span>
                <span className="text-xs font-normal" style={{ color: subTextColor }}>Resources</span>
            </div>
        </div>
    );
};
