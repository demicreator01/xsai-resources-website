import React, { useEffect, useRef } from 'react';

interface ClientType {
    label: string;
    sub: string;
    icon?: React.ReactNode;
}

interface QualifierProps {
    negative: string;
    positive: string;
}

interface WhoThisIsForProps {
    context?: 'accounting' | 'payroll' | 'general' | 'admin';
    headline?: string;
    intro?: string;
    clientTypes: ClientType[];
    qualifier?: QualifierProps;
}

const defaultIcons = [
    // Growing business
    (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 14l4-6 3 3 4-5 4 4" stroke="#10b981" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 6v4h-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    // Founder
    (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="7" r="3.5" stroke="#10b981" strokeWidth="1.5" />
            <path d="M4 17c0-3 2.7-5 6-5s6 2 6 5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 3l1.5 1.5L14 6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    // Structured reporting
    (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="3" width="16" height="14" rx="2" stroke="#10b981" strokeWidth="1.5" />
            <path d="M6 8h8M6 11h5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    // One partner
    (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L3 6v5c0 4.5 3 7.5 7 9.5 4-2 7-5 7-9.5V6L10 2Z"
                stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M7 10l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
];

export const WhoThisIsFor: React.FC<WhoThisIsForProps> = ({
    context = 'general',
    headline = 'Who This Is For',
    intro,
    clientTypes,
    qualifier,
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const eyebrow =
        context === 'accounting' ? 'Accounting Fit'
            : context === 'payroll' ? 'The Right Fit'
                : context === 'admin' ? 'Operational Fit'
                    : 'Who We Serve';

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#f8fffe] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
                <div
                    className="absolute top-0 right-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 85% 10%, rgba(16,185,129,0.08) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-[40%_56%] gap-10 lg:gap-14 items-start">

                    {/* LEFT: Heading + intro + qualifier */}
                    <div className="fade-up lg:sticky lg:top-8">
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                            {eyebrow}
                        </span>
                        <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-5">
                            {headline.includes('For') ? (
                                <>
                                    Who This Is{' '}
                                    <span className="text-green-primary">For</span>
                                </>
                            ) : (
                                <span>{headline}</span>
                            )}
                        </h2>

                        {intro && (
                            <p className="text-[1.05rem] text-[#374151] leading-relaxed mb-8">
                                {intro}
                            </p>
                        )}

                        {qualifier && (
                            <div className="rounded-2xl border border-border bg-white p-5">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-text-muted mb-3">
                                    A note on fit
                                </p>
                                <p className="text-sm text-[#374151] leading-relaxed mb-2">
                                    {qualifier.negative}
                                </p>
                                <p className="text-sm text-green-primary font-semibold leading-relaxed">
                                    {qualifier.positive}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Client type cards */}
                    <div className="fade-up flex flex-col gap-3" style={{ animationDelay: '100ms' }}>
                        {clientTypes.map((type, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 bg-white border border-border rounded-2xl px-5 py-4 hover:border-green-primary/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-green-primary group-hover:border-green-dark transition-colors duration-250">
                                    <div className="group-hover:[&_path]:stroke-white group-hover:[&_circle]:stroke-white group-hover:[&_rect]:stroke-white transition-colors duration-250">
                                        {type.icon ?? defaultIcons[i % defaultIcons.length]}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0f1724] mb-1">{type.label}</p>
                                    <p className="text-xs text-[#6b7280] leading-relaxed">{type.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
