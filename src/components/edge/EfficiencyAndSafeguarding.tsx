import React, { useEffect, useRef } from 'react';

export const EfficiencyAndSafeguarding: React.FC = () => {
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
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.09) 0%, transparent 60%)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── BLOCK 1: OPERATIONAL EFFICIENCY ── */}
                <div className="fade-up mb-16 md:mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

                        {/* Left: Argument */}
                        <div>
                            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                                Edge 02
                            </span>
                            <h2 className="text-[1.9rem] md:text-[2.4rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                                Operational Efficiency —{' '}
                                <span className="text-green-primary">Shared</span>
                            </h2>
                            <p className="text-text-muted text-[1.05rem] leading-relaxed mb-5">
                                Payroll requires funds to be received several days before
                                employees are paid. This timing exists across the entire
                                industry due to BACS processing cycles.
                            </p>
                            <p className="text-text-muted text-[1.05rem] leading-relaxed mb-5">
                                What's rarely discussed is that this operational window can
                                generate treasury benefit at bank level.
                            </p>
                            <div className="border-l-[3px] border-green-primary pl-5">
                                <p className="text-base font-bold text-white mb-1">
                                    Most providers retain this entirely.
                                </p>
                                <p className="text-green-primary font-bold text-base">
                                    We allocate a portion back to qualifying long-term partners.
                                </p>
                            </div>
                        </div>

                        {/* Right: Classification panel */}
                        <div>
                            <div className="rounded-2xl overflow-hidden border border-white/8"
                                style={{ background: 'rgba(255,255,255,0.03)' }}>
                                <div className="h-0.5 bg-linear-to-r from-transparent via-green-primary to-transparent" />
                                <div className="px-6 py-5">
                                    <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#6b7280] mb-5">
                                        Not as
                                    </p>
                                    <div className="flex flex-col gap-3 mb-6">
                                        {[
                                            'An investment product',
                                            'Interest on deposits',
                                            'A guaranteed return',
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

                                    <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.06)' }} />

                                    <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-4">
                                        But as
                                    </p>
                                    <div className="flex items-start gap-3">
                                        <div className="w-4 h-4 rounded-full bg-green-primary flex items-center justify-center shrink-0 mt-0.5">
                                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                                <path d="M1.5 3.5l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-semibold text-white leading-relaxed">
                                            A discretionary commercial rebate aligned with volume,
                                            early funding, and long-term partnership.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── DIVIDER ── */}
                <div className="fade-up mb-16 md:mb-20" style={{ animationDelay: '80ms' }}>
                    <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* ── BLOCK 2: SAFEGUARDING ── */}
                <div className="fade-up" style={{ animationDelay: '120ms' }}>
                    <div className="max-w-[760px] mx-auto text-center">
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                            Edge 03
                        </span>
                        <h2 className="text-[1.9rem] md:text-[2.4rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                            Safeguarding First.{' '}
                            <span className="text-green-primary">Always.</span>
                        </h2>
                        <p className="text-text-muted text-[1.05rem] leading-relaxed mb-10 max-w-[520px] mx-auto">
                            Our edge is not built on risk-taking. Sharing operational
                            efficiency and protecting client funds are two entirely
                            separate things.
                        </p>

                        {/* Three safeguarding declarations */}
                        <div className="flex flex-col gap-4 mb-10">
                            {[
                                {
                                    statement: 'Held in segregated safeguarded UK bank accounts.',
                                    detail: 'Separation maintained at all times — not just at pay date.',
                                },
                                {
                                    statement: 'Used solely for payroll processing.',
                                    detail: 'This is a structural control, not a policy.',
                                },
                                {
                                    statement: 'Never deployed, invested, or lent.',
                                    detail: 'Client funds sit and wait to be paid to employees. Nothing else.',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 text-left rounded-2xl border border-white/8 px-6 py-4"
                                    style={{ background: 'rgba(16,185,129,0.04)' }}
                                >
                                    <div className="w-6 h-6 rounded-full bg-green-primary flex items-center justify-center shrink-0 mt-0.5">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M2 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white mb-0.5">{item.statement}</p>
                                        <p className="text-xs text-[#6b7280] leading-relaxed">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Closing declaration */}
                        <div className="flex items-center gap-4 mb-5">
                            <div className="flex-1 h-px bg-white/10" />
                            <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                        <p className="text-[1.1rem] font-bold text-white mb-1">
                            Payroll is trust infrastructure.
                        </p>
                        <p className="text-[1.1rem] font-bold text-green-primary">
                            There is no room for experimentation.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
