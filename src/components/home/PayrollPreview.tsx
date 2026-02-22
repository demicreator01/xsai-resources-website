import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

const features = [
    {
        label: 'Full payroll processing',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#10b981" strokeWidth="1.4" />
                <path d="M5 7h4M5 9.5h6" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'RTI submissions to HMRC',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2l1.5 3.5H13l-2.8 2 1 3.5L8 9l-3.2 2 1-3.5L3 5.5h3.5L8 2Z" stroke="#10b981" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Auto-enrolment & pension',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="#10b981" strokeWidth="1.4" />
                <path d="M8 5v3l2 1.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Digital payslips',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="#10b981" strokeWidth="1.4" />
                <path d="M5.5 6h5M5.5 8.5h3" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Year-end P60 processing',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="2" stroke="#10b981" strokeWidth="1.4" />
                <path d="M5 8h6M8 5v6" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'BACS bureau handling',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 10l4-6 3 4 2-2.5 3 4.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Dedicated account manager',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="6" r="3" stroke="#10b981" strokeWidth="1.4" />
                <path d="M2.5 13.5c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Starter & leaver handling',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="6" cy="5" r="2.5" stroke="#10b981" strokeWidth="1.4" />
                <path d="M1.5 13c0-2.2 2-3.5 4.5-3.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M10.5 8v5M13 10.5L10.5 8 8 10.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const principles = [
    { label: 'Accuracy', icon: '◎' },
    { label: 'Security', icon: '◈' },
    { label: 'Efficiency', icon: '◇' },
];

export const PayrollPreview: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.12 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="pricing"
            className="relative bg-[#f0fdf4] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[600px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(16,185,129,0.10) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 20% 90%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* Section label + heading */}
                <div className="fade-up mb-7 md:mb-9">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Payroll
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        Payroll, Done <span className="text-green-primary">Properly</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[540px] leading-relaxed">
                        Our payroll service is designed around three principles. They aren't aspirations — they're the operational standard we hold ourselves to, every cycle.
                    </p>
                </div>

                {/* Three principles — badge row */}
                <div className="fade-up flex flex-wrap gap-3 mb-12 md:mb-14" style={{ animationDelay: '100ms' }}>
                    {principles.map((p, i) => (
                        <div
                            key={i}
                            className="inline-flex items-center gap-2.5 bg-white border border-[#bbf7d0] rounded-full px-4 py-2 shadow-sm"
                        >
                            <div className="w-5 h-5 rounded-full bg-green-primary flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M8 2.5L4 7.5L2 5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-sm font-bold text-[#0f1724]">{p.label}</span>
                        </div>
                    ))}
                </div>

                {/* Main two-column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[55%_42%] gap-8 lg:gap-12 items-start">

                    {/* LEFT: Feature grid */}
                    <div className="fade-up" style={{ animationDelay: '150ms' }}>
                        <p className="text-sm font-semibold text-[#374151] uppercase tracking-wider mb-5">
                            For £3 per employee / per month, you get:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-white rounded-xl border border-border px-4 py-2.5 hover:border-green-primary/40 hover:shadow-sm transition-all duration-200"
                                >
                                    <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center shrink-0">
                                        {f.icon}
                                    </div>
                                    <span className="text-sm font-medium text-[#374151] leading-snug">{f.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Pricing + inclusion panel */}
                    <div className="fade-up" style={{ animationDelay: '200ms' }}>
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.10)] border border-border">
                            {/* Top accent */}
                            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />

                            {/* Price block */}
                            <div className="bg-white px-7 py-8 text-center border-b border-border">
                                <p className="text-[0.6rem] font-bold tracking-[0.22em] uppercase text-text-muted mb-1">
                                    Flat Rate — No Surprises
                                </p>
                                <div className="flex items-start justify-center gap-1 mt-2">
                                    <span className="text-2xl font-bold text-green-primary mt-2">£</span>
                                    <span className="text-[5.5rem] font-bold text-green-primary leading-none tracking-tight">3</span>
                                </div>
                                <p className="text-[#6b7280] text-sm font-medium mt-1">per employee / per month</p>

                                {/* Comparison nudge */}
                                <div className="mt-4 inline-flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-3.5 py-1.5">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 1L7.5 4.5H11L8 6.5L9 10L6 8L3 10L4 6.5L1 4.5H4.5L6 1Z" fill="#10b981" />
                                    </svg>
                                    <span className="text-[0.65rem] font-semibold text-green-dark">
                                        Industry average: £8–£14/employee
                                    </span>
                                </div>
                            </div>

                            {/* What's included compact list */}
                            <div className="bg-[#f8fffe] px-7 py-6">
                                <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-text-muted mb-4">
                                    Everything Included
                                </p>
                                <div className="space-y-2.5">
                                    {features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2.5">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <circle cx="7" cy="7" r="6" fill="#10b981" />
                                                <path d="M4.5 7l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="text-xs text-[#374151] font-medium">{f.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA inside card */}
                            <div className="bg-white px-7 py-5 border-t border-border">
                                <Button
                                    variant="primary"
                                    href="mailto:help@xsairesources.com?subject=Discovery%20Call%20Request"
                                    className="w-full text-sm"
                                >
                                    Book a Discovery Call
                                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 14 14" fill="none">
                                        <path d="M2.5 7H11.5M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>
                                <p className="text-center text-[0.65rem] text-text-muted mt-2.5">
                                    No setup fees · Cancel with notice · Dedicated AM from day one
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing guarantee bar */}
                <div className="fade-up mt-12 md:mt-14 rounded-2xl bg-[#0f1724] overflow-hidden" style={{ animationDelay: '250ms' }}>
                    <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />
                    <div className="px-7 py-6 md:px-10 md:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-start md:items-center gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-green-primary/15 border border-green-primary/30 flex items-center justify-center mt-0.5 md:mt-0">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M9 2l2 4.5H16l-4 3 1.5 4.5L9 11.5 5.5 14 7 9.5 3 6.5h5L9 2Z" fill="#10b981" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg md:text-xl leading-snug">
                                    Your employees are paid correctly and on time —{' '}
                                    <span className="text-green-primary">every time.</span>
                                </p>
                                <p className="text-[#6b7280] text-sm mt-1">
                                    Backed by daily reconciliation, BACS bureau processing, and dedicated oversight.
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/payroll"
                            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-green-primary hover:text-[#34d399] transition-colors duration-200 whitespace-nowrap"
                        >
                            See how it works
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2.5 7H11.5M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};
