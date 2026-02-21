import React, { useEffect, useRef } from 'react';

const rightFitItems = [
    {
        label: 'You value structure over shortcuts.',
        sub: 'You understand that operational discipline compounds over time.',
    },
    {
        label: 'You want a partner, not a vendor.',
        sub: 'You expect the people handling your payroll and accounts to understand your business.',
    },
    {
        label: 'You think in years, not quarters.',
        sub: 'You are building something that needs to run reliably — not just cheaply.',
    },
    {
        label: 'You expect clarity as standard.',
        sub: 'You should not have to ask how your infrastructure works. It should be explained.',
    },
];

export const BuiltForLongTerm: React.FC = () => {
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
            className="relative bg-white py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-[400px] h-[300px]"
                    style={{ background: 'radial-gradient(ellipse at 5% 5%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[760px] mx-auto">

                {/* Section header */}
                <div className="fade-up mb-10">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Edge 05
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.4rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-5">
                        Built for Businesses That{' '}
                        <span className="text-green-primary">Think Long-Term</span>
                    </h2>
                    <p className="text-[1.05rem] text-[#374151] leading-relaxed">
                        Our infrastructure is not designed for the lowest common
                        denominator. It's designed for businesses that take their
                        financial operations seriously.
                    </p>
                </div>

                {/* Right fit items */}
                <div className="fade-up flex flex-col gap-6 mb-10"
                    style={{ animationDelay: '80ms' }}>
                    {rightFitItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-green-primary shrink-0 mt-2" />
                            <div>
                                <p className="text-base font-bold text-[#0f1724] mb-1">{item.label}</p>
                                <p className="text-sm text-[#6b7280] leading-relaxed">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="fade-up mb-8" style={{ animationDelay: '120ms' }}>
                    <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Misfit statement */}
                <div className="fade-up mb-8" style={{ animationDelay: '140ms' }}>
                    <div className="flex items-start gap-4 bg-bg-page border border-border rounded-2xl px-6 py-5">
                        <div className="w-5 h-5 rounded-full bg-[#f3f4f6] border border-border flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <path d="M2 4h4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#374151] mb-1">
                                If you're looking for the cheapest possible option with no
                                ongoing relationship —
                            </p>
                            <p className="text-sm text-text-muted leading-relaxed">
                                we're probably not the right fit, and we'd rather be honest
                                about that upfront than waste your time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Closing self-selection */}
                <div className="fade-up" style={{ animationDelay: '180ms' }}>
                    <div className="border-l-[3px] border-green-primary pl-5">
                        <p className="text-[1.1rem] font-bold text-[#0f1724] mb-1">
                            If that's your business —
                        </p>
                        <p className="text-[1.1rem] font-bold text-green-primary">
                            we're built for you.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
