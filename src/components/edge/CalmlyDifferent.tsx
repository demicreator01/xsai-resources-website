import React, { useEffect, useRef } from 'react';

const designChoices = [
    {
        number: '01',
        label: 'We explain the mechanics.',
        sub: 'How payroll infrastructure works, where the funding window sits, how treasury benefit is generated — we tell clients, because informed clients make better partners.',
    },
    {
        number: '02',
        label: 'We price simply.',
        sub: '£3 per employee. No layered tiers, no hidden add-ons, no complexity that benefits us at your expense.',
    },
    {
        number: '03',
        label: 'We share operational efficiency.',
        sub: 'Where operational surplus is generated, we allocate a portion back to long-term qualifying partners rather than absorbing it entirely.',
    },
    {
        number: '04',
        label: 'We integrate by design.',
        sub: 'Payroll, accounting, and admin under one structure — not three services loosely connected, but one infrastructure built to align.',
    },
    {
        number: '05',
        label: 'We protect unconditionally.',
        sub: 'Client funds are safeguarded, segregated, and used solely for payroll. This is not a policy we can choose to change. It is a structural control.',
    },
];

export const CalmlyDifferent: React.FC = () => {
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
            className="relative bg-[#0f1724] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.09) 0%, transparent 60%)' }}
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

                {/* Section header */}
                <div className="fade-up mb-12 md:mb-14">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Edge 06
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.4rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                        Calmly{' '}
                        <span className="text-green-primary">Different</span>
                    </h2>
                    <p className="text-text-muted text-[1.05rem] leading-relaxed max-w-[520px]">
                        Five design choices that shape how we operate. Not policies.
                        Not marketing positions. Decisions baked into the infrastructure.
                    </p>
                </div>

                {/* Five design choices */}
                <div className="flex flex-col gap-0">
                    {designChoices.map((choice, i) => (
                        <div
                            key={i}
                            className="fade-up"
                            style={{ animationDelay: `${60 + i * 80}ms` }}
                        >
                            <div className={`flex items-start gap-6 py-7 ${i < designChoices.length - 1
                                ? 'border-b border-white/[0.07]'
                                : ''
                                }`}>
                                {/* Large number */}
                                <span className="text-[1.8rem] md:text-[2rem] font-bold text-green-primary/30 leading-none shrink-0 w-10 text-right">
                                    {choice.number}
                                </span>

                                {/* Content */}
                                <div className="flex-1">
                                    <p className="text-base md:text-lg font-bold text-white mb-2">
                                        {choice.label}
                                    </p>
                                    <p className="text-sm text-[#6b7280] leading-relaxed">
                                        {choice.sub}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing statement */}
                <div className="fade-up mt-12" style={{ animationDelay: '480ms' }}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                    <div className="text-center">
                        <p className="text-[1.2rem] md:text-[1.4rem] font-bold text-white mb-1">
                            Not loud about it.
                        </p>
                        <p className="text-[1.2rem] md:text-[1.4rem] font-bold text-green-primary">
                            Just consistent.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
