import React from 'react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

const HeroIllustration: React.FC = () => (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[500px] mx-auto">
        <circle cx="250" cy="200" r="180" fill="#d1fae5" fillOpacity="0.5" />
        <rect x="150" y="280" width="200" height="10" rx="2" fill="#e5e7eb" />
        <path d="M220 280 V 180 Q 220 150 250 150 Q 280 150 280 180 V 280" stroke="#10b981" strokeWidth="4" fill="#eff6ff" />
        <circle cx="250" cy="120" r="30" fill="#10b981" />
        <rect x="50" y="80" width="140" height="80" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" className="animate-[float_6s_ease-in-out_infinite]" />
        <text x="70" y="125" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#10b981">£3/employee</text>
        <circle cx="420" cy="100" r="20" fill="#fbbf24" opacity="0.8" className="animate-[float_5s_ease-in-out_infinite_1s]" />
        <text x="413" y="106" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="white">£</text>
        <circle cx="380" cy="320" r="15" fill="#3b82f6" opacity="0.6" className="animate-[float_7s_ease-in-out_infinite_2s]" />
    </svg>
);

export const Hero: React.FC = () => {
    return (
        <Section className="min-h-[calc(100vh-80px)] flex items-center pt-12 md:pt-0" background="light">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Text Content */}
                <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-[1.1] hero-headline">
                        Payroll & Accounting —<br />
                        <span className="text-[#10b981]">Engineered for Efficiency.</span>
                    </h1>

                    <div className="flex flex-col gap-3 hero-sub">
                        {[
                            "Transparent £3 per employee payroll.",
                            "Integrated accounting & admin support.",
                            "Operational loyalty credits for businesses that move smart."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#10b981] mt-0.5">
                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-base md:text-lg text-gray-600 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-2 hero-cta">
                        <Button variant="primary" href="/contact">Book a Discovery Call</Button>
                        <Button variant="secondary" href="/pricing">Request a Pricing Overview</Button>
                    </div>
                </div>

                {/* Illustration */}
                <div className="order-1 lg:order-2 flex justify-center hero-cta opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                    <HeroIllustration />
                </div>
            </div>
        </Section>
    );
};
