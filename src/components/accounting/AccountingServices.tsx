import React, { useState, useEffect, useRef } from 'react';

const services = [
    {
        id: 'bookkeeping',
        title: 'Bookkeeping',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M6 5.5h6M6 8h4M6 10.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        items: [
            'Ongoing transaction recording',
            'Bank reconciliations',
            'Management of expenses',
            'Clear monthly reporting',
            'Cloud software integration',
        ],
        closing: 'Your books stay current, organised, and inspection-ready.',
    },
    {
        id: 'vat',
        title: 'VAT Returns',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="1" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M6 5h6M6 8h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M11 12l0.7 0.7 1.5-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        items: [
            'VAT scheme advisory',
            'Accurate VAT submissions',
            'Digital record compliance',
            'Filing under Making Tax Digital (MTD)',
        ],
        closing: 'No missed deadlines. No late penalties.',
    },
    {
        id: 'annual-accounts',
        title: 'Annual Accounts',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M5.5 13V9M9 13V6M12.5 13V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        items: [
            'Preparation of statutory accounts',
            'Companies House filing',
            'Compliance with UK accounting standards',
            'Director review and sign-off support',
        ],
        closing: 'Your year-end handled professionally and properly.',
    },
    {
        id: 'corporation-tax',
        title: 'Corporation Tax',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M6 5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="7" cy="9" r="0.8" fill="currentColor" />
                <circle cx="11" cy="12" r="0.8" fill="currentColor" />
                <path d="M11.5 8L6.5 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
        items: [
            'Corporation tax calculations',
            'CT600 submission',
            'Tax efficiency review',
            'Filing and deadline monitoring',
        ],
        closing: 'Clear calculations. No surprises.',
    },
    {
        id: 'self-assessment',
        title: 'Self-Assessment',
        subtitle: 'For directors and business owners',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" />
                <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        items: [
            'Self-assessment preparation',
            'Dividend planning',
            'Income structuring guidance',
            'Filing and HMRC liaison',
        ],
        closing: 'Your personal tax aligned with your company strategy.',
    },
    {
        id: 'integration',
        title: 'Integrated with Payroll',
        subtitle: 'When payroll and accounting are handled separately, inconsistencies arise. We integrate:',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="5" width="6" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <rect x="11" y="5" width="6" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M7 9h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
        items: [
            'Payroll journals into bookkeeping',
            'Pension liabilities into reporting',
            'PAYE balances into reconciliation',
            'Year-end payroll data into statutory accounts',
        ],
        closing: 'Everything aligns automatically.',
        closingSub: 'No duplicated effort. No conflicting numbers.',
    },
];

export const AccountingServices: React.FC = () => {
    const [active, setActive] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.12 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    // Re-trigger tab content animation on service change
    useEffect(() => {
        const el = contentRef.current;
        if (el) {
            el.style.animation = 'none';
            el.offsetHeight; // trigger reflow
            el.style.animation = 'tabFade 350ms ease both';
        }
    }, [active]);

    const current = services[active];

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#f9fafb] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[450px]"
                    style={{ background: 'radial-gradient(ellipse at 15% 85%, rgba(16,185,129,0.06) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute top-0 right-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 85% 10%, rgba(59,130,246,0.04) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── SECTION INTRO ── */}
                <div className="fade-up mb-10 md:mb-12">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Our Services
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-5">
                        What We <span className="text-green-primary">Provide</span>
                    </h2>
                    <p className="text-[1.05rem] text-[#374151] leading-relaxed max-w-[580px]">
                        Our accounting services are built to support growing UK businesses
                        with structured financial oversight — from daily bookkeeping to year-end filing.
                    </p>
                </div>

                {/* ── SERVICE TAB NAVIGATION ── */}
                <div className="fade-up -mx-5 px-5 md:mx-0 md:px-0 mb-8 md:mb-10" style={{ animationDelay: '80ms' }}>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible" style={{ scrollbarWidth: 'none' }}>
                        {services.map((service, i) => (
                            <button
                                key={service.id}
                                onClick={() => setActive(i)}
                                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border whitespace-nowrap ${active === i
                                        ? 'bg-green-primary text-white border-green-primary shadow-[0_4px_12px_rgba(16,185,129,0.25)]'
                                        : 'bg-white text-[#374151] border-[#e5e7eb] hover:border-green-primary/40 hover:text-green-primary'
                                    }`}
                            >
                                <div className={`w-[18px] h-[18px] ${active === i ? 'text-white' : 'text-green-primary'}`}>
                                    {service.icon}
                                </div>
                                {service.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── ACTIVE SERVICE CONTENT ── */}
                <div ref={contentRef} className="fade-up" style={{ animationDelay: '120ms' }}>
                    <div className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />

                        <div className="p-6 md:p-8 lg:p-10">

                            {/* Service header */}
                            <div className="flex items-start gap-4 mb-7">
                                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-green-primary">
                                    {current.icon}
                                </div>
                                <div>
                                    <h3 className="text-[1.25rem] md:text-[1.4rem] font-bold text-[#0f1724] leading-snug">
                                        {current.title}
                                    </h3>
                                    {current.subtitle && (
                                        <p className="text-sm text-[#6b7280] mt-1 leading-relaxed max-w-[480px]">
                                            {current.subtitle}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Deliverable items — 2-col on desktop, 1-col on mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {current.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-[#f9fafb] rounded-xl border border-[#f3f4f6] hover:border-green-primary/30 hover:bg-[#f0fdf4]/50 transition-colors duration-200"
                                    >
                                        <div className="shrink-0 w-5 h-5 rounded-full bg-green-primary flex items-center justify-center">
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M2 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-[#374151]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Closing guarantee footer */}
                        <div className="bg-[#0f1724] px-6 py-5 md:px-10 md:py-6 flex items-center gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-green-primary/15 border border-green-primary/30 flex items-center justify-center hidden sm:flex">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 1l1.2 2.4L10 4l-2 1.9.5 2.8L6 7.2 3.5 8.7l.5-2.8-2-1.9 2.8-.6L6 1Z" fill="#10b981" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[1rem] md:text-[1.1rem] font-bold text-white leading-snug">
                                    {current.closing}
                                </p>
                                {current.closingSub && (
                                    <p className="text-sm text-[#9ca3af] mt-1">{current.closingSub}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
