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

    console.log(list); // Keep temporarily or remove once logic verified


    return (
        <Section background="light">
            <div className="flex flex-col gap-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                        Who We Work Best With
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our infrastructure is built for partners who value organisation, clarity, and scalability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Growing SMEs",
                        "Multi-entity businesses",
                        "Founder-led companies",
                        "Accountancy referrals",
                        "Structure-first employers"
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-xl bg-green-primary/10 flex items-center justify-center text-green-primary group-hover:bg-green-primary group-hover:text-white transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-gray-900">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
