import React from 'react';
import { Section } from '../ui/Section';

export const Security: React.FC = () => {
    return (
        <Section background="light" id="security">
            <div className="flex flex-col gap-12">
                <div className="text-center">
                    <span className="text-xs font-bold text-[#10b981] tracking-widest uppercase mb-3 block">SECURITY</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                        Security & Safeguarding
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-[#10b981] hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-[#10b981]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-[#111827] mb-3 text-lg">Segregated Accounts</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Client payroll funds held in dedicated UK bank accounts, never commingled.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-[#10b981] hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-[#10b981]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-[#111827] mb-3 text-lg">Sole Purpose</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Funds used solely for payroll processing. Zero third-party exposure.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-[#10b981] hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-[#10b981]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-[#111827] mb-3 text-lg">Never Deployed</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Funds are never invested, lent, or deployed for any secondary purpose.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-[#10b981] hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-[#10b981]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-[#111827] mb-3 text-lg">Daily Reconciliation</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Accounts reconciled and monitored daily. Operational resilience first.</p>
                    </div>
                </div>

                <div className="text-center pt-4">
                    <p className="font-bold text-[#10b981] text-xl">"Payroll is trust infrastructure — and we treat it that way."</p>
                </div>
            </div>
        </Section>
    );
};
