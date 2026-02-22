import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const cycleSteps = [
    { label: 'Funds Received', status: 'complete', time: 'Day 1' },
    { label: 'Payroll Processing', status: 'complete', time: 'Day 2' },
    { label: 'HMRC RTI Submission', status: 'complete', time: 'Day 3' },
    { label: 'BACS Bureau Dispatch', status: 'active', time: 'Day 4' },
    { label: 'Employee Pay Date', status: 'pending', time: 'Day 5' },
];

export const PayrollHero: React.FC = () => {
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
            className="relative bg-[#f8fffe] min-h-[90vh] flex items-center py-10 md:py-10 px-5 md:px-8 overflow-hidden"
        >
            {/* ── ATMOSPHERIC BACKGROUND ── */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Green radial glow — top left */}
                <div
                    className="absolute -top-20 -left-20 w-[700px] h-[600px]"
                    style={{ background: 'radial-gradient(ellipse at 20% 20%, rgba(16,185,129,0.12) 0%, transparent 65%)' }}
                />
                {/* Blue radial glow — bottom right */}
                <div
                    className="absolute bottom-0 right-0 w-[600px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 80% 85%, rgba(59,130,246,0.07) 0%, transparent 65%)' }}
                />
                {/* Dot grid — right half */}
                <div
                    className="absolute inset-y-0 right-0 w-1/2 opacity-30 hidden lg:block"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.25) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />
                {/* Fade dot grid at left edge */}
                <div className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-r from-[#f8fffe] via-transparent to-transparent hidden lg:block" />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto w-full pt-24 pb-8 sm:pb-2">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_42%] gap-10 lg:gap-14 items-center">

                    {/* ── LEFT: TEXT CONTENT ── */}
                    <div>
                        {/* Breadcrumb */}
                        <div className="hero-fade flex items-center gap-2 mb-7">
                            <Link to="/" className="text-xs text-text-muted hover:text-green-primary transition-colors duration-200 font-medium">
                                Home
                            </Link>
                            <span className="text-[#d1d5db]">/</span>
                            <span className="text-xs text-[#0f1724] font-semibold">Payroll</span>
                        </div>

                        {/* Page label */}
                        <div className="hero-fade">
                            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-4 block">
                                Payroll Services
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="hero-fade text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.06] tracking-tight mb-7">
                            <span className="text-[#0f1724]">Payroll —</span>
                            <br />
                            <span className="text-green-primary">Structured.</span>{' '}
                            <span className="text-green-primary">Secure.</span>{' '}
                            <span className="text-green-primary">Efficient.</span>
                        </h1>

                        {/* Philosophy statement */}
                        <div className="hero-fade border-l-[3px] border-green-primary pl-5 mb-6 space-y-2.5">
                            <p className="text-[1.05rem] text-[#374151] leading-relaxed">
                                Payroll is not just a task. It's a responsibility.
                            </p>
                            <p className="text-[1.05rem] text-[#374151] leading-relaxed">
                                Employees rely on accuracy. HMRC requires compliance. Employers need certainty.
                            </p>
                        </div>

                        {/* The missing line — key positioning statement */}
                        <p className="hero-fade text-[#0f1724] font-semibold text-[1.05rem] leading-relaxed mb-9 max-w-[480px]">
                            We built our payroll infrastructure around{' '}
                            <span className="text-green-primary">reliability first</span>{' '}
                            — and operational efficiency second.
                        </p>

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
                                to="#how-it-works"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-border text-[#374151] font-semibold text-base transition-all duration-200 hover:border-green-primary/50 hover:text-green-primary min-h-[52px] bg-white/60"
                            >
                                See how it works
                            </Link>
                        </div>

                        {/* Trust signals */}
                        <div className="hero-fade flex flex-wrap gap-3">
                            {[
                                'RTI Compliant',
                                'BACS Accredited Bureau',
                                'Auto-Enrolment Ready',
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

                    {/* ── RIGHT: PAYROLL CYCLE STATUS PANEL ── */}
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
                                        Payroll Cycle — Live View
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-primary animate-pulse" />
                                    <span className="text-[0.6rem] text-green-primary font-semibold">Active</span>
                                </div>
                            </div>

                            {/* Cycle steps */}
                            <div className="bg-white px-6 py-5">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-text-muted mb-4">
                                    Current Payroll Run
                                </p>

                                <div className="space-y-0">
                                    {cycleSteps.map((step, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            {/* Step indicator + connector */}
                                            <div className="flex flex-col items-center shrink-0 pt-0.5">
                                                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all
                          ${step.status === 'complete'
                                                        ? 'bg-green-primary border-green-primary'
                                                        : step.status === 'active'
                                                            ? 'bg-white border-green-primary shadow-[0_0_0_3px_rgba(16,185,129,0.2)]'
                                                            : 'bg-white border-border'}`}
                                                >
                                                    {step.status === 'complete' ? (
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path d="M2.5 6l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    ) : step.status === 'active' ? (
                                                        <div className="w-2.5 h-2.5 rounded-full bg-green-primary animate-pulse" />
                                                    ) : (
                                                        <div className="w-2 h-2 rounded-full bg-[#d1d5db]" />
                                                    )}
                                                </div>
                                                {i < cycleSteps.length - 1 && (
                                                    <div className={`w-0.5 h-7 mt-1 mb-1 ${step.status === 'complete' ? 'bg-green-primary' : 'bg-border'
                                                        }`} />
                                                )}
                                            </div>

                                            {/* Step content */}
                                            <div className="flex items-center justify-between flex-1 min-h-[40px]">
                                                <div>
                                                    <p className={`text-sm font-semibold leading-snug ${step.status === 'complete' ? 'text-[#0f1724]'
                                                        : step.status === 'active' ? 'text-green-primary'
                                                            : 'text-text-muted'
                                                        }`}>
                                                        {step.label}
                                                    </p>
                                                </div>
                                                <div className="shrink-0 ml-3">
                                                    <span className={`text-[0.6rem] font-semibold rounded-full px-2.5 py-1 ${step.status === 'complete'
                                                        ? 'bg-[#f0fdf4] text-green-dark'
                                                        : step.status === 'active'
                                                            ? 'bg-[#f0fdf4] border border-green-primary/30 text-green-primary'
                                                            : 'bg-bg-page text-text-muted'
                                                        }`}>
                                                        {step.status === 'complete' ? '✓ Done' : step.status === 'active' ? '● Live' : step.time}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Panel footer — key metrics */}
                            <div className="bg-[#f8fffe] border-t border-border px-6 py-4 grid grid-cols-3 gap-4">
                                {[
                                    { label: 'Rate', value: '£3', sub: 'per employee' },
                                    { label: 'RTI', value: '100%', sub: 'compliant' },
                                    { label: 'Pay Date', value: 'On time', sub: 'guaranteed' },
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
                                    Segregated accounts · Never deployed · Daily reconciliation · BACS bureau accredited
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
