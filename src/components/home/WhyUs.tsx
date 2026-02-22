import React, { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';

const coreDifferentiators = [
    {
        label: 'Transparent £3 per employee payroll',
        sub: 'One flat rate. No tiers, no surprises, no per-item add-ons.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="8.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M8 11h3.5M11 8v3l2 1.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7.5 8.5h5a2 2 0 0 1 0 4h-3a2 2 0 0 0 0 4H14" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Segregated safeguarded client accounts',
        sub: 'Your funds are held separately — never deployed, lent, or invested.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2.5L3.5 6.5v5c0 4.5 3.5 8.5 7.5 9.5 4-1 7.5-5 7.5-9.5v-5L11 2.5Z" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Integrated payroll + accounting model',
        sub: 'One team manages your payroll, accounts, and admin together.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="5" width="8" height="6" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <rect x="12" y="5" width="8" height="6" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M10 8h2M11 8v5M7 16h8" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

const supportingReasons = [
    {
        label: 'No hidden payroll add-ons',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="5" width="12" height="8" rx="1.5" stroke="#10b981" strokeWidth="1.3" />
                <path d="M5 5V4a3 3 0 0 1 6 0v1" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Loyalty credits for early funding & volume',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2l1.5 3.5H13l-2.8 2 1 3.5L8 9l-3.2 2 1-3.5L3 5.5h3.5L8 2Z" stroke="#10b981" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Dedicated account manager',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5.5" r="2.5" stroke="#10b981" strokeWidth="1.3" />
                <path d="M2.5 13c0-2.2 2.5-3.5 5.5-3.5s5.5 1.3 5.5 3.5" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Built for long-term partnerships',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 14s-6-3.5-6-8a6 6 0 0 1 12 0c0 4.5-6 8-6 8Z" stroke="#10b981" strokeWidth="1.3" />
                <path d="M8 8V5M6 7l2-2 2 2" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const WhyUs: React.FC = () => {
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
            id="why-us"
            className="relative bg-[#0f1724] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Green glow — top left */}
                <div
                    className="absolute -top-20 -left-20 w-[600px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 20% 20%, rgba(16,185,129,0.08) 0%, transparent 65%)' }}
                />
                {/* Blue glow — bottom right */}
                <div
                    className="absolute bottom-0 right-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 80% 85%, rgba(59,130,246,0.06) 0%, transparent 65%)' }}
                />
                {/* Dot grid — faint, top-right quadrant */}
                <div
                    className="absolute inset-y-0 right-0 w-1/2 opacity-20 hidden lg:block"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.3) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-10 md:mb-12">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Why Switch
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-white leading-[1.1] tracking-tight">
                        Why Businesses{' '}
                        <span className="text-green-primary">Switch to Us</span>
                    </h2>
                </div>

                {/* ── CORE DIFFERENTIATORS — 3 featured cards ── */}
                <div className="fade-up grid grid-cols-1 md:grid-cols-3 gap-4 mb-4" style={{ animationDelay: '80ms' }}>
                    {coreDifferentiators.map((item, i) => (
                        <div
                            key={i}
                            className="group relative rounded-2xl border border-white/10 bg-white/05 backdrop-blur-sm p-5 hover:border-green-primary/40 hover:bg-white/08 transition-all duration-300 overflow-hidden"
                            style={{ background: 'rgba(255,255,255,0.04)' }}
                        >
                            {/* Subtle top accent on hover */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-primary/0 to-transparent group-hover:via-green-primary/50 transition-all duration-500" />

                            <div className="w-10 h-10 rounded-xl bg-green-primary/10 border border-green-primary/20 flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <p className="text-sm font-bold text-white mb-1.5 leading-snug">{item.label}</p>
                            <p className="text-xs text-text-muted leading-relaxed">{item.sub}</p>
                        </div>
                    ))}
                </div>

                {/* ── SUPPORTING REASONS — 4 compact tiles ── */}
                <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14 md:mb-16" style={{ animationDelay: '140ms' }}>
                    {supportingReasons.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 rounded-xl border border-white/08 px-4 py-3.5 hover:border-green-primary/30 transition-all duration-200"
                            style={{ background: 'rgba(255,255,255,0.03)' }}
                        >
                            <div className="w-6 h-6 rounded-lg bg-green-primary/10 border border-green-primary/20 flex items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <span className="text-sm font-medium text-white/80 leading-snug">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* ── MANIFESTO MOMENT ── */}
                <div className="fade-up" style={{ animationDelay: '180ms' }}>
                    {/* Decorative line */}
                    <div className="flex items-center gap-4 mb-8 md:mb-10">
                        <div className="flex-1 h-px bg-linear-to-r from-white/0 to-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="flex-1 h-px bg-linear-to-l from-white/0 to-white/10" />
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
                        <div className="max-w-[620px]">
                            <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
                                We are not a volume call centre.
                            </p>
                            <p className="text-[1.05rem] text-text-muted leading-relaxed">
                                We build stable relationships with businesses that value structure and fairness.
                                Long-term partnership isn't a selling point — it's how we operate.
                            </p>
                        </div>

                        {/* CTA on the right */}
                        <div className="shrink-0 flex flex-col items-start md:items-end gap-3">
                            <Button size="lg" href="mailto:help@xsairesources.com?subject=Discovery%20Call%20Request" className="shadow-2xl shadow-green-primary/20">
                                Book a Discovery Call
                            </Button>
                            <p className="text-xs text-[#6b7280]">No commitment · Discovery call only</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
