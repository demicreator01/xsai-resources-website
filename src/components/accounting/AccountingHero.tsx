import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const accountingItems = [
    { label: 'VAT Return', period: 'Q4 2024', status: 'filed', date: 'Filed 28 Jan' },
    { label: 'Corporation Tax', period: 'FY 2023', status: 'filed', date: 'Filed 15 Dec' },
    { label: 'Annual Accounts', period: 'FY 2024', status: 'active', date: 'Due 31 Mar' },
    { label: 'Companies House', period: 'Confirmation', status: 'active', date: 'Due 14 Apr' },
    { label: 'Self Assessment', period: 'Director 2024', status: 'pending', date: 'Due 31 Jan 26' },
];

// const pillars = [
//     { word: 'Clarity.', color: 'text-white' },
//     { word: 'Compliance.', color: 'text-green-primary' },
//     { word: 'Control.', color: 'text-white' },
// ];

export const AccountingHero: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.hero-fade') ?? [];
        els.forEach((el, i) => {
            (el as HTMLElement).style.animation = `heroFadeIn 700ms ${80 + i * 120}ms both`;
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#f8fffe] min-h-[90vh] flex items-center py-20 md:py-14 px-5 md:px-8 overflow-hidden"
        >
            {/* ── ATMOSPHERIC BACKGROUND ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-20 -left-20 w-[700px] h-[600px]"
                    style={{ background: 'radial-gradient(ellipse at 20% 20%, rgba(59,130,246,0.09) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[600px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 80% 85%, rgba(16,185,129,0.07) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute inset-y-0 right-0 w-1/2 opacity-25 hidden lg:block"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.2) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />
                <div className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-r from-[#f8fffe] via-transparent to-transparent hidden lg:block" />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto w-full pt-24 md:pt-28 pb-12 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_42%] gap-10 lg:gap-14 items-center">

                    {/* ── LEFT: TEXT CONTENT ── */}
                    <div>
                        {/* Breadcrumb */}
                        <div className="hero-fade flex items-center gap-2 mb-7">
                            <Link to="/" className="text-xs text-text-muted hover:text-green-primary transition-colors duration-200 font-medium">
                                Home
                            </Link>
                            <span className="text-[#d1d5db]">/</span>
                            <span className="text-xs text-[#0f1724] font-semibold">Accounting</span>
                        </div>

                        {/* Page label */}
                        <div className="hero-fade">
                            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-4 block">
                                Accounting Services
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="hero-fade text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.06] tracking-tight mb-7">
                            <span className="text-[#0f1724]">Accounting —</span>
                            <br />
                            <span className="text-green-primary">Structured Financial Control</span>
                        </h1>

                        {/* Opening statement */}
                        <div className="hero-fade border-l-[3px] border-green-primary pl-5 mb-6">
                            <p className="text-[1.05rem] text-[#374151] leading-relaxed">
                                Good accounting is not about ticking boxes.
                            </p>
                        </div>

                        {/* Three pillars — inline typographic treatment */}
                        <div className="hero-fade mb-6">
                            <div className="inline-flex flex-col gap-1">
                                {[
                                    "It's about clarity.",
                                    "It's about compliance.",
                                    "It's about control.",
                                ].map((line, i) => (
                                    <p key={i} className={`text-[1.1rem] font-bold leading-snug ${i === 1 ? 'text-green-primary' : 'text-[#0f1724]'
                                        }`}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Integration statement */}
                        <p className="hero-fade text-[1.05rem] text-[#374151] leading-relaxed mb-5 max-w-[480px]">
                            We provide integrated accounting services designed to work seamlessly
                            alongside your payroll and operational infrastructure.
                        </p>

                        {/* Three "No X" lines */}
                        <div className="hero-fade flex flex-wrap gap-2 mb-9">
                            {['No fragmentation.', 'No crossed wires.', 'No last-minute surprises.'].map((line, i) => (
                                <div key={i} className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                                    <span className="text-sm font-semibold text-[#0f1724]">{line}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="hero-fade flex flex-col sm:flex-row gap-3 mb-8">
                            <Link
                                to="#contact"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-green-primary text-white font-semibold text-base transition-all duration-200 hover:bg-green-dark hover:shadow-[0_8px_28px_rgba(16,185,129,0.40)] hover:-translate-y-0.5 min-h-[52px]"
                            >
                                Book a Discovery Call
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link
                                to="#services"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-border text-[#374151] font-semibold text-base transition-all duration-200 hover:border-green-primary/50 hover:text-green-primary min-h-[52px] bg-white/60"
                            >
                                See our services
                            </Link>
                        </div>

                        {/* Trust signals */}
                        <div className="hero-fade flex flex-wrap gap-3">
                            {[
                                'HMRC Compliant',
                                'Companies House Filing',
                                'MTD Ready',
                            ].map((tag, i) => (
                                <div key={i} className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3.5 py-1.5 shadow-sm">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <circle cx="5" cy="5" r="4.5" fill="#10b981" fillOpacity="0.15" />
                                        <path d="M3 5l1.5 1.5 2.5-2.5" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-[0.65rem] font-semibold text-[#374151]">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: ACCOUNTING STATUS PANEL ── */}
                    <div className="hero-fade hidden lg:block">
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_64px_rgba(0,0,0,0.12)] border border-border">
                            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />

                            {/* Panel header */}
                            <div className="bg-[#0f1724] px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/70" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-primary/70" />
                                    </div>
                                    <span className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#6b7280]">
                                        Accounting Overview
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-primary animate-pulse" />
                                    <span className="text-[0.6rem] text-green-primary font-semibold">Up to date</span>
                                </div>
                            </div>

                            {/* Deliverables list */}
                            <div className="bg-white px-6 py-5">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-text-muted mb-4">
                                    Compliance Deliverables
                                </p>

                                <div className="flex flex-col gap-3">
                                    {accountingItems.map((item, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-center justify-between p-3 rounded-xl border ${item.status === 'filed'
                                                ? 'bg-[#f0fdf4] border-[#bbf7d0]'
                                                : item.status === 'active'
                                                    ? 'bg-[#fffbeb] border-[#fde68a]'
                                                    : 'bg-bg-page border-border'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.status === 'filed'
                                                    ? 'bg-green-primary'
                                                    : item.status === 'active'
                                                        ? 'bg-[#f59e0b]'
                                                        : 'bg-border'
                                                    }`}>
                                                    {item.status === 'filed' ? (
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                            <path d="M2 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    ) : item.status === 'active' ? (
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                            <path d="M5 2v3l2 1.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                                                        </svg>
                                                    ) : (
                                                        <div className="w-2 h-2 rounded-full bg-text-muted" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-[#0f1724]">{item.label}</p>
                                                    <p className="text-[0.6rem] text-text-muted">{item.period}</p>
                                                </div>
                                            </div>
                                            <span className={`text-[0.6rem] font-bold rounded-full px-2.5 py-1 ${item.status === 'filed'
                                                ? 'bg-green-primary text-white'
                                                : item.status === 'active'
                                                    ? 'bg-[#f59e0b] text-white'
                                                    : 'bg-border text-text-muted'
                                                }`}>
                                                {item.date}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Panel footer — key metrics */}
                            <div className="bg-[#f8fffe] border-t border-border px-6 py-4 grid grid-cols-3 gap-4">
                                {[
                                    { label: 'Filed', value: '2', sub: 'this period' },
                                    { label: 'In Progress', value: '2', sub: 'on track' },
                                    { label: 'MTD', value: '✓', sub: 'compliant' },
                                ].map((metric, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-sm font-bold text-green-primary">{metric.value}</p>
                                        <p className="text-[0.55rem] font-bold uppercase tracking-wide text-[#0f1724]">{metric.label}</p>
                                        <p className="text-[0.55rem] text-text-muted">{metric.sub}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Compliance footer tag */}
                            <div className="bg-[#0f1724] px-6 py-3 text-center">
                                <p className="text-[0.55rem] text-text-secondary tracking-wide">
                                    HMRC compliant · MTD ready · Companies House filing · Annual accounts
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
