import React, { useEffect, useRef } from 'react';

interface CTAProps {
    headline?: string;
    subline?: string;
    rightCardTitle?: string;
    rightCardDescription?: string;
    rightCardChecklist?: string[];
    rightCardButton?: string;
    rightCardEmail?: string;
    rightCardEmailSubject?: string;
}

const DEFAULT_PROPS: Required<CTAProps> = {
    headline: "Let's build something that lasts.",
    subline:
        "If you're looking for transparent pricing, clean payroll execution, and a team that treats your business as a long-term partnership — we should talk.",
    rightCardTitle: 'Request a Formal Proposal',
    rightCardDescription:
        "For multi-entity businesses or SMEs with 50+ employees, we provide a detailed cost-benefit analysis, implementation roadmap, and projected Loyalty Credit allocation based on your payroll profile.",
    rightCardChecklist: [
        'Tailored pricing breakdown for your headcount',
        'Projected Loyalty Credit allocation estimate',
        'Implementation timeline and transition plan',
    ],
    rightCardButton: 'Request a Proposal',
    rightCardEmail: 'help@xsairesources.com',
    rightCardEmailSubject: 'Proposal%20Request',
};

export const CTA: React.FC<CTAProps> = (props) => {
    const {
        headline,
        subline,
        rightCardTitle,
        rightCardDescription,
        rightCardChecklist,
        rightCardButton,
        rightCardEmail,
        rightCardEmailSubject,
    } = { ...DEFAULT_PROPS, ...props };

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.12 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative bg-[#0f1724] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
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
                <div className="absolute inset-0 bg-linear-to-r from-[#0f1724] via-transparent to-[#0f1724]" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0f1724]" />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* Section header */}
                <div className="fade-up text-center mb-12">
                    <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-4">
                        Get Started
                    </p>
                    <h2 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight mb-5">
                        {headline}
                    </h2>
                    <p className="text-text-muted text-lg leading-relaxed max-w-[600px] mx-auto">
                        {subline}
                    </p>
                </div>

                {/* Two cards */}
                <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-5" style={{ animationDelay: '100ms' }}>

                    {/* LEFT CARD — always identical across all pages */}
                    <div className="rounded-2xl bg-green-primary p-7 flex flex-col gap-5">
                        <div>
                            <span className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                Most Popular Starting Point
                            </span>
                            <h3 className="text-[1.4rem] font-bold text-white mb-2">
                                Book a Discovery Call
                            </h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                A focused 15-minute briefing to discuss your payroll setup,
                                current challenges, and how XSAI's infrastructure maps to
                                your requirements. No obligation. No sales pressure.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {[
                                'Review of your current payroll structure',
                                'Clarity on pricing for your headcount',
                                'Infrastructure fit assessment',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2.5">
                                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <path d="M1.5 4l2 2 3-3" stroke="white" strokeWidth="1.3"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-white/90 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto flex flex-col gap-3">
                            <a
                                href="mailto:help@xsairesources.com?subject=Discovery%20Call%20Request"
                                className="group w-full flex items-center justify-center gap-2 bg-white text-green-dark font-bold py-3.5 rounded-xl text-sm transition-all duration-200 hover:bg-white/90"
                            >
                                Book a Discovery Call
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor"
                                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <p className="text-[0.7rem] text-white/60 text-center">
                                Or email directly:{' '}
                                <a href="mailto:help@xsairesources.com"
                                    className="text-white/80 hover:text-white underline">
                                    help@xsairesources.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT CARD — changes per page via props */}
                    <div className="rounded-2xl border border-white/8 p-7 flex flex-col gap-5"
                        style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-white/20 to-transparent -mt-7 -mx-7 mb-7" />
                        <div className="-mt-6">
                            <span className="inline-flex items-center border border-white/20 rounded-full px-3 py-1 text-[0.6rem] font-bold tracking-[0.15em] uppercase text-text-muted mb-4">
                                Larger Organisations
                            </span>
                            <h3 className="text-[1.4rem] font-bold text-white mb-2">
                                {rightCardTitle}
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {rightCardDescription}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {rightCardChecklist.map((item, i) => (
                                <div key={i} className="flex items-center gap-2.5">
                                    <div className="w-4 h-4 rounded-full border border-green-primary/50 flex items-center justify-center shrink-0">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <path d="M1.5 4l2 2 3-3" stroke="#10b981" strokeWidth="1.3"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-text-muted font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto flex flex-col gap-3">
                            <a
                                href={`mailto:${rightCardEmail}?subject=${rightCardEmailSubject}`}
                                className="group w-full flex items-center justify-center gap-2 bg-green-primary text-white font-bold py-3.5 rounded-xl text-sm transition-all duration-200 hover:bg-green-dark hover:shadow-[0_8px_28px_rgba(16,185,129,0.35)]"
                            >
                                {rightCardButton}
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor"
                                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <p className="text-[0.7rem] text-[#6b7280] text-center">
                                <a href={`mailto:${rightCardEmail}`}
                                    className="hover:text-text-muted underline">
                                    {rightCardEmail}
                                </a>
                                {' · '}Typically responded within 2 business days
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer trust signals */}
                <div className="fade-up mt-10 pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ animationDelay: '160ms' }}>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
                        {['HMRC Compliant', 'Safeguarded Client Accounts', 'Dedicated Account Manager'].map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 1L2 3.5v3c0 2.5 1.8 4.5 4 5.5 2.2-1 4-3 4-5.5v-3L6 1Z"
                                        fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" />
                                    <path d="M4 6l1.5 1.5 2.5-2.5" stroke="#10b981" strokeWidth="1.2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-[0.65rem] font-semibold text-[#6b7280] uppercase tracking-wide">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
