import React from 'react';
import { Section } from '../ui/Section';

export const ServicesGrid: React.FC = () => {
    return (
        <Section id="services" background="white">
            <div className="flex flex-col gap-16">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs font-bold text-green-primary tracking-widest uppercase mb-3 block">FULL SERVICE</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Integrated Accounting & Admin
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Accounting Card */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                        <div className="w-14 h-14 rounded-full bg-green-light flex items-center justify-center text-green-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="2" width="16" height="20" rx="2" />
                                <line x1="8" y1="6" x2="16" y2="6" />
                                <line x1="8" y1="10" x2="16" y2="10" />
                                <path d="M16 14h-8" />
                                <path d="M16 18h-8" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary mb-6">Accounting Support</h3>
                        <ul className="space-y-3">
                            {[
                                "Bookkeeping",
                                "VAT returns",
                                "Annual accounts",
                                "Corporation tax",
                                "Self-assessment",
                                "Companies House filing"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-primary shrink-0">
                                        <polyline points="20 6 9 17 4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Admin Card */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary mb-6">Administrative Support</h3>
                        <ul className="space-y-3">
                            {[
                                "Director support services",
                                "Registered office solutions",
                                "Business documentation",
                                "Back-office coordination"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-500 shrink-0">
                                        <polyline points="20 6 9 17 4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <p className="font-medium text-gray-500 italic text-xl">"Everything aligned. Everything under one accountable team."</p>
                </div>
            </div>
        </Section>
    );
};
