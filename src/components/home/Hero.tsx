import React from 'react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { PremiumHeroIllustration } from './PremiumHeroIllustration';



export const Hero: React.FC = () => {
    return (
        <Section className="min-h-[calc(100vh-80px)] flex items-center pt-12 md:pt-0" background="light">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Text Content */}
                <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-[1.1] hero-headline tracking-tight">
                        Payroll & Accounting —<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-primary to-emerald-600">Engineered for Efficiency.</span>
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
                    <PremiumHeroIllustration />
                </div>
            </div>
        </Section>
    );
};
