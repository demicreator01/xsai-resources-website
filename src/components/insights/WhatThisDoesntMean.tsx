import React, { useEffect, useRef } from 'react';

export const WhatThisDoesntMean: React.FC = () => {
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
                            05
                        </span>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <h2 className="text-[1.7rem] md:text-[2.2rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight">
                        What This Doesn't Mean
                    </h2>
                </div>

                {/* ── OPENING ── */}
                <div className="fade-up mb-8 text-[1.05rem] text-[#374151] leading-relaxed"
                    style={{ animationDelay: '60ms' }}>
                    <p>
                        Understanding the operational mechanics behind payroll does not
                        change the fundamental safeguarding position of client funds.
                        These are two separate things — and it's important they're understood separately.
                    </p>
                </div>

                {/* ── DOES NOT MEAN panel ── */}
                <div className="fade-up mb-5" style={{ animationDelay: '100ms' }}>
                    <div className="rounded-2xl border border-border overflow-hidden bg-white">
                        <div className="px-6 py-4 border-b border-[#f3f4f6] flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center shrink-0">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <path d="M2 4h4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-text-muted">
                                It does not mean
                            </p>
                        </div>
                        <div className="divide-y divide-[#f9fafb]">
                            {[
                                'Payroll funds are invested.',
                                'Payroll funds are lent.',
                                'Clients take any financial risk.',
                                'Returns are promised or implied.',
                            ].map((statement, i) => (
                                <div key={i} className="flex items-center gap-4 px-6 py-3.5">
                                    <div className="w-4 h-4 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center shrink-0">
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                            <path d="M1.5 3.5h4" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-semibold text-[#374151]">{statement}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── CLIENT FUNDS ARE panel ── */}
                <div className="fade-up mb-10" style={{ animationDelay: '140ms' }}>
                    <div className="rounded-2xl border border-green-primary/25 overflow-hidden"
                        style={{ background: 'rgba(16,185,129,0.03)' }}>
                        <div className="px-6 py-4 border-b border-green-primary/15 flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-primary flex items-center justify-center shrink-0">
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <path d="M2 4.5l2 2 3.5-3.5" stroke="white" strokeWidth="1.3"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-green-primary">
                                Client payroll funds are
                            </p>
                        </div>
                        <div className="divide-y divide-[#f0fdf4]">
                            {[
                                'Held in segregated safeguarded UK bank accounts.',
                                'Used solely for payroll processing.',
                                'Never deployed to third parties.',
                            ].map((statement, i) => (
                                <div key={i} className="flex items-center gap-4 px-6 py-3.5">
                                    <div className="w-4 h-4 rounded-full bg-green-primary flex items-center justify-center shrink-0">
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                            <path d="M1.5 3.5l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-bold text-[#0f1724]">{statement}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── CLOSING STATEMENT ── */}
                <div className="fade-up" style={{ animationDelay: '180ms' }}>
                    <div className="border-l-[3px] border-green-primary pl-5">
                        <p className="text-[1.1rem] font-bold text-[#0f1724]">
                            Stability always comes first.
                        </p>
                        <p className="text-[1.05rem] text-[#374151] mt-1 leading-relaxed">
                            The transparency is about how we explain the model —
                            not about changing what we do with client funds.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
