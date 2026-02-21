import React, { useEffect, useRef } from 'react';

export const WhyWeChoseTransparency: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.08 }
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
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[680px] mx-auto">

                {/* ── ARTICLE SECTION HEADER ── */}
                <div className="fade-up mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                            03
                        </span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                    <h2 className="text-[1.7rem] md:text-[2.2rem] font-bold text-white leading-[1.1] tracking-tight">
                        Why We Chose Transparency
                    </h2>
                </div>

                {/* ── OPENING STATEMENT ── */}
                <div className="fade-up mb-8 text-[1.05rem] text-text-muted leading-relaxed"
                    style={{ animationDelay: '60ms' }}>
                    <p>
                        We believe operational efficiency should not be invisible.
                    </p>
                </div>

                {/* ── DECISION MOMENT — Industry vs XSAI ── */}
                <div className="fade-up mb-10" style={{ animationDelay: '100ms' }}>
                    <div className="grid grid-cols-2 gap-3">

                        {/* Industry choice */}
                        <div className="rounded-2xl border border-white/8 overflow-hidden"
                            style={{ background: 'rgba(255,255,255,0.03)' }}>
                            <div className="px-4 py-3 border-b border-white/6">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-[#6b7280]">
                                    Most providers
                                </p>
                            </div>
                            <div className="px-4 py-4">
                                <p className="text-sm text-[#6b7280] leading-relaxed">
                                    Quietly absorb all treasury benefit generated during the operational window.
                                </p>
                            </div>
                        </div>

                        {/* XSAI choice */}
                        <div className="rounded-2xl border border-green-primary/30 overflow-hidden"
                            style={{ background: 'rgba(16,185,129,0.05)' }}>
                            <div className="px-4 py-3 border-b border-green-primary/20">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-green-primary">
                                    We chose differently
                                </p>
                            </div>
                            <div className="px-4 py-4">
                                <p className="text-sm text-text-muted leading-relaxed">
                                    Created a Loyalty Credit Programme that allocates a portion of operational surplus back to qualifying partners.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── WHAT IT IS NOT — four statements ── */}
                <div className="fade-up mb-8" style={{ animationDelay: '140ms' }}>
                    <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#6b7280] mb-4">
                        What this is not
                    </p>
                    <div className="flex flex-col gap-3">
                        {[
                            'Not an investment product.',
                            'Not interest on deposits.',
                            'Not guaranteed income.',
                            'Not a promise of yield.',
                        ].map((statement, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center shrink-0">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                        <path d="M2 4h4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <p className="text-base font-bold text-white">{statement}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── WHAT IT IS — alignment factors ── */}
                <div className="fade-up mb-10" style={{ animationDelay: '180ms' }}>
                    <p className="text-text-muted text-[1.05rem] leading-relaxed mb-4">
                        It is a discretionary commercial rebate aligned with:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Volume', 'Early funding', 'Long-term partnership'].map((factor, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center gap-2 bg-green-primary/10 border border-green-primary/25 rounded-full px-4 py-2"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                                <span className="text-sm font-semibold text-green-primary">{factor}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CLOSING STATEMENT — moral centre ── */}
                <div className="fade-up" style={{ animationDelay: '220ms' }}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                    <p className="text-[1.3rem] md:text-[1.6rem] font-bold text-white leading-snug text-center mb-2">
                        We chose transparency
                    </p>
                    <p className="text-[1.3rem] md:text-[1.6rem] font-bold text-green-primary leading-snug text-center">
                        over silence.
                    </p>
                </div>

            </div>
        </section>
    );
};
