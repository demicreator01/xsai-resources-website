import React from 'react';
import { Section } from '../ui/Section';

export const Inclusions: React.FC = () => {
    const items = ["Test"];
    console.log(items);


    return (
        <Section background="white">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                    <div className="max-w-2xl">

                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                            Payroll Inclusions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Transparent, predictable billing. No per-item add-ons or hidden complexities.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl border-2 border-green-primary p-6 md:p-8 shadow-sm">
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-4xl md:text-5xl font-bold text-text-primary">£3</span>
                            <span className="text-gray-500 font-medium">/employee</span>
                        </div>
                        <div className="text-xs font-bold text-green-primary uppercase tracking-widest">
                            Flat Monthly Fee
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Full payroll processing",
                        "RTI submissions",
                        "Pension auto-enrolment management",
                        "Digital payslips",
                        "Starter & leaver handling",
                        "Statutory pay calculations",
                        "Year-end P60 processing",
                        "Dedicated account manager",
                        "BACS bureau handling"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-green-primary/30 hover:bg-white transition-all group">
                            <div className="w-8 h-8 rounded-full bg-green-primary/10 flex items-center justify-center text-green-primary group-hover:bg-green-primary group-hover:text-white transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <span className="text-gray-800 font-semibold">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
