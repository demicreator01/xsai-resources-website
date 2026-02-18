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

            <div className="relative z-10 flex flex-col gap-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Client Fund Safeguarding
                    </h2>
                    <p className="text-lg text-gray-600">Trust is critical in payroll.</p>
                </div>

                {/* Reusing cards structure but keeping content specific if needed, or we could reuse Security component if identical. 
                Prompt asks for "4 safeguarding points — same card style as Section 7 on home".
                For simplicity and to allow specific text updates independently, I'll inline them here.
            */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Segregated Accounts", icon: "shield", desc: "Client payroll funds held in dedicated UK bank accounts, never commingled." },
                        { title: "Sole Purpose", icon: "lock", desc: "Funds used solely for payroll processing. Zero third-party exposure." },
                        { title: "Never Deployed", icon: "block", desc: "Funds are never invested, lent, or deployed for any secondary purpose." },
                        { title: "Daily Reconciliation", icon: "chart", desc: "Accounts reconciled and monitored daily. Operational resilience first." }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm border-t-4 border-t-green-primary hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="font-bold text-text-primary mb-3 text-lg">{card.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-4">
                    <div className="bg-gray-50 border border-gray-200 px-8 py-4 rounded-full text-center">
                        <p className="text-sm text-gray-500 italic">
                            Payroll funds are not exposed to third-party lending or investment activity.<br />
                            Operational stability always comes first.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
