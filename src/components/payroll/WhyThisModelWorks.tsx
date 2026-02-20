import React, { useEffect, useRef } from 'react';

const noStatements = [
    { label: 'No complexity.', sub: 'The mechanism is straightforward — operational timing generates benefit, we share it.' },
    { label: 'No financial exposure.', sub: 'Client funds are never at risk. Zero investment activity. Zero third-party lending.' },
    { label: 'No yield promises.', sub: 'Credits are discretionary. We make no guarantees and no projections.' },
];

export const WhyThisModelWorks: React.FC = () => {
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
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.2) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f1724]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[760px] mx-auto text-center">

                {/* ── HEADING ── */}
                <div className="fade-up mb-8 md:mb-10">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-4 block">
                        The Model
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
                        Why This Model{' '}
                        <span className="text-[#10b981]">Works</span>
                    </h2>
                    <div className="space-y-3 text-[1.05rem] text-[#9ca3af] leading-relaxed max-w-[540px] mx-auto">
                        <p>
                            Payroll requires early funding for secure processing.
                        </p>
                        <p>
                            We simply recognise that operational timing has value — and we believe
                            long-term partners should share in that efficiency.
                        </p>
                    </div>
                </div>

                {/* ── THREE "NO X" STATEMENTS ── */}
                <div className="fade-up mb-10 md:mb-12 flex flex-col gap-0" style={{ animationDelay: '100ms' }}>
                    {/* Decorative top rule */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    <div className="flex flex-col gap-5">
                        {noStatements.map((item, i) => (
                            <div
                                key={i}
                                className="group flex flex-col items-center gap-1.5 py-5 border-b border-white/[0.08] last:border-0 hover:bg-white/[0.02] rounded-xl transition-colors duration-200 px-4"
                            >
                                <p className="text-[1.5rem] md:text-[1.8rem] font-bold text-white leading-tight tracking-tight">
                                    {item.label}
                                </p>
                                <p className="text-sm text-[#6b7280] leading-relaxed max-w-[420px]">
                                    {item.sub}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Decorative bottom rule */}
                    <div className="flex items-center gap-4 mt-8">
                        <div className="flex-1 h-px bg-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </div>

                {/* ── CLOSING BRAND STATEMENT ── */}
                <div className="fade-up" style={{ animationDelay: '180ms' }}>
                    <p className="text-[1.1rem] md:text-[1.3rem] font-bold text-[#9ca3af] mb-2">
                        Just structured operations
                    </p>
                    <p className="text-[1.4rem] md:text-[1.8rem] font-bold text-[#10b981] leading-snug">
                        and shared benefit.
                    </p>
                </div>

            </div>
        </section>
    );
};
