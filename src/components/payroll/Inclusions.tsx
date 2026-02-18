import React from 'react';
import { Section } from '../ui/Section';

export const Inclusions: React.FC = () => {
    const items = [
        "Full payroll processing",
        "RTI submissions",
        "Pension auto-enrolment management",
        "Digital payslips",
        "Starter & leaver handling",
        "Statutory pay calculations",
        "Year-end P60 processing",
        "Dedicated account manager",
        "BACS bureau handling"
    ];

    return (
        <Section background="green-light">
            <div className="flex flex-col gap-12">
                {/* Pricing Header */}
                <div className="text-center">
                    <div className="inline-block bg-white rounded-2xl border-2 border-green-primary px-10 py-8 shadow-sm mb-8">
                        <div className="flex items-baseline justify-center gap-1 mb-2">
                            <span className="text-5xl md:text-6xl font-bold text-green-primary">£3</span>
                        </div>
                        <div className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                            per employee / per month
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">What's Included</h2>
                    <p className="text-gray-600">Transparent pricing. No hidden per-item add-ons.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 max-w-4xl mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 bg-white/50 p-3 rounded-lg border border-transparent hover:border-green-primary/30 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-primary shrink-0">
                                <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" />
                                <path d="M16 9L10.5 14.5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
