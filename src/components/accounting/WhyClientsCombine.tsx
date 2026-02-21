import React, { useEffect, useRef } from 'react';

const outcomes = [
    {
        label: 'One accountable team',
        sub: 'One team owns payroll, bookkeeping, VAT, accounts, and tax. When something needs answering, there is one call to make.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="3" stroke="#10b981" strokeWidth="1.5" />
                <path d="M5 16c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M15 4a2.5 2.5 0 0 1 0 5" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M17.5 15c0-1.8-1.2-3-2.5-3.5" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Clean data flow between systems',
        sub: 'Payroll journals post directly into bookkeeping. PAYE balances reconcile automatically. Year-end payroll data feeds statutory accounts. No manual transfer, no transcription errors.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="3" width="6" height="5" rx="1.5" stroke="#10b981" strokeWidth="1.5" />
                <rect x="12" y="12" width="6" height="5" rx="1.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M8 5.5h2a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h0" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Reduced administrative burden',
        sub: 'No chasing documents between providers. No duplicate data entry. No version conflicts between your payroll reports and your management accounts.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M4 6h8M4 14h6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="16" cy="14" r="3" stroke="#10b981" strokeWidth="1.5" />
                <path d="M14.5 14l1 1 2-2" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'No reconciliation conflicts',
        sub: 'When payroll and accounting are separate, numbers rarely agree first time. When they share an infrastructure, they agree by design.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3v14M3 10h14" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="10" r="7" stroke="#10b981" strokeWidth="1.5" />
                <path d="M7 10l2 2 4-4" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Structured year-end preparation',
        sub: 'Year-end is not a scramble. Because payroll data feeds accounts throughout the year, the statutory accounts process starts from a clean, reconciled position every time.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="4" width="14" height="13" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M7 2v4M13 2v4M3 10h14" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 14l2 2 4-4" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const WhyClientsCombine: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
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
                    className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
                />
                <div
                    className="absolute top-0 right-0 w-[600px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 85% 10%, rgba(16,185,129,0.09) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(59,130,246,0.06) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0f1724]" />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_56%] gap-10 lg:gap-14 items-start">

                    {/* LEFT: Argument + closing brand statement */}
                    <div className="fade-up lg:sticky lg:top-8">
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                            The Combined Advantage
                        </span>
                        <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                            Why Clients Combine Payroll{' '}
                            <span className="text-green-primary">&amp; Accounting</span>
                        </h2>
                        <p className="text-text-muted text-lg leading-relaxed mb-10">
                            Most businesses run payroll and accounting through separate providers.
                            It works — until it doesn't. Reconciliation gaps, year-end scrambles,
                            and duplicated admin are the price of fragmentation.
                        </p>

                        {/* Closing brand statement — typographic moment */}
                        <div className="border-l-[3px] border-green-primary pl-5">
                            <p className="text-[1.2rem] md:text-[1.4rem] font-bold text-white leading-snug mb-1">
                                Your financial operations become
                            </p>
                            <p className="text-[1.2rem] md:text-[1.4rem] font-bold text-green-primary leading-snug">
                                cohesive — not reactive.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Five outcome cards */}
                    <div className="fade-up flex flex-col gap-3" style={{ animationDelay: '100ms' }}>
                        {outcomes.map((outcome, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 bg-white/4 border border-white/8 rounded-2xl px-5 py-4 hover:bg-white/[0.07] hover:border-green-primary/30 hover:-translate-y-0.5 transition-all duration-250"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-green-primary/10 border border-green-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-green-primary group-hover:border-green-dark transition-colors duration-250">
                                    <div className="group-hover:[&_path]:stroke-white group-hover:[&_circle]:stroke-white group-hover:[&_rect]:stroke-white transition-colors duration-250">
                                        {outcome.icon}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white mb-1">{outcome.label}</p>
                                    <p className="text-xs text-[#6b7280] leading-relaxed">{outcome.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
