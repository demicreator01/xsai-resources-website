import React, { useEffect, useRef } from 'react';

export const FundingWindow: React.FC = () => {
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
            className="relative bg-white py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Subtle top seam from dark hero */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            {/* Atmospheric glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 5%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[680px] mx-auto">

                {/* ── ARTICLE SECTION HEADER ── */}
                <div className="fade-up mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                            01
                        </span>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <h2 className="text-[1.7rem] md:text-[2.2rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight">
                        The Funding Window
                    </h2>
                </div>

                {/* ── BODY COPY ── */}
                <div className="fade-up space-y-5 text-[1.05rem] text-[#374151] leading-relaxed mb-8"
                    style={{ animationDelay: '80ms' }}>
                    <p>
                        Across the industry, payroll providers require funds to be received
                        several working days before pay date.
                    </p>
                    <div className="flex flex-col gap-1 pl-0">
                        <p className="font-bold text-[#0f1724]">This isn't unusual.</p>
                        <p className="font-bold text-[#0f1724]">It's standard practice.</p>
                    </div>
                    <p>The reason is operational:</p>
                </div>

                {/* ── FOUR OPERATIONAL REASONS — typographic list ── */}
                <div className="fade-up mb-10" style={{ animationDelay: '120ms' }}>
                    <div className="border-l-[3px] border-green-primary pl-6 flex flex-col gap-3">
                        {[
                            'BACS processing cycles',
                            'Compliance checks',
                            'Reconciliation controls',
                            'Risk management',
                        ].map((reason, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-primary shrink-0" />
                                <p className="text-[1.05rem] text-[#374151] font-medium">{reason}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── TIMING DIAGRAM ── */}
                <div className="fade-up mb-10" style={{ animationDelay: '160ms' }}>
                    <div className="rounded-2xl border border-border bg-bg-page overflow-hidden">
                        <div className="px-6 py-4 border-b border-border">
                            <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-text-muted">
                                The Funding Timeline
                            </p>
                        </div>
                        <div className="px-6 py-8">

                            {/* Timeline bar */}
                            <div className="relative">

                                {/* Labels above */}
                                <div className="flex justify-between mb-3">
                                    <div className="text-center">
                                        <p className="text-[0.65rem] font-bold text-[#0f1724] uppercase tracking-wide">
                                            Funds Received
                                        </p>
                                        <p className="text-[0.6rem] text-text-muted">by provider</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[0.65rem] font-bold text-green-primary uppercase tracking-wide">
                                            Operational Window
                                        </p>
                                        <p className="text-[0.6rem] text-text-muted">processing period</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[0.65rem] font-bold text-[#0f1724] uppercase tracking-wide">
                                            Pay Date
                                        </p>
                                        <p className="text-[0.6rem] text-text-muted">employees paid</p>
                                    </div>
                                </div>

                                {/* Timeline track */}
                                <div className="relative h-3 rounded-full overflow-hidden flex">
                                    <div className="w-[28%] bg-[#0f1724] rounded-l-full" />
                                    <div className="flex-1 bg-green-primary" />
                                    <div className="w-[28%] bg-[#0f1724] rounded-r-full" />
                                </div>

                                {/* Dots on track */}
                                <div className="absolute top-1/2 -translate-y-1/2 left-[calc(28%-6px)]">
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-[#0f1724]" />
                                </div>
                                <div className="absolute top-1/2 -translate-y-1/2 right-[calc(28%-6px)]">
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-[#0f1724]" />
                                </div>

                                {/* Day labels below */}
                                <div className="flex justify-between mt-2">
                                    <p className="text-[0.6rem] text-text-muted">Day 1</p>
                                    <p className="text-[0.6rem] font-semibold text-green-primary">
                                        Several working days
                                    </p>
                                    <p className="text-[0.6rem] text-text-muted">Pay date</p>
                                </div>
                            </div>

                            {/* Diagram note */}
                            <div className="mt-6 pt-4 border-t border-border">
                                <p className="text-xs text-text-muted text-center leading-relaxed">
                                    Standard industry practice across all BACS payroll providers.
                                    The window duration varies by provider and funding arrangement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── CLOSING STATEMENT ── */}
                <div className="fade-up" style={{ animationDelay: '200ms' }}>
                    <div className="space-y-4 text-[1.05rem] text-[#374151] leading-relaxed">
                        <p>
                            To ensure employees are paid on time, funding must arrive early.
                        </p>
                        <p className="text-[1.1rem] font-bold text-[#0f1724]">
                            That timing creates{' '}
                            <span className="text-green-primary">an operational window.</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
