import React, { useEffect, useRef } from 'react';

const pillars = [
    {
        label: 'Scale',
        sub: 'As your headcount grows, your credits grow with it.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 13l4-5 3 3 4-6 3 3.5" stroke="#10b981" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Early Organisation',
        sub: 'Fund payroll early and unlock enhanced loyalty allocations.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M6 1v4M12 1v4M2 8h14" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 12l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Partnership',
        sub: 'Long-term clients receive priority tier access and strategic support.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 10.5c0-1.5 1.5-2.5 3-2.5s3 1 3 1 1.5-1 3-1 3 1 3 2.5v2H3v-2Z"
                    stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="6" cy="6" r="2" stroke="#10b981" strokeWidth="1.5" />
                <circle cx="12" cy="6" r="2" stroke="#10b981" strokeWidth="1.5" />
            </svg>
        ),
    },
];

export const LongTerm: React.FC = () => {
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
            className="relative bg-[#f8fffe] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent"
                />
                <div
                    className="absolute top-0 right-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(16,185,129,0.08) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 10%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
                {/* Dot grid — left side, very faint */}
                <div
                    className="absolute inset-y-0 left-0 w-1/3 opacity-30 hidden lg:block"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.15) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── TOP: Label + Headline + Copy + Pillars ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20">

                    {/* Left: text */}
                    <div className="fade-up">
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-3 block">
                            Our Philosophy
                        </span>
                        <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-6">
                            Built for Businesses That{' '}
                            <span className="text-[#10b981]">Think Long Term</span>
                        </h2>
                        <div className="space-y-4 text-[1.05rem] text-[#374151] leading-relaxed max-w-[500px]">
                            <p>
                                We believe operational efficiency should benefit the businesses
                                creating real value — not just the providers facilitating it.
                            </p>
                            <p>
                                Our model rewards scale, early organisation, and long-term partnership.
                                Not as a marketing line — as the actual structure of how we operate.
                            </p>
                        </div>
                    </div>

                    {/* Right: three pillars */}
                    <div className="fade-up flex flex-col gap-4" style={{ animationDelay: '100ms' }}>
                        <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#9ca3af]">
                            Our model rewards
                        </p>
                        {pillars.map((p, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 bg-white border border-[#e5e7eb] rounded-2xl p-5 hover:border-[#10b981]/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
                            >
                                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-[#10b981] group-hover:border-[#059669] transition-colors duration-250">
                                    <div className="group-hover:[&_path]:stroke-white group-hover:[&_rect]:stroke-white group-hover:[&_circle]:stroke-white transition-colors duration-250">
                                        {p.icon}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0f1724] mb-1">{p.label}</p>
                                    <p className="text-xs text-[#6b7280] leading-relaxed">{p.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── PHILOSOPHY CENTREPIECE ── */}
                <div className="fade-up" style={{ animationDelay: '160ms' }}>

                    {/* Decorative top rule */}
                    <div className="flex items-center gap-4 mb-10 md:mb-12">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#e5e7eb]" />
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#10b981]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                            <div className="w-1 h-1 rounded-full bg-[#10b981]" />
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#e5e7eb]" />
                    </div>

                    {/* The statement */}
                    <div className="text-center max-w-[700px] mx-auto">
                        <p className="text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-2">
                            It's not about hype.
                        </p>
                        <p className="text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold text-[#10b981] leading-[1.1] tracking-tight">
                            It's about structure.
                        </p>
                        <p className="text-[#9ca3af] text-base mt-6 max-w-[420px] mx-auto leading-relaxed">
                            Structure that rewards the right behaviours, protects the right interests,
                            and builds relationships that last.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
