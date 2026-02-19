import React, { useEffect, useRef } from 'react';

export const CTA: React.FC = () => {
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
            id="contact"
            className="relative bg-[#0a1628] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Green glow — centred, like a spotlight */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 65%)' }}
                />
                {/* Dot grid — full width, very faint */}
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.25) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
                {/* Fade out dot grid at edges */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-transparent to-[#0a1628]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628]" />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up text-center mb-12 md:mb-14">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-4 block">
                        Get Started
                    </span>
                    <h2 className="text-[2rem] md:text-[3rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                        Let's build something{' '}
                        <span className="text-[#10b981]">that lasts.</span>
                    </h2>
                    <p className="text-[#9ca3af] text-lg max-w-[520px] mx-auto leading-relaxed">
                        If you're looking for transparent pricing, clean payroll execution, and
                        a team that treats your business as a long-term partnership — we should talk.
                    </p>
                </div>

                {/* ── TWO CONVERSION CARDS ── */}
                <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 md:mb-10" style={{ animationDelay: '100ms' }}>

                    {/* LEFT: Discovery Call — PRIMARY */}
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(16,185,129,0.15)]">
                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
                        <div className="bg-gradient-to-br from-[#10b981] to-[#059669] p-7 md:p-8 h-full flex flex-col">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 mb-5 self-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white">
                                    Most Popular Starting Point
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">Book a Discovery Call</h3>
                            <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">
                                A focused 15-minute briefing to discuss your payroll setup, current challenges,
                                and how XSAI's infrastructure maps to your requirements.
                                No obligation. No sales pressure.
                            </p>

                            {/* What to expect */}
                            <div className="space-y-2 mb-7">
                                {[
                                    'Review of your current payroll structure',
                                    'Clarity on pricing for your headcount',
                                    'Infrastructure fit assessment',
                                ].map((line, i) => (
                                    <div key={i} className="flex items-center gap-2.5">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <circle cx="7" cy="7" r="6" fill="rgba(255,255,255,0.2)" />
                                            <path d="M4.5 7l2 2 3-3" stroke="white" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-white/80 text-xs font-medium">{line}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Primary CTA */}
                            <a
                                href="mailto:contact@xsai.co.uk"
                                className="group w-full flex items-center justify-center gap-2 bg-white text-[#059669] font-bold text-sm px-6 py-4 rounded-xl hover:bg-[#f0fdf4] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                            >
                                Book a 15-Minute Call
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor"
                                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <p className="text-center text-white/50 text-xs mt-3">
                                Or email directly: contact@xsai.co.uk
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Formal Proposal — SECONDARY */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10">
                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="bg-white/[0.04] backdrop-blur-sm p-7 md:p-8 h-full flex flex-col">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-3 py-1 mb-5 self-start"
                                style={{ background: 'rgba(255,255,255,0.06)' }}>
                                <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-[#9ca3af]">
                                    Larger Organisations
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">Request a Formal Proposal</h3>
                            <p className="text-[#9ca3af] text-sm leading-relaxed mb-6 flex-1">
                                For multi-entity businesses or SMEs with 50+ employees, we provide
                                a detailed cost-benefit analysis, implementation roadmap, and
                                projected Loyalty Credit allocation based on your payroll profile.
                            </p>

                            {/* What's included in proposal */}
                            <div className="space-y-2 mb-7">
                                {[
                                    'Tailored pricing breakdown for your headcount',
                                    'Projected Loyalty Credit allocation estimate',
                                    'Implementation timeline and transition plan',
                                ].map((line, i) => (
                                    <div key={i} className="flex items-center gap-2.5">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <circle cx="7" cy="7" r="6" stroke="#10b981" strokeWidth="1.2" />
                                            <path d="M4.5 7l2 2 3-3" stroke="#10b981" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-[#9ca3af] text-xs font-medium">{line}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Secondary CTA */}
                            <a
                                href="mailto:proposals@xsai.co.uk"
                                className="group w-full flex items-center justify-center gap-2 bg-[#10b981] text-white font-bold text-sm px-6 py-4 rounded-xl hover:bg-[#059669] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
                            >
                                Request a Proposal
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor"
                                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <p className="text-center text-[#6b7280] text-xs mt-3">
                                proposals@xsai.co.uk · Typically responded within 2 business days
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── TRUST + COMPLIANCE STRIP ── */}
                <div className="fade-up border-t border-white/08 pt-7 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ animationDelay: '160ms', borderColor: 'rgba(255,255,255,0.08)' }}>

                    {/* Three trust signals */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
                        {[
                            'HMRC Compliant',
                            'Safeguarded Client Accounts',
                            'Dedicated Account Manager',
                        ].map((signal, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 1L2 3.5v3c0 2.5 1.8 4.5 4 5.5 2.2-1 4-3 4-5.5v-3L6 1Z"
                                        fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" />
                                    <path d="M4 6l1.5 1.5 2.5-2.5" stroke="#10b981" strokeWidth="1.2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-[0.65rem] font-semibold text-[#6b7280] uppercase tracking-wide">
                                    {signal}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Registered address — TODO: replace with actual address */}
                    <p className="text-[0.6rem] text-[#4b5563] text-center md:text-right leading-relaxed">
                        {/* TODO: Replace with actual registered address and company number before launch */}
                        XSAI Resources Ltd · Registered in England & Wales<br />
                        Registered Office: [ACTUAL ADDRESS] · VAT No: [VAT NUMBER]
                    </p>
                </div>

            </div>
        </section>
    );
};
