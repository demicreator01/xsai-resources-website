import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'light' | 'dark' | 'green-light' | 'green' | 'blue-light';
    containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    background = 'white',
    containerClassName = '',
}) => {
    const bgColors = {
        white: 'bg-white',
        light: 'bg-bg-page',
        dark: 'bg-[#111827]',
        'green-light': 'bg-[#f0fdf4]',
        'green': 'bg-linear-to-r from-[#10b981] to-[#059669]',
        'blue-light': 'bg-[#eff6ff]',
    };

    return (
        <section
            id={id}
            className={`relative py-16 md:py-24 px-5 md:px-8 ${bgColors[background]} ${className}`}
        >
            <div className={`max-w-[1120px] mx-auto ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};
