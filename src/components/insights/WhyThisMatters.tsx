import React, { useEffect, useRef } from 'react';

export const WhyThisMatters: React.FC = () => {
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
                    className="absolute top-0 right-0 w-[400px] h-[300px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 5%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[680px] mx-auto">

                {/* ── ARTICLE SECTION HEADER ── */}
                <div className="fade-up mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                            06
                        </span>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <h2 className="text-[1.7rem] md:text-[2.2rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight">
                        Why This Matters
                    </h2>
                </div>

                {/* ── BODY COPY ── */}
                <div className="fade-up space-y-5 text-[1.05rem] text-[#374151] leading-relaxed mb-10"
                    style={{ animationDelay: '60ms' }}>
                    <p>
                        Most business owners focus on growth, revenue, and team building.
                        Very few are shown how back-office infrastructure quietly operates
                        in the background.
                    </p>
                    <p>
                        That's not a criticism — it's simply how most provider relationships
                        are structured. The bureau handles the mechanics. The client focuses
                        on the business. The details stay hidden.
                    </p>
                </div>

                {/* ── PULL QUOTE ── */}
                <div className="fade-up mb-10" style={{ animationDelay: '100ms' }}>
                    <div className="border-l-[3px] border-green-primary pl-6 py-2">
                        <p className="text-[1.2rem] md:text-[1.4rem] font-bold text-[#0f1724] leading-snug mb-2">
                            When you understand the mechanics,
                        </p>
                        <p className="text-[1.2rem] md:text-[1.4rem] font-bold text-green-primary leading-snug">
                            you can choose partners more intentionally.
                        </p>
                    </div>
                </div>

                {/* ── CLOSING COPY ── */}
                <div className="fade-up space-y-5 text-[1.05rem] text-[#374151] leading-relaxed"
                    style={{ animationDelay: '140ms' }}>
                    <p>
                        You can ask better questions. You can evaluate proposals more clearly.
                        You can recognise the difference between a provider that explains
                        its model and one that obscures it.
                    </p>
                    <p className="font-bold text-[#0f1724]">
                        We built our model for businesses that appreciate that clarity.
                    </p>
                </div>

            </div>
        </section>
    );
};
