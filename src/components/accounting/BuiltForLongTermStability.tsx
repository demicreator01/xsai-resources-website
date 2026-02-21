import React, { useEffect, useRef } from 'react';

export const BuiltForLongTermStability: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.12 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#0f1724] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.3) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0f1724]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[680px] mx-auto text-center">

                {/* ── LABEL + HEADLINE ── */}
                <div className="fade-up mb-10 md:mb-12">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-4 block">
                        Our Philosophy
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-white leading-[1.1] tracking-tight">
                        Built for{' '}
                        <span className="text-green-primary">Long-Term Stability</span>
                    </h2>
                </div>

                {/* ── OPENING BELIEF STATEMENT ── */}
                <div className="fade-up mb-10 max-w-[480px] mx-auto" style={{ animationDelay: '80ms' }}>
                    <div className="flex items-start gap-4 text-left">
                        <div className="shrink-0 w-0.5 h-full min-h-[48px] bg-green-primary rounded-full mt-1" />
                        <p className="text-[1.1rem] text-text-muted leading-relaxed">
                            We believe financial control is not about complexity.
                        </p>
                    </div>
                </div>

                {/* ── THREE CONVICTION LINES ── */}
                <div className="fade-up mb-10 md:mb-12" style={{ animationDelay: '120ms' }}>
                    {/* Decorative top rule */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { text: "It's about structure.", accent: false },
                            { text: "It's about clarity.", accent: true },
                            { text: "It's about discipline.", accent: false },
                        ].map((line, i) => (
                            <p
                                key={i}
                                className={`text-[1.5rem] md:text-[1.9rem] font-bold leading-tight tracking-tight ${line.accent ? 'text-green-primary' : 'text-white'
                                    }`}
                            >
                                {line.text}
                            </p>
                        ))}
                    </div>

                    {/* Decorative bottom rule */}
                    <div className="flex items-center gap-4 mt-8">
                        <div className="flex-1 h-px bg-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </div>

                {/* ── CLOSING INTEGRATION LINE ── */}
                <div className="fade-up" style={{ animationDelay: '180ms' }}>
                    <p className="text-[1rem] md:text-[1.15rem] text-text-muted mb-2 leading-relaxed">
                        When payroll and accounting operate together,
                    </p>
                    <p className="text-[1.2rem] md:text-[1.4rem] font-bold text-green-primary leading-snug">
                        your business runs smoother.
                    </p>
                </div>

            </div>
        </section>
    );
};
