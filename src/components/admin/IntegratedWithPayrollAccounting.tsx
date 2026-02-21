import React, { useEffect, useRef } from 'react';

const noStatements = [
    'No chasing multiple providers.',
    'No conflicting information.',
    'No communication gaps.',
];

const ConnectedDiagram: React.FC = () => (
    <div className="relative flex flex-col items-center justify-center py-4">
        {/* Three service nodes connecting to centre */}
        <div className="relative w-full max-w-[280px] mx-auto">

            {/* Top: Payroll */}
            <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 bg-green-primary/15 border border-green-primary/30 rounded-xl px-4 py-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="#10b981" strokeWidth="1.3" />
                        <path d="M4 7h4M4 9.5h6" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs font-bold text-green-primary">Payroll</span>
                </div>
            </div>

            {/* Vertical connector from Payroll down */}
            <div className="flex justify-center mb-0">
                <div className="w-px h-5 bg-green-primary/40" />
            </div>

            {/* Middle row: Accounting — Centre node — Admin */}
            <div className="flex items-center justify-between mb-0 -ml-[26px]">
                <div className="flex items-center gap-2 bg-green-primary/15 border border-green-primary/30 rounded-xl px-4 py-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1" y="1.5" width="12" height="11" rx="1.5" stroke="#10b981" strokeWidth="1.3" />
                        <path d="M4 5h6M4 7.5h4" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs font-bold text-green-primary">Accounting</span>
                </div>

                {/* Horizontal connectors + centre node */}
                <div className="flex items-center gap-0 flex-1 mx-2">
                    <div className="flex-1 h-px bg-green-primary/40" />
                    <div className="w-8 h-8 rounded-full bg-green-primary flex items-center justify-center shadow-[0_0_16px_rgba(16,185,129,0.4)]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 1.5L2 4.5v3.5c0 3 2.2 5.5 5 6.5 2.8-1 5-3.5 5-6.5V4.5L7 1.5Z"
                                fill="white" fillOpacity="0.9" />
                        </svg>
                    </div>
                    <div className="flex-1 h-px bg-green-primary/40" />
                </div>

                <div className="flex items-center gap-2 bg-green-primary/15 border border-green-primary/30 rounded-xl px-4 py-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="#10b981" strokeWidth="1.3" />
                        <path d="M4 6.5h6M4 9h4" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs font-bold text-green-primary">Admin</span>
                </div>
            </div>

            {/* Vertical connector down from centre */}
            <div className="flex justify-center mt-0">
                <div className="w-px h-5 bg-green-primary/40" />
            </div>

            {/* Bottom: One accountable partner */}
            <div className="flex justify-center mt-3">
                <div className="flex items-center gap-2 bg-white/6 border border-white/15 rounded-xl px-4 py-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                    <span className="text-xs font-semibold text-white">One accountable partner</span>
                </div>
            </div>
        </div>
    </div>
);

export const IntegratedWithPayrollAccounting: React.FC = () => {
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
            className="relative bg-[#0f1724] py-20 md:py-24 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                <div
                    className="absolute top-0 left-0 w-[600px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 10%, rgba(16,185,129,0.09) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[500px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 90%, rgba(59,130,246,0.06) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* LEFT: Argument */}
                    <div className="fade-up">
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                            One Infrastructure
                        </span>
                        <h2 className="text-[1.9rem] md:text-[2.4rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                            Integrated With Payroll{' '}
                            <span className="text-green-primary">&amp; Accounting</span>
                        </h2>
                        <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-[440px]">
                            Because we manage payroll and accounting in-house, administrative
                            tasks align naturally with your financial records.
                        </p>

                        {/* Three "No X" statements */}
                        <div className="space-y-3 mb-8">
                            {noStatements.map((statement, i) => (
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

                        {/* Positive resolution */}
                        <div className="border-l-[3px] border-green-primary pl-5">
                            <p className="text-[1.1rem] font-bold text-white mb-1">
                                Everything connected.
                            </p>
                            <p className="text-[1.1rem] font-bold text-green-primary">
                                Everything accountable.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Connection diagram */}
                    <div className="fade-up" style={{ animationDelay: '120ms' }}>
                        <div className="rounded-2xl border border-white/8 overflow-hidden"
                            style={{ background: 'rgba(255,255,255,0.03)' }}>
                            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />
                            <div className="p-7 md:p-8">
                                <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#6b7280] mb-6 text-center">
                                    Connected Infrastructure
                                </p>
                                <ConnectedDiagram />
                                <div className="mt-6 pt-5 border-t text-center"
                                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                                    <p className="text-xs text-[#6b7280] leading-relaxed">
                                        Payroll, accounting, and admin operate under one structure.
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
