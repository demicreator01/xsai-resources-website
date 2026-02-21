import React, { useEffect, useRef } from 'react';

const frictionItems = [
    'Reconciliation errors',
    'Misaligned records',
    'Year-end surprises',
    'Communication gaps',
];

const integrationItems = [
    'Payroll journals into bookkeeping',
    'Pension liabilities into reporting',
    'PAYE balances into reconciliation',
    'Year-end payroll data into statutory accounts',
];

export const IntegratedControl: React.FC = () => {
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
            className="relative bg-bg-page py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[300px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 95%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

                    {/* LEFT: Friction argument */}
                    <div className="fade-up">
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                            Edge 04
                        </span>
                        <h2 className="text-[1.9rem] md:text-[2.4rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-5">
                            Integrated{' '}
                            <span className="text-green-primary">Financial Control</span>
                        </h2>
                        <p className="text-[1.05rem] text-[#374151] leading-relaxed mb-7">
                            When payroll, accounting, and admin operate separately,
                            friction appears:
                        </p>

                        {/* Friction items */}
                        <div className="flex flex-col gap-2.5 mb-8">
                            {frictionItems.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center shrink-0">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <path d="M2 4h4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-medium text-[#374151]">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* Closing two-line statement */}
                        <div className="border-l-[3px] border-green-primary pl-5 space-y-1">
                            <p className="text-[1.05rem] font-bold text-[#0f1724]">
                                We integrate everything under one accountable structure.
                            </p>
                            <p className="text-[1.05rem] text-[#374151]">
                                That alignment creates clarity.
                            </p>
                            <p className="text-[1.05rem] font-bold text-green-primary">
                                And clarity creates control.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Integration resolution */}
                    <div className="fade-up" style={{ animationDelay: '100ms' }}>
                        <div className="rounded-2xl border border-border overflow-hidden bg-white shadow-sm">
                            <div className="h-0.5 bg-linear-to-r from-transparent via-green-primary to-transparent" />
                            <div className="px-6 py-5">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-green-primary mb-5">
                                    We integrate
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    {integrationItems.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-bg-page border border-border rounded-xl px-4 py-3">
                                            <div className="w-5 h-5 rounded-full bg-green-primary flex items-center justify-center shrink-0">
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                    <path d="M1.5 4l2 2 3.5-3.5" stroke="white" strokeWidth="1.3"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-sm font-medium text-[#374151]">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Dark closing bar */}
                                <div className="rounded-xl bg-[#0f1724] px-5 py-4">
                                    <p className="text-sm font-bold text-white mb-0.5">
                                        Everything under one accountable structure.
                                    </p>
                                    <p className="text-xs text-[#6b7280]">
                                        No duplication. No gaps. No provider coordination overhead.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
