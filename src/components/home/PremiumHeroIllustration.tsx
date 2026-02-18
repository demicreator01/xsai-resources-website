import React from 'react';

export const PremiumHeroIllustration: React.FC = () => {
    return (
        <div className="relative w-full max-w-[600px] aspect-square mx-auto perspective-1000">
            {/* Animated Gradient Blob Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-primary/30 via-emerald-500/10 to-transparent rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />

            <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-full drop-shadow-2xl">
                {/* Abstract Data Rings */}
                <circle cx="300" cy="300" r="200" stroke="url(#pulse-grad)" strokeWidth="1" strokeOpacity="0.3" className="animate-[spin_20s_linear_infinite]" />
                <circle cx="300" cy="300" r="150" stroke="url(#pulse-grad)" strokeWidth="1" strokeOpacity="0.5" className="animate-[spin_15s_linear_infinite_reverse]" />
                <circle cx="300" cy="300" r="250" stroke="url(#pulse-grad)" strokeWidth="0.5" strokeOpacity="0.2" className="animate-[spin_30s_linear_infinite]" />

                {/* Floating Cards / Elements */}
                <g className="animate-[float_6s_ease-in-out_infinite]">
                    {/* Central Secure Core */}
                    <circle cx="300" cy="300" r="80" fill="url(#core-grad)" filter="url(#glow)" />

                    {/* Orbiting Elements */}
                    <g transform="translate(300, 300)">
                        <circle cx="120" cy="0" r="12" fill="#10b981" className="animate-[spin_8s_linear_infinite]" />
                        <circle cx="-120" cy="40" r="8" fill="#34d399" className="animate-[spin_12s_linear_infinite_reverse]" />
                    </g>

                    {/* Glassmorphism Card 1 (Payroll) */}
                    <g transform="translate(140, 360)">
                        <rect width="180" height="60" rx="12" fill="white" fillOpacity="0.9" stroke="#e5e7eb" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.1))" />
                        <rect x="20" y="20" width="30" height="20" rx="4" fill="#d1fae5" />
                        <rect x="60" y="20" width="80" height="8" rx="4" fill="#f3f4f6" />
                        <rect x="60" y="36" width="50" height="6" rx="3" fill="#f3f4f6" />
                        <text x="145" y="38" fontFamily="Inter" fontSize="14" fontWeight="bold" fill="#059669">£3.00</text>
                    </g>

                    {/* Glassmorphism Card 2 (Security) */}
                    <g transform="translate(320, 180)">
                        <rect width="140" height="50" rx="12" fill="rgba(16, 185, 129, 0.9)" stroke="white" strokeWidth="2" filter="drop-shadow(0 10px 15px rgba(16, 185, 129, 0.2))" />
                        <path d="M30 25L40 32L55 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="70" y="30" fontFamily="Inter" fontSize="14" fontWeight="bold" fill="white">Secure</text>
                    </g>
                </g>

                {/* Definitions */}
                <defs>
                    <linearGradient id="pulse-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="core-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(80)">
                        <stop stopColor="#10b981" />
                        <stop offset="1" stopColor="#064e3b" />
                    </radialGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="15" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};
