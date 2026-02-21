import React, { useState, useEffect, useRef } from 'react';

interface ServiceItem {
    text: string;
}

interface Service {
    id: string;
    label: string;
    description: string;
    items: ServiceItem[];
    closingStatement: string;
    closingSubStatement?: string;
    mobileLabel?: string; // shorter label for 2-col mobile grid
    icon: React.ReactNode;
}

interface ServiceTabsProps {
    eyebrow?: string;
    headline: React.ReactNode;
    subheading: string;
    services: Service[];
    background?: 'white' | 'light' | 'faint';
}

export const ServiceTabs: React.FC<ServiceTabsProps> = ({
    eyebrow = 'Our Services',
    headline,
    subheading,
    services,
    background = 'light',
}) => {
    const [activeTab, setActiveTab] = useState(services[0]?.id ?? '');
    const sectionRef = useRef<HTMLDivElement>(null);

    const activeService = services.find(s => s.id === activeTab) ?? services[0];

    const bgClass =
        background === 'white' ? 'bg-white'
            : background === 'faint' ? 'bg-[#f8fffe]'
                : 'bg-[#f0fdf4]';

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative ${bgClass} py-20 md:py-28 px-5 md:px-8 overflow-hidden`}
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
                <div
                    className="absolute top-0 right-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 85% 10%, rgba(16,185,129,0.07) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(59,130,246,0.04) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-8 md:mb-10">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        {eyebrow}
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        {headline}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[560px] leading-relaxed">
                        {subheading}
                    </p>
                </div>

                {/* ── TAB ROW ── */}

                {/* Mobile: 2-col grid (< sm) */}
                <div className="fade-up grid grid-cols-2 gap-2 sm:hidden mb-6">
                    {services.map(service => (
                        <button
                            key={service.id}
                            onClick={() => setActiveTab(service.id)}
                            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 text-center leading-tight ${activeTab === service.id
                                ? 'bg-green-primary text-white shadow-sm'
                                : 'bg-white border border-border text-[#374151] hover:border-green-primary/40'
                                }`}
                        >
                            {service.mobileLabel ?? service.label}
                        </button>
                    ))}
                </div>

                {/* sm+: horizontal scroll row */}
                <div className="fade-up hidden sm:flex gap-2 overflow-x-auto pb-1 scrollbar-hide mb-6">
                    {services.map(service => (
                        <button
                            key={service.id}
                            onClick={() => setActiveTab(service.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${activeTab === service.id
                                ? 'bg-green-primary text-white shadow-sm'
                                : 'bg-white border border-border text-[#374151] hover:border-green-primary/40'
                                }`}
                        >
                            <span className={activeTab === service.id ? 'text-white' : 'text-green-primary'}>
                                {service.icon}
                            </span>
                            {service.label}
                        </button>
                    ))}
                </div>

                {/* ── ACTIVE TAB PANEL ── */}
                <div className="fade-up rounded-2xl border border-border bg-white overflow-hidden shadow-sm">
                    <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />
                    <div className="p-6 md:p-7">

                        {/* Service header */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-green-primary">
                                {activeService.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0f1724]">{activeService.label}</h3>
                        </div>

                        {/* Service description */}
                        <p className="text-sm text-[#6b7280] leading-relaxed mb-5 max-w-[560px]">
                            {activeService.description}
                        </p>

                        {/* Items grid — 2 col on sm+, 1 col on mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {activeService.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-bg-page border border-border rounded-xl px-4 py-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-green-primary flex items-center justify-center shrink-0">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-[#374151]">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dark closing bar */}
                    <div className="bg-[#0f1724] px-6 py-4 md:px-7 flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-primary/15 border border-green-primary/30 flex items-center justify-center shrink-0">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M7 1.5L2 4.5v3.5c0 3 2.2 5.5 5 6.5 2.8-1 5-3.5 5-6.5V4.5L7 1.5Z"
                                    stroke="#10b981" strokeWidth="1.3" strokeLinejoin="round" />
                                <path d="M4.5 7l2 2 3.5-3.5" stroke="#10b981" strokeWidth="1.3"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">{activeService.closingStatement}</p>
                            {activeService.closingSubStatement && (
                                <p className="text-xs text-[#6b7280] mt-0.5">{activeService.closingSubStatement}</p>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
