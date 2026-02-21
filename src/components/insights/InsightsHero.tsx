import React, { useEffect, useRef } from 'react';

export const InsightsHero: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.hero-fade') ?? [];
        els.forEach((el, i) => {
            (el as HTMLElement).style.animation = `heroFadeIn 800ms ${100 + i * 150}ms both`;
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#0f1724] min-h-screen flex flex-col items-center justify-center py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 60%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 100%, rgba(59,130,246,0.06) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0f1724]" />
            </div>

            {/* ── CONTENT ── */}
            <div className="relative z-10 w-full max-w-[760px] mx-auto text-center">

                {/* Category + kicker */}
                <div className="hero-fade mb-6">
                    <span className="inline-flex items-center gap-2 bg-green-primary/10 border border-green-primary/25 rounded-full px-4 py-1.5 mb-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                            Insights
                        </span>
                    </span>
                    <p className="text-[#6b7280] text-sm md:text-base font-medium tracking-wide">
                        Understanding the Economics Behind Payroll
                    </p>
                </div>

                {/* Headline */}
                <h1 className="hero-fade text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-bold text-white leading-[1.0] tracking-tight mb-10">
                    What They Don't{' '}
                    <span className="text-green-primary">Tell You</span>
                </h1>

                {/* Simplified version — typographic block */}
                <div className="hero-fade mb-8">
                    <div className="inline-flex flex-col items-center gap-1 bg-white/4 border border-white/8 rounded-2xl px-8 py-5">
                        <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#6b7280] mb-3">
                            How payroll is presented
                        </p>
                        {[
                            'Submit data.',
                            'Send funds.',
                            'Employees get paid.',
                        ].map((line, i) => (
                            <p key={i} className="text-base md:text-lg font-mono font-semibold text-text-muted">
                                {line}
                            </p>
                        ))}
                        <div className="flex items-center gap-2 mt-3">
                            <div className="flex-1 h-px w-16 bg-white/10" />
                            <p className="text-[0.6rem] text-text-secondary font-medium tracking-wide">
                                And at the surface level — that's true.
                            </p>
                            <div className="flex-1 h-px w-16 bg-white/10" />
                        </div>
                    </div>
                </div>

                {/* Opening argument */}
                <div className="hero-fade space-y-4 text-[1.05rem] md:text-[1.1rem] text-text-muted leading-relaxed mb-8 max-w-[580px] mx-auto">
                    <p>
                        But there are operational mechanics behind payroll that are
                        rarely explained to employers.
                    </p>
                </div>

                {/* Closing hook */}
                <div className="hero-fade">
                    <p className="text-[1.1rem] md:text-[1.25rem] font-bold text-white leading-snug">
                        We believe business owners{' '}
                        <span className="text-green-primary">deserve to understand them.</span>
                    </p>
                </div>

                {/* Scroll prompt */}
                <div className="hero-fade mt-14 flex flex-col items-center gap-2 opacity-50">
                    <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#6b7280]">
                        Read on
                    </p>
                    <svg
                        className="animate-bounce"
                        width="20" height="20" viewBox="0 0 20 20" fill="none"
                    >
                        <path d="M5 8l5 5 5-5" stroke="#6b7280" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

            </div>
        </section>
    );
};
