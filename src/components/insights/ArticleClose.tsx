import React, { useEffect, useRef } from 'react';

const beliefs = [
    { label: 'Transparent', sub: 'Every aspect of our model explained openly.' },
    { label: 'Structured', sub: 'Defined processes, scopes, and pricing.' },
    { label: 'Efficient', sub: 'Operational efficiency shared, not absorbed.' },
    { label: 'Fair', sub: 'The same standards we expect from others.' },
];

const values = [
    'Clear economics',
    'Calm execution',
    'Fair partnership',
    'Long-term alignment',
];

export const ArticleClose: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.08 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#0f1724] py-20 md:py-32 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 60%)' }}
                />
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[680px] mx-auto">

                {/* ── BLOCK 1: THE BOTTOM LINE ── */}
                <div className="fade-up mb-16 md:mb-20">

                    {/* Article section header */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                            07
                        </span>
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#6b7280]">
                            The Bottom Line
                        </span>
                    </div>

                    <p className="text-[1.05rem] text-text-muted leading-relaxed mb-8">
                        Payroll is essential infrastructure. We believe essential
                        infrastructure should be:
                    </p>

                    {/* Four belief statements */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {beliefs.map((belief, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-white/8 px-5 py-4"
                                style={{ background: 'rgba(255,255,255,0.03)' }}
                            >
                                <p className="text-base font-bold text-white mb-1">{belief.label}</p>
                                <p className="text-xs text-[#6b7280] leading-relaxed">{belief.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* Closing philosophy */}
                    <div className="text-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 h-px bg-white/10" />
                            <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                        <p className="text-[1.05rem] text-text-muted mb-2">
                            There is nothing radical about that.
                        </p>
                        <p className="text-[1.1rem] font-bold text-white">
                            Just{' '}
                            <span className="text-green-primary">intentional design.</span>
                        </p>
                    </div>
                </div>

                {/* ── DIVIDER ── */}
                <div className="fade-up mb-16 md:mb-20" style={{ animationDelay: '80ms' }}>
                    <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* ── BLOCK 2: FOR BUSINESSES THAT THINK ── */}
                <div className="fade-up mb-16 md:mb-20" style={{ animationDelay: '120ms' }}>

                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                            08
                        </span>
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#6b7280]">
                            For Businesses That Think
                        </span>
                    </div>

                    <p className="text-[1.05rem] text-text-muted leading-relaxed mb-7">
                        If you value:
                    </p>

                    {/* Four value chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center gap-2 border border-green-primary/25 rounded-full px-4 py-2"
                                style={{ background: 'rgba(16,185,129,0.08)' }}
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                                <span className="text-sm font-semibold text-green-primary">{value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Self-selection statement */}
                    <div className="border-l-[3px] border-green-primary pl-5">
                        <p className="text-[1.1rem] font-bold text-white leading-snug">
                            We're built for you.
                        </p>
                    </div>
                </div>

                {/* ── DIVIDER ── */}
                <div className="fade-up mb-16 md:mb-20" style={{ animationDelay: '160ms' }}>
                    <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* ── BLOCK 3: CTA ── */}
                <div className="fade-up text-center" style={{ animationDelay: '200ms' }}>
                    <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-4 block">
                        Next Step
                    </p>
                    <h2 className="text-[1.6rem] md:text-[2rem] font-bold text-white leading-tight mb-3">
                        Ready to speak with a provider
                    </h2>
                    <h2 className="text-[1.6rem] md:text-[2rem] font-bold text-green-primary leading-tight mb-6">
                        that explains the economics?
                    </h2>
                    <p className="text-text-muted text-base leading-relaxed mb-10 max-w-[460px] mx-auto">
                        If you want accounting that integrates properly with your payroll
                        and operational systems — and a team that explains how it all works —
                        let's talk.
                    </p>

                    {/* Two CTA options */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="mailto:contact@xsai.co.uk?subject=Discovery%20Call%20Request"
                            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-green-primary text-white font-semibold text-base transition-all duration-200 hover:bg-green-dark hover:shadow-[0_8px_28px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 min-h-[52px]"
                        >
                            Book a Discovery Call
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a
                            href="mailto:proposals@xsai.co.uk?subject=Transparent%20Proposal%20Request"
                            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-base transition-all duration-200 hover:border-green-primary/50 hover:text-green-primary min-h-[52px]"
                            style={{ background: 'rgba(255,255,255,0.04)' }}
                        >
                            Request a Transparent Proposal
                        </a>
                    </div>
                    {/* Article end mark */}
                    <div className="mt-16 flex items-center gap-4 justify-center opacity-30">
                        <div className="h-px w-16 bg-white/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="h-px w-16 bg-white/30" />
                    </div>
                </div>

            </div>
        </section>
    );
};
