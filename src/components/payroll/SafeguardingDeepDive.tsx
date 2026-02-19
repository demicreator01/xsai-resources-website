import React from 'react';
import { Section } from '../ui/Section';

export const SafeguardingDeepDive: React.FC = () => {
    return (
        <Section className="relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            </div>

            <Section background="white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>

                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                            Safeguarding
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Client payroll funds are protected by multiple layers of security and strict operational controls.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Segregated Safeguarded UK bank accounts",
                                "Funds used solely for payroll processing",
                                "Zero Deployment: Never invested or lent",
                                "Daily Reconciliation and monitoring"
                            ].map((point, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-green-primary" />
                                    <span className="text-gray-800 font-semibold">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-text-primary p-8 md:p-12 rounded-3xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
                            "Stability is the first requirement of any payroll system. Our infrastructure is built to protect the assets that matter most to your employees."
                        </p>
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="h-px w-8 bg-green-primary" />
                            <span className="text-green-primary font-bold tracking-widest uppercase text-sm">Resilience First</span>
                        </div>
                    </div>
                </div>
            </Section>
        </Section>
    );
};
