import React, { useEffect, useRef } from 'react';

const beliefs = [
    { text: 'Payroll should be reliable.', accent: false },
    { text: 'Pricing should be clear.', accent: false },
    { text: 'Operations should be explained.', accent: false },
    { text: 'Efficiency should be shared.', accent: false },
    { text: 'Infrastructure should be built to last.', accent: true },
];

export const OurEdgeClose: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.06 }
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
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 60%)' }}
                />
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[760px] mx-auto">

                {/* ── BLOCK 1: THE PHILOSOPHY ── */}
                <div className="fade-up mb-16 md:mb-20">

                    {/* Header */}
                    <div className="mb-10">
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                            The Philosophy
                        </span>
                        <p className="text-[#6b7280] text-[1.05rem] leading-relaxed max-w-[460px]">
                            Five things we believe. Not aspirations. The decisions we made
                            when we built this.
                        </p>
                    </div>

                    {/* Five belief statements */}
                    <div className="flex flex-col gap-0">
                        {beliefs.map((belief, i) => (
                            <div
                                key={i}
                                className="fade-up"
                                style={{ animationDelay: `${60 + i * 100}ms` }}
                            >
                                <div className={`py-5 ${i < beliefs.length - 1
                                    ? 'border-b border-white/[0.07]'
                                    : ''
                                    }`}>
                                    <p className={`text-[1.2rem] md:text-[1.5rem] font-bold leading-snug ${belief.accent ? 'text-green-primary' : 'text-white'
                                        }`}>
                                        {belief.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── DIVIDER ── */}
                <div className="fade-up mb-16 md:mb-20" style={{ animationDelay: '560ms' }}>
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                </div>

                {/* ── BLOCK 2: CTA ── */}
                <div className="fade-up text-center" style={{ animationDelay: '600ms' }}>
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-4 block">
                        Then We Should Speak
                    </span>
                    <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-white leading-tight mb-2">
                        Let's build your
                    </h2>
                    <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-green-primary leading-tight mb-6">
                        infrastructure.
                    </h2>
                    <p className="text-text-muted text-base leading-relaxed mb-10 max-w-[440px] mx-auto">
                        If you've read this far and it resonates — you're exactly who
                        we built this for. Let's make it concrete.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="mailto:contact@xsai.co.uk?subject=Discovery%20Call%20Request"
                            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-green-primary text-white font-semibold text-base transition-all duration-200 hover:bg-green-dark hover:shadow-[0_8px_28px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 min-h-[52px]"
                        >
                            Book a Discovery Call
                            <svg
                                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                viewBox="0 0 16 16" fill="none"
                            >
                                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a
                            href="mailto:proposals@xsai.co.uk?subject=Proposal%20Request%20-%20Our%20Edge"
                            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-base transition-all duration-200 hover:border-green-primary/50 hover:text-green-primary min-h-[52px]"
                            style={{ background: 'rgba(255,255,255,0.04)' }}
                        >
                            Request a Proposal
                        </a>
                    </div>

                    {/* Page end mark */}
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
