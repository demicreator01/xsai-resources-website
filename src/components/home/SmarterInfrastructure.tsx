import React from 'react';
import { Section } from '../ui/Section';

const FeaturePill: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm border-l-[3px] border-l-[#10b981] hover:-translate-y-1 transition-transform duration-300">
        <div className="text-[#10b981] shrink-0">
            {icon}
        </div>
        <span className="font-semibold text-gray-900">{text}</span>
    </div>
);

export const SmarterInfrastructure: React.FC = () => {
    return (
        <Section>
            <div className="flex flex-col gap-12">
                <div className="max-w-3xl">
                    <span className="text-xs font-bold text-[#10b981] tracking-widest uppercase mb-3 block">What We Do</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                        A Smarter Infrastructure for<br />Growing Businesses
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                        Running a business is hard enough without fragmented back-office services. We provide fully managed payroll, accounting, and administrative support under one streamlined infrastructure — built for reliability, clarity, and long-term partnership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
                    <FeaturePill
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        text="No inflated fees."
                    />
                    <FeaturePill
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 11V7A5 5 0 0 1 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        text="No hidden add-ons."
                    />
                    <FeaturePill
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        text="No unnecessary complexity."
                    />
                </div>

                <div className="text-center pt-8">
                    <p className="font-medium text-gray-500 italic text-lg">"Just structured, dependable financial operations."</p>
                </div>
            </div>
        </Section>
    );
};
