import React, { useEffect, useRef } from 'react';

export const TheBiggerPicture: React.FC = () => {
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
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[300px]"
                    style={{ background: 'radial-gradient(ellipse at 5% 95%, rgba(59,130,246,0.04) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[680px] mx-auto">

                {/* ── ARTICLE SECTION HEADER ── */}
                <div className="fade-up mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                            04
                        </span>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <h2 className="text-[1.7rem] md:text-[2.2rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight">
                        The Bigger Picture
                    </h2>
                </div>

                {/* ── OPENING BODY COPY ── */}
                <div className="fade-up mb-8 text-[1.05rem] text-[#374151] leading-relaxed"
                    style={{ animationDelay: '60ms' }}>
                    <p>
                        Payroll providers operate on margins. The funding window is one
                        component — but there are others. Some providers structure their
                        commercial model in ways that benefit the bureau more than the client.
                    </p>
                </div>

                {/* ── CONTRAST COMPARISON ── */}
                <div className="fade-up mb-10" style={{ animationDelay: '100ms' }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Industry tactics */}
                        <div className="rounded-2xl border border-border overflow-hidden bg-bg-page">
                            <div className="px-5 py-3 border-b border-border bg-white">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-text-muted">
                                    Some providers increase margin through
                                </p>
                            </div>
                            <div className="px-5 py-4 flex flex-col gap-3">
                                {[
                                    'Complex pricing structures',
                                    'Add-on fees per service',
                                    'Opaque charging models',
                                    'Retained treasury benefit',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center shrink-0">
                                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                                <path d="M1.5 3.5h4" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-[#374151]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* XSAI approach */}
                        <div className="rounded-2xl border border-green-primary/30 overflow-hidden"
                            style={{ background: 'rgba(16,185,129,0.03)' }}>
                            <div className="px-5 py-3 border-b border-green-primary/20">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-green-primary">
                                    We prefer
                                </p>
                            </div>
                            <div className="px-5 py-4 flex flex-col gap-3">
                                {[
                                    'Clear fixed pricing',
                                    'Flat £3 per employee',
                                    'Open explanation of operational timing',
                                    'Shared efficiency where possible',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-green-primary flex items-center justify-center shrink-0">
                                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                                <path d="M1.5 3.5l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-medium text-[#374151]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── CLOSING PHILOSOPHY ── */}
                <div className="fade-up" style={{ animationDelay: '160ms' }}>
                    <div className="space-y-5 text-[1.05rem] text-[#374151] leading-relaxed">
                        <p>
                            The choice between these two approaches is not about capability —
                            most providers could offer clearer pricing if they chose to.
                        </p>
                        <div className="border-l-[3px] border-green-primary pl-5 space-y-2">
                            <p className="text-[1.05rem] font-bold text-[#0f1724]">
                                Not because we have to.
                            </p>
                            <p className="text-[1.05rem] text-[#374151]">
                                But because we believe informed clients build{' '}
                                <span className="font-bold text-green-primary">stronger partnerships.</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
