import React, { useEffect, useRef } from 'react';

const steps = [
    {
        number: 1,
        title: 'Data Submission',
        desc: 'You submit payroll data securely via our portal or direct file integration.',
        bullets: null,
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="2" width="14" height="16" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M7 7h6M7 10h6M7 13h4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M13 2v4h4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: 2,
        title: 'Calculation & Compliance',
        desc: 'We calculate payroll in line with all statutory and regulatory requirements. All submissions are filed accurately and on time.',
        bullets: [
            'HMRC RTI requirements',
            'Pension auto-enrolment regulations',
            'Statutory pay rules',
            'Tax code updates',
        ],
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L3 6v5c0 4.5 3 8 7 9.5 4-1.5 7-5 7-9.5V6L10 2Z"
                    stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7 10l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: 3,
        title: 'Employer Approval',
        desc: 'You receive a clear payroll summary for approval before processing. No surprises. Full visibility.',
        bullets: null,
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="5" width="16" height="12" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M6 5V4a4 4 0 0 1 8 0v1" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="11" r="2" stroke="#10b981" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        number: 4,
        title: 'Payroll Funding',
        desc: 'Funds are received 3–5 working days before pay date. This timing ensures secure BACS processing and full reconciliation.',
        bullets: null,
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="5" width="16" height="11" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <circle cx="10" cy="10.5" r="2.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M5.5 10.5h1M13.5 10.5h1" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: 5,
        title: 'Secure Disbursement',
        desc: 'BACS files submitted. Employees paid on the agreed date. RTI confirmation and reporting follow immediately.',
        bullets: null,
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 10h14M12 5l5 5-5 5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 7v6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

export const ProcessSteps: React.FC = () => {
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
            id="process"
            className="relative bg-white py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 15%, rgba(16,185,129,0.07) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 85%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-12 md:mb-16 max-w-[600px]">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-3 block">
                        How It Works
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        Our Payroll <span className="text-[#10b981]">Process</span>
                    </h2>
                    <p className="text-[#4b5563] text-lg leading-relaxed">
                        We follow a structured, repeatable workflow to ensure every payroll cycle runs smoothly — every cycle, every time.
                    </p>
                </div>

                {/* ── DESKTOP HORIZONTAL TIMELINE (lg+) ── */}
                <div className="hidden lg:block fade-up mb-12" style={{ animationDelay: '80ms' }}>

                    {/* Progress bar connector */}
                    <div className="relative flex items-start justify-between mb-0">
                        {/* The connecting line — sits behind the step numbers */}
                        <div className="absolute top-5 left-[2.5rem] right-[2.5rem] h-0.5 z-0">
                            <div className="h-full bg-[#e5e7eb] rounded-full relative overflow-hidden">
                                {/* Green fill — covers steps 1 to 4 (4/5 complete) */}
                                <div className="absolute inset-y-0 left-0 bg-[#10b981] rounded-full" style={{ width: '75%' }} />
                            </div>
                        </div>

                        {/* Step number circles — above the line */}
                        {steps.map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center" style={{ width: '20%' }}>
                                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm shadow-sm mb-4 ${i < 4
                                        ? 'bg-[#10b981] border-[#059669] text-white'
                                        : i === 4
                                            ? 'bg-white border-[#10b981] text-[#10b981] shadow-[0_0_0_3px_rgba(16,185,129,0.15)]'
                                            : 'bg-white border-[#e5e7eb] text-[#9ca3af]'
                                    }`}>
                                    {i < 3 ? (
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        step.number
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Step cards — below the progress line */}
                    <div className="flex items-start justify-between gap-4">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`flex-1 rounded-2xl border p-5 hover:-translate-y-1 transition-all duration-300 ${i === 3
                                        ? 'border-[#10b981]/40 bg-[#f0fdf4] shadow-[0_4px_20px_rgba(16,185,129,0.10)]'
                                        : 'border-[#e5e7eb] bg-white hover:border-[#10b981]/30 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)]'
                                    }`}
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mb-3">
                                    {step.icon}
                                </div>
                                <p className="text-sm font-bold text-[#0f1724] mb-2 leading-snug">{step.title}</p>
                                <p className="text-xs text-[#6b7280] leading-relaxed">{step.desc}</p>

                                {/* Step 2 compliance bullets */}
                                {step.bullets && (
                                    <div className="mt-3 space-y-1.5">
                                        {step.bullets.map((b, j) => (
                                            <div key={j} className="flex items-center gap-2">
                                                <div className="w-3.5 h-3.5 rounded-full bg-[#10b981] flex items-center justify-center shrink-0">
                                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                        <path d="M1.5 4L3 5.5 6.5 2" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <span className="text-[0.65rem] text-[#374151] font-medium">{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Active step indicator */}
                                {i === 3 && (
                                    <div className="mt-3 flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                                        <span className="text-[0.6rem] text-[#10b981] font-bold uppercase tracking-wider">In Progress</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── MOBILE + TABLET VERTICAL TIMELINE (< lg) ── */}
                <div className="lg:hidden fade-up mb-12" style={{ animationDelay: '80ms' }}>
                    <div className="flex flex-col gap-0">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-5">
                                {/* Left: connector */}
                                <div className="flex flex-col items-center shrink-0">
                                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm shadow-sm z-10 ${i < 3
                                            ? 'bg-[#10b981] border-[#059669] text-white'
                                            : i === 3
                                                ? 'bg-white border-[#10b981] text-[#10b981] shadow-[0_0_0_3px_rgba(16,185,129,0.15)]'
                                                : 'bg-white border-[#e5e7eb] text-[#9ca3af]'
                                        }`}>
                                        {i < 3 ? (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            step.number
                                        )}
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className={`w-0.5 flex-1 min-h-[40px] mt-1 mb-1 ${i < 3 ? 'bg-[#10b981]' : 'bg-[#e5e7eb]'}`} />
                                    )}
                                </div>

                                {/* Right: content card */}
                                <div className={`flex-1 rounded-2xl border p-4 mb-4 ${i === 3
                                        ? 'border-[#10b981]/40 bg-[#f0fdf4]'
                                        : 'border-[#e5e7eb] bg-white'
                                    }`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center shrink-0">
                                            {step.icon}
                                        </div>
                                        <p className="text-sm font-bold text-[#0f1724] leading-snug">{step.title}</p>
                                    </div>
                                    <p className="text-xs text-[#6b7280] leading-relaxed">{step.desc}</p>

                                    {step.bullets && (
                                        <div className="mt-3 space-y-1.5">
                                            {step.bullets.map((b, j) => (
                                                <div key={j} className="flex items-center gap-2">
                                                    <div className="w-3.5 h-3.5 rounded-full bg-[#10b981] flex items-center justify-center shrink-0">
                                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                            <path d="M1.5 4L3 5.5 6.5 2" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.65rem] text-[#374151] font-medium">{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {i === 3 && (
                                        <div className="mt-2 flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                                            <span className="text-[0.6rem] text-[#10b981] font-bold uppercase tracking-wider">In Progress</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CLOSING BRAND LINE ── */}
                <div className="fade-up flex flex-col items-center gap-3 text-center" style={{ animationDelay: '160ms' }}>
                    <div className="flex items-center gap-4 w-full max-w-[400px]">
                        <div className="flex-1 h-px bg-[#e5e7eb]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                        <div className="flex-1 h-px bg-[#e5e7eb]" />
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-[#0f1724]">
                        Simple.{' '}
                        <span className="text-[#10b981]">Controlled.</span>{' '}
                        Accountable.
                    </p>
                    <p className="text-sm text-[#9ca3af] max-w-[360px]">
                        The same five steps. Every payroll cycle. No exceptions.
                    </p>
                </div>

            </div>
        </section>
    );
};
