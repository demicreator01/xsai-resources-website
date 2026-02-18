import React from 'react';
import { Section } from '../ui/Section';

export const Personas: React.FC = () => {
    const list = [
        { title: "Growing SMEs", icon: "plant" },
        { title: "Multi-entity businesses", icon: "buildings" },
        { title: "Founder-led companies", icon: "person" },
        { title: "Accountancy referrals", icon: "handshake" },
        { title: "Structure-first employers", icon: "checklist" }
    ];

    return (
        <Section background="light">
            <div className="flex flex-col gap-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
                    Who We Work Best With
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {list.map((item, i) => (
                        <div key={i} className={`flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center gap-4 hover:-translate-y-1 transition-transform duration-200 ${i === list.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}>
                            <div className="w-12 h-12 rounded-full bg-green-light flex items-center justify-center text-green-primary">
                                {/* Generic Icons based on name logic, replacing with simple shapes for now or re-using SVGs */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {item.icon === 'plant' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />} {/* Reuse Shield as placeholder, or generic circle */}
                                    <circle cx="12" cy="12" r="8" />
                                </svg>
                            </div>
                            <span className="font-bold text-text-primary leading-tight">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
