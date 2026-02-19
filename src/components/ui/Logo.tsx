import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'color' | 'white';
    boxColor?: string;
    xColor?: string;
    textColor?: string;
    subTextColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
    boxColor = '#10b981',
    xColor = 'white',
    textColor = '#111827',
    subTextColor = '#6b7280'
}) => {
    return (
        <div className="flex items-center gap-3">
            <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-green-primary/20"
                style={{ backgroundColor: boxColor }}
            >
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 14L34 34M34 14L14 34" stroke={xColor} strokeWidth="6" strokeLinecap="round" />
                </svg>
            </div>
            <div className="flex flex-col leading-tight">
                <span className="font-bold tracking-tight text-xl" style={{ color: textColor }}>
                    XSAI<span className="font-light opacity-50 ml-0.5 text-gray-400">Resources</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold" style={{ color: subTextColor }}>Engineered Efficiency</span>
            </div>
        </div>
    );
};
