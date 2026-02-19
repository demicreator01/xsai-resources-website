import React from 'react';
import { Section } from '../ui/Section';

// Prompt says "Use same layout and diagram as Section 4 on home, but extended with additional detail"
// To keep it clean, I'll rebuild the layout here with the added Tiers.

const FlowDiagram: React.FC = () => (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[400px] mx-auto">
        {/* Box 1 */}
        <rect x="20" y="20" width="100" height="60" rx="8" fill="#d1fae5" />
        <text x="70" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#111827">Payroll Funds</text>

        {/* Arrow 1 */}
        <path d="M120 50H150" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Box 2 */}
        <rect x="150" y="20" width="140" height="60" rx="8" fill="#d1fae5" />
        <text x="220" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#111827">Safeguarded Account</text>

        {/* Arrow 2 */}
        <path d="M290 50H320" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Box 3 */}
        <rect x="320" y="20" width="100" height="60" rx="8" fill="#d1fae5" />
        <text x="370" y="55" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#111827">Treasury Benefit</text>

        {/* Arrow Down-Left */}
        <path d="M370 80V140H220" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M220 140V160" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Box 4 (Result) */}
        <rect x="150" y="160" width="140" height="60" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
        <text x="220" y="195" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="bold" fill="#059669">Loyalty Credits</text>

        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
            </marker>
        </defs>
    </svg>
);

export const LoyaltyTiers: React.FC = () => {
    return (
        <Section background="light">
            <div className="flex flex-col gap-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col gap-6">

                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                            Loyalty Credits
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>Most providers retain 100% of the interest generated on client payroll funds. We don't.</p>
                            <p>We believe operational volume should benefit the businesses creating it. Our programme converts treasury benefit back into loyalty credits for our partners.</p>
                            <p className="font-bold text-green-primary text-xl">Operational efficiency shared fairly.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                        <FlowDiagram />
                        <div className="mt-8 text-center text-sm text-gray-400 font-medium">
                            Funds are safeguarded in UK banks. Zero deployment risk.
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Standard",
                            funding: "3 days prior",
                            volume: "Any",
                            highlight: "Base Allocation",
                            style: "white"
                        },
                        {
                            name: "Preferred",
                            funding: "5 days prior",
                            volume: "Any",
                            highlight: "Enhanced Allocation",
                            style: "green"
                        },
                        {
                            name: "Partners",
                            funding: "5 days prior",
                            volume: "500+ employees",
                            highlight: "Priority Allocation",
                            style: "dark"
                        }
                    ].map((tier, i) => (
                        <div key={i} className={`p-8 rounded-2xl border shadow-md flex flex-col gap-6 transition-all duration-300 hover:shadow-xl ${tier.style === 'green' ? 'bg-green-primary text-white border-green-primary scale-105 z-10' :
                            tier.style === 'dark' ? 'bg-text-primary text-white border-text-primary' :
                                'bg-white text-text-primary border-gray-100'
                            }`}>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                                <p className={tier.style === 'white' ? 'text-gray-500 font-medium' : 'text-white font-medium'}>Programme Tier</p>
                            </div>

                            <div className="space-y-4">
                                <div className={`flex justify-between items-center py-3 border-b ${tier.style === 'white' ? 'border-gray-100' : 'border-white/30'}`}>
                                    <span className={`text-sm ${tier.style === 'white' ? 'text-gray-600' : 'text-white'}`}>Funding</span>
                                    <span className="font-bold">{tier.funding}</span>
                                </div>
                                <div className={`flex justify-between items-center py-3 border-b ${tier.style === 'white' ? 'border-gray-100' : 'border-white/30'}`}>
                                    <span className={`text-sm ${tier.style === 'white' ? 'text-gray-600' : 'text-white'}`}>Volume</span>
                                    <span className="font-bold">{tier.volume}</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm ${tier.style === 'white' ? 'bg-green-primary text-white' : 'bg-white text-text-primary'
                                    }`}>
                                    {tier.highlight}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
