import React, { useEffect, useRef } from 'react';

const classificationStatements = [
    {
        label: 'Not an investment product',
        sub: 'Credits are not generated through investment activity. No client funds are placed into any financial instrument.',
        negative: true,
    },
    {
        label: 'Not interest paid on deposits',
        sub: 'Credits are not interest. They are not calculated as a return on deposited funds and do not constitute a savings or deposit product.',
        negative: true,
    },
    {
        label: 'Not guaranteed income',
        sub: 'Credits are discretionary. Allocation depends on payroll volume, funding timing, and partnership duration. No minimum credit is promised.',
        negative: true,
    },
    {
        label: 'A discretionary operational rebate',
        sub: 'Credits represent a share of treasury benefit generated during the operational holding window — returned to qualifying partners at XSAI\'s discretion.',
        negative: false,
    },
];

const howItWorks = [
    {
        step: '01',
        label: 'Funds received early',
        desc: 'Employer payroll funds arrive 3–5 working days before pay date via standard BACS cycle.',
    },
    {
        step: '02',
        label: 'Held in safeguarded accounts',
        desc: 'Funds sit in segregated UK bank accounts. Never deployed, lent, or invested during this window.',
    },
    {
        step: '03',
        label: 'Treasury benefit generated',
        desc: 'During the operational holding window, accounts may generate treasury benefit at bank level.',
    },
    {
        step: '04',
        label: 'Credits allocated to you',
        desc: 'A portion of that benefit is allocated back to qualifying partners as discretionary operational credits.',
    },
];

export const LoyaltyCreditProgramme: React.FC = () => {
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
            className="relative bg-white py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[600px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 85% 15%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 85%, rgba(16,185,129,0.06) 0%, transparent 65%)' }}
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-10 md:mb-12 max-w-[680px]">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-3 block">
                        Loyalty Credits
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-5">
                        The Loyalty Credit{' '}
                        <span className="text-[#10b981]">Programme</span>
                    </h2>
                    <div className="space-y-3 text-[1.05rem] text-[#374151] leading-relaxed">
                        <p>
                            Payroll funds are typically received several working days before employees are paid.
                            This timing is standard across the industry due to BACS processing cycles.
                        </p>
                        <p>
                            Within this operational window, safeguarded client accounts may generate treasury
                            benefit at bank level.
                        </p>
                    </div>
                </div>

                {/* ── CONTRAST MOMENT — dark strip ── */}
                <div className="fade-up mb-10 md:mb-12 rounded-2xl bg-[#0f1724] overflow-hidden" style={{ animationDelay: '80ms' }}>
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
                    <div className="px-7 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                        <div>
                            <p className="text-[1.15rem] md:text-[1.3rem] font-bold text-white leading-snug mb-1">
                                Most providers retain this entirely.
                            </p>
                            <p className="text-[1.15rem] md:text-[1.3rem] font-bold text-[#10b981] leading-snug">
                                We allocate a portion back to you.
                            </p>
                        </div>
                        <p className="text-sm text-[#9ca3af] max-w-[320px] leading-relaxed shrink-0">
                            Through our Loyalty Credit Programme, qualifying partners receive a share of operational
                            treasury benefit as discretionary credits — applied against invoices, redeemed, or used toward additional services.
                        </p>
                    </div>
                </div>

                {/* ── TWO COLUMN: How it works + Classification ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-10 md:mb-12">

                    {/* LEFT: How it works — compact 4-step vertical */}
                    <div className="fade-up" style={{ animationDelay: '120ms' }}>
                        <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#9ca3af] mb-5">
                            How the programme works
                        </p>
                        <div className="relative rounded-2xl border border-[#e5e7eb] bg-[#f8fffe] overflow-hidden">
                            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
                            <div className="p-6 space-y-0">
                                {howItWorks.map((step, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="flex flex-col items-center shrink-0">
                                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[0.65rem] font-bold
                        ${i < 3
                                                    ? 'bg-[#10b981] border-[#059669] text-white'
                                                    : 'bg-[#10b981] border-[#059669] shadow-[0_0_0_3px_rgba(16,185,129,0.2)] text-white'
                                                }`}>
                                                {i < 3 ? (
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M2 6l2.5 2.5 5.5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                ) : (
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M6 1L7.2 4H10L7.5 5.8l.9 3L6 7.5 3.6 8.8l.9-3L2 4h2.8L6 1Z" fill="white" />
                                                    </svg>
                                                )}
                                            </div>
                                            {i < howItWorks.length - 1 && (
                                                <div className="w-0.5 h-7 bg-[#bbf7d0] my-1" />
                                            )}
                                        </div>
                                        <div className="pb-4 flex-1">
                                            <p className="text-sm font-bold text-[#0f1724] mb-0.5">{step.label}</p>
                                            <p className="text-xs text-[#6b7280] leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Classification statements — the compliance focus */}
                    <div className="fade-up" style={{ animationDelay: '160ms' }}>
                        <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#9ca3af] mb-5">
                            Programme classification
                        </p>
                        <div className="space-y-3">
                            {classificationStatements.map((item, i) => (
                                <div
                                    key={i}
                                    className={`rounded-2xl border p-4 ${item.negative
                                            ? 'bg-white border-[#e5e7eb]'
                                            : 'bg-[#f0fdf4] border-[#bbf7d0]'
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${item.negative
                                                ? 'bg-[#fef2f2] border border-[#fecaca]'
                                                : 'bg-[#10b981] border border-[#059669]'
                                            }`}>
                                            {item.negative ? (
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M2.5 5h5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            ) : (
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </div>
                                        <div>
                                            <p className={`text-sm font-bold mb-1 ${item.negative ? 'text-[#374151]' : 'text-[#059669]'}`}>
                                                {item.negative ? '✗ ' : '✓ '}{item.label}
                                            </p>
                                            <p className="text-xs text-[#6b7280] leading-relaxed">{item.sub}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── FULL COMPLIANCE DISCLAIMER ── */}
                <div className="fade-up rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] overflow-hidden" style={{ animationDelay: '200ms' }}>
                    <div className="px-6 py-5 md:px-8 md:py-6 flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-[#bbf7d0] flex items-center justify-center mt-0.5">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="5.5" stroke="#10b981" strokeWidth="1.4" />
                                <path d="M7 4.5v3M7 9.5v.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#059669] mb-1">Programme Classification — Important</p>
                            <p className="text-sm text-[#374151] leading-relaxed">
                                The Loyalty Credit Programme is a <strong>discretionary operational rebate</strong>. It is not an investment product,
                                not interest on deposits, and not guaranteed income. Credits are allocated at XSAI's discretion based on
                                payroll volume, funding timing, and partnership duration. No client funds are exposed to investment risk
                                or third-party lending activity at any point during the holding window.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
