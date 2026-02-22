import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden bg-[#f8fffe] pt-32 lg:pt-4 px-5 md:px-8 pb-20 md:pb-16 lg:pb-20">

            {/* ── Atmospheric background layers ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 right-0 w-[700px] h-[600px]"
                    style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(16,185,129,0.11) 0%, transparent 65%)' }} />
                <div className="absolute bottom-0 -left-20 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(59,130,246,0.06) 0%, transparent 65%)' }} />
                <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block opacity-50"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.15) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }} />
                {/* Horizontal rule at bottom of hero */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-primary/20 to-transparent" />
            </div>

            {/* ── Content grid ── */}
            <div className="relative z-10 max-w-[1120px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[58%_42%] gap-10 lg:gap-8 items-center">

                {/* ── LEFT: Text ── */}
                <div className="flex flex-col gap-5 lg:gap-6">

                    {/* Eyebrow label */}
                    <div className="hero-headline inline-flex items-center gap-2 self-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary animate-pulse" />
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-green-primary">
                            UK Payroll & Accounting Infrastructure
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-headline text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold text-[#0f1724] leading-[1.08] tracking-tight">
                        Payroll &amp; Accounting<br />
                        Engineered for{' '}
                        <span className="text-green-primary">Efficiency.</span>
                    </h1>

                    {/* Interpretive sub-line */}
                    <p className="hero-sub text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-[500px]">
                        One infrastructure. Three disciplines. Built for businesses that demand precision.
                    </p>

                    {/* Bullet points */}
                    <div className="hero-sub flex flex-col gap-2.5">
                        {[
                            "Transparent £3 per employee payroll.",
                            "Integrated accounting & admin support.",
                            "Operational loyalty credits for businesses that move smart.",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="shrink-0 w-5 h-5 rounded-full bg-green-primary flex items-center justify-center mt-0.5 shadow-sm">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M8 2.5L4 7.5L2 5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-[#374151] text-base md:text-[1.05rem] leading-snug font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="hero-cta flex flex-col sm:flex-row gap-3">
                        {/* Primary */}
                        <Link
                            to="#contact"
                            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-green-primary text-white font-semibold text-base transition-all duration-200 hover:bg-green-dark hover:shadow-[0_8px_28px_rgba(16,185,129,0.38)] hover:-translate-y-0.5 min-h-[52px]"
                        >
                            Book a Discovery Call
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>

                        {/* Secondary */}
                        <a
                            href="#pricing"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-text-secondary font-medium text-base hover:text-green-primary transition-colors duration-200 min-h-[52px] underline-offset-4 hover:underline"
                        >
                            Request a Pricing Overview
                        </a>
                    </div>

                    {/* Trust micro-tags */}
                    <div className="hero-cta flex flex-wrap items-center gap-x-5 gap-y-2 mt-1">
                        {['HMRC Compliant', 'Safeguarded Accounts', 'Dedicated Account Manager'].map((tag) => (
                            <div key={tag} className="flex items-center gap-1.5">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 1L7.5 4.5H11L8 6.5L9 10L6 8L3 10L4 6.5L1 4.5H4.5L6 1Z" fill="#10b981" />
                                </svg>
                                <span className="text-xs text-[#6b7280] font-medium">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: Dashboard Panel ── */}
                <div className="hero-cta relative w-full lg:pl-4 mb-6 lg:mb-0" style={{ animationDelay: '500ms' }}>
                    <div className="absolute -inset-4 bg-green-primary/06 blur-3xl rounded-3xl pointer-events-none" />

                    <div className="relative rounded-2xl border border-border bg-white/85 backdrop-blur-md shadow-[0_12px_60px_rgba(0,0,0,0.10),0_1px_0_rgba(255,255,255,0.8)_inset] overflow-hidden">

                        {/* Top accent bar */}
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />

                        <div className="p-5 md:p-6">
                            {/* Panel header */}
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <p className="text-[0.65rem] font-bold tracking-[0.18em] text-green-primary uppercase">Live Overview</p>
                                    <p className="text-base font-bold text-[#0f1724] mt-0.5">Payroll Infrastructure</p>
                                </div>
                                <div className="flex items-center gap-1.5 bg-[#f0fdf4] px-2.5 py-1 rounded-full border border-[#bbf7d0]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-primary animate-pulse" />
                                    <span className="text-[0.65rem] text-green-dark font-semibold">Active</span>
                                </div>
                            </div>

                            {/* Metric cards */}
                            <div className="grid grid-cols-3 gap-2 mb-5">
                                {[
                                    { label: "Per Employee", value: "£3", sub: "/month" },
                                    { label: "RTI", value: "100%", sub: "compliant" },
                                    { label: "BACS", value: "Bureau", sub: "processing" },
                                ].map((m, i) => (
                                    <div key={i} className="rounded-xl bg-[#f8fffe] border border-border p-3 text-center">
                                        <p className="text-xl font-bold text-[#0f1724] leading-none">{m.value}</p>
                                        <p className="text-[0.6rem] text-green-primary font-bold tracking-wide uppercase mt-1">{m.label}</p>
                                        <p className="text-[0.6rem] text-text-muted mt-0.5">{m.sub}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Payroll flow SVG */}
                            <div className="mb-5">
                                <p className="text-[0.65rem] text-text-muted font-semibold uppercase tracking-wider mb-2.5">Payroll Cycle</p>
                                <div className="flex items-center gap-1 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
                                    {[
                                        { label: 'Data', sub: 'Submit' },
                                        { label: 'Calc', sub: 'Comply' },
                                        { label: 'Approve', sub: 'Review' },
                                        { label: 'Fund', sub: 'Secure' },
                                        { label: 'Pay', sub: 'On Time', active: true },
                                    ].map((node, i, arr) => (
                                        <React.Fragment key={i}>
                                            <div className={`flex-shrink-0 flex flex-col items-center justify-center rounded-xl border px-2 py-1.5 min-w-[44px] md:px-2.5 md:py-2 md:min-w-[52px] ${node.active
                                                ? 'bg-green-primary border-green-dark shadow-[0_4px_12px_rgba(16,185,129,0.35)]'
                                                : 'bg-[#f0fdf4] border-[#bbf7d0]'
                                                }`}>
                                                <p className={`text-[0.6rem] font-bold leading-none ${node.active ? 'text-white' : 'text-green-dark'}`}>{node.label}</p>
                                                <p className={`text-[0.55rem] mt-0.5 ${node.active ? 'text-white/80' : 'text-text-muted'}`}>{node.sub}</p>
                                            </div>
                                            {i < arr.length - 1 && (
                                                <svg className="flex-shrink-0 w-3 h-3" viewBox="0 0 12 12" fill="none">
                                                    <path d="M2 6H10M7 3l3 3-3 3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Loyalty credit meter */}
                            <div className="rounded-xl bg-[#f8fffe] border border-border p-4">
                                <div className="flex items-center justify-between mb-2.5">
                                    <p className="text-xs font-semibold text-[#374151]">Loyalty Credit Programme</p>
                                    <span className="text-[0.65rem] font-bold text-green-primary bg-[#f0fdf4] px-2 py-0.5 rounded-full border border-[#bbf7d0]">Earning</span>
                                </div>
                                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                                    <div className="h-full w-[68%] bg-linear-to-r from-[#10b981] to-[#34d399] rounded-full" />
                                </div>
                                <div className="flex justify-between mt-1.5 mb-3">
                                    <p className="text-[0.6rem] text-text-muted">Standard</p>
                                    <p className="text-[0.6rem] text-text-muted">Strategic</p>
                                </div>
                                <div className="grid grid-cols-3 gap-1.5">
                                    {['Standard', 'Early Funding', 'Strategic'].map((tier, i) => (
                                        <div key={i} className={`text-center rounded-lg py-1.5 ${i === 1 ? 'bg-green-primary text-white shadow-sm' : 'bg-[#f0fdf4] text-[#6b7280]'}`}>
                                            <p className="text-[0.58rem] font-semibold leading-none">{tier}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom compliance tag */}
                            <p className="text-center text-[0.6rem] text-text-muted mt-4 tracking-wide">
                                Reconciled daily · Safeguarded UK accounts · HMRC RTI compliant
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
