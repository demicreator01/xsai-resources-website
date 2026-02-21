import React, { useEffect, useRef } from 'react';

export const TheQuietPart: React.FC = () => {
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
            className="relative bg-bg-page py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="relative z-10 max-w-[680px] mx-auto">

                {/* ── ARTICLE SECTION HEADER ── */}
                <div className="fade-up mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                            02
                        </span>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <h2 className="text-[1.7rem] md:text-[2.2rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight">
                        The Quiet Part
                    </h2>
                </div>

                {/* ── OPENING BODY COPY ── */}
                <div className="fade-up text-[1.05rem] text-[#374151] leading-relaxed mb-8"
                    style={{ animationDelay: '80ms' }}>
                    <p>
                        When payroll funds sit in safeguarded bank accounts during that
                        operational window, they may generate treasury benefit at bank level.
                    </p>
                </div>

                {/* ── CONTRAST PANEL ── */}
                <div className="fade-up mb-10" style={{ animationDelay: '120ms' }}>
                    <div className="rounded-2xl overflow-hidden border border-border shadow-sm">

                        {/* Panel header */}
                        <div className="bg-[#0f1724] px-6 py-4">
                            <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#6b7280]">
                                In most traditional models
                            </p>
                        </div>

                        {/* Three statements */}
                        <div className="bg-white divide-y divide-[#f3f4f6]">
                            {[
                                {
                                    statement: 'The provider retains that entirely.',
                                    sub: 'The full treasury benefit stays with the bureau.',
                                },
                                {
                                    statement: 'It is not discussed.',
                                    sub: 'No mention in contracts, proposals, or service reviews.',
                                },
                                {
                                    statement: 'It is not visible.',
                                    sub: 'Employers have no way to know it is happening.',
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 px-6 py-4">
                                    <div className="w-5 h-5 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center shrink-0 mt-0.5">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <path d="M2 4h4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#0f1724] mb-0.5">{item.statement}</p>
                                        <p className="text-xs text-text-muted leading-relaxed">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── "NOT ILLEGAL" — deliberate pause ── */}
                <div className="fade-up mb-10" style={{ animationDelay: '160ms' }}>
                    <div className="flex items-start gap-4 bg-white border border-border rounded-2xl px-6 py-5">
                        <div className="w-6 h-6 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M5 2v3l2 1.5" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
                                <circle cx="5" cy="5" r="4" stroke="#10b981" strokeWidth="1.3" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#0f1724] mb-1">
                                And it is not illegal.
                            </p>
                            <p className="text-sm text-[#6b7280] leading-relaxed">
                                It's simply part of how the economics of payroll infrastructure
                                work. There is no regulation requiring providers to disclose or
                                share treasury benefit with clients.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── CLOSING HOOK ── */}
                <div className="fade-up" style={{ animationDelay: '200ms' }}>
                    <div className="border-l-[3px] border-green-primary pl-5">
                        <p className="text-[1.05rem] text-[#374151] leading-relaxed">
                            It's simply part of how the economics of payroll infrastructure work.
                        </p>
                        <p className="text-[1.1rem] font-bold text-[#0f1724] mt-2">
                            But most employers{' '}
                            <span className="text-green-primary">are never told this.</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
