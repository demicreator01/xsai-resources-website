import React, { useEffect, useRef } from 'react';

export const OurEdgeHero: React.FC = () => {
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
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 60%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 100%, rgba(59,130,246,0.06) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[300px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 100%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
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

            <div className="relative z-10 w-full max-w-[760px] mx-auto text-center">

                {/* Category badge */}
                <div className="hero-fade mb-7">
                    <span className="inline-flex items-center gap-2 bg-green-primary/10 border border-green-primary/25 rounded-full px-4 py-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                            Our Edge
                        </span>
                    </span>
                </div>

                {/* Services vs Infrastructure contrast */}
                <div className="hero-fade mb-6">
                    <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#6b7280] mb-5">
                        Infrastructure Built With Intent
                    </p>

                    {/* The contrast statement */}
                    <div className="flex flex-col items-center gap-3 mb-8">
                        <div className="flex items-center gap-4 flex-wrap justify-center">
                            <span className="text-[1.1rem] md:text-[1.3rem] text-text-secondary font-medium">
                                Most firms offer payroll and accounting as
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1">
                                <span className="text-[1.1rem] md:text-[1.3rem] text-[#6b7280] font-bold line-through decoration-[#6b7280]/50">
                                    services
                                </span>
                            </span>
                        </div>
                        <div className="flex items-center gap-3 flex-wrap justify-center">
                            <span className="text-[1.1rem] md:text-[1.3rem] text-text-muted font-medium">
                                We built ours as
                            </span>
                            <span className="inline-flex items-center gap-2 bg-green-primary/10 border border-green-primary/30 rounded-lg px-3 py-1">
                                <span className="text-[1.1rem] md:text-[1.3rem] text-green-primary font-bold">
                                    infrastructure
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main headline */}
                <h1 className="hero-fade text-[2.6rem] md:text-[3.8rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-7">
                    There's a{' '}
                    <span className="text-green-primary">difference.</span>
                </h1>

                {/* What infrastructure means */}
                <div className="hero-fade mb-10">
                    <div className="bg-white/4 border border-white/8 rounded-2xl px-7 py-5 max-w-[560px] mx-auto">
                        <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#6b7280] mb-4">
                            Infrastructure is designed for
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {[
                                'Reliability',
                                'Transparency',
                                'Long-term alignment',
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="inline-flex items-center gap-2 bg-green-primary/10 border border-green-primary/20 rounded-full px-4 py-2"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                                    <span className="text-sm font-semibold text-green-primary">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/6">
                            <p className="text-sm text-[#6b7280]">
                                Not short-term margin extraction.
                            </p>
                        </div>
                    </div>
                </div>

                {/* The edge statement */}
                <div className="hero-fade mb-10">
                    <p className="text-[1.3rem] md:text-[1.6rem] font-bold text-white leading-snug">
                        That's our{' '}
                        <span className="text-green-primary">edge.</span>
                    </p>
                </div>

                {/* Scroll prompt */}
                <div className="hero-fade flex flex-col items-center gap-2 opacity-50">
                    <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#6b7280]">
                        See how
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
