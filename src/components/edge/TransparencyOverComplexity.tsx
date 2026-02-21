import React, { useEffect, useRef } from 'react';

export const TransparencyOverComplexity: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.1 }
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
                    className="absolute top-0 right-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 5%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

                    {/* LEFT: Argument */}
                    <div className="fade-up">
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                            Edge 01
                        </span>
                        <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-5">
                            Transparency Over{' '}
                            <span className="text-green-primary">Complexity</span>
                        </h2>
                        <p className="text-[1.05rem] text-[#374151] leading-relaxed mb-6">
                            In many industries, complexity benefits the provider. Layered
                            pricing, hidden add-ons, and opaque processes create margin
                            that clients can't see or challenge.
                        </p>
                        <p className="text-[1.05rem] text-[#374151] leading-relaxed mb-8">
                            We believe clarity builds stronger businesses — and stronger
                            partnerships.
                        </p>

                        {/* Closing insight */}
                        <div className="border-l-[3px] border-green-primary pl-5">
                            <p className="text-[1.05rem] font-bold text-[#0f1724] leading-snug">
                                When you understand how your back office works,
                            </p>
                            <p className="text-[1.05rem] text-green-primary font-bold leading-snug">
                                you make better decisions.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Contrast panel */}
                    <div className="fade-up" style={{ animationDelay: '100ms' }}>
                        <div className="rounded-2xl border border-border overflow-hidden">

                            {/* Complexity side */}
                            <div className="bg-bg-page px-6 py-5 border-b border-border">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-text-muted mb-4">
                                    Complexity — benefits the provider
                                </p>
                                <div className="flex flex-col gap-2.5">
                                    {[
                                        'Layered pricing',
                                        'Hidden add-ons',
                                        'Opaque processes',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center shrink-0">
                                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                                    <path d="M1.5 3.5h4" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-[#6b7280]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Clarity side */}
                            <div className="bg-white px-6 py-5">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-green-primary mb-4">
                                    Clarity — benefits everyone
                                </p>
                                <div className="flex flex-col gap-2.5">
                                    {[
                                        'Simple fixed pricing — £3 per employee',
                                        'Structured, documented processes',
                                        'Open explanation of operational timing',
                                        'Loyalty Credits shared, not absorbed',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-green-primary flex items-center justify-center shrink-0">
                                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                                    <path d="M1.5 3.5l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.2"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-sm font-medium text-[#374151]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
