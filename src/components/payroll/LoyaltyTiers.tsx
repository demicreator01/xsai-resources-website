import React from 'react';
import { Section } from '../ui/Section';
import { LoyaltyProgram } from '../home/LoyaltyProgram'; // Reuse the diagram/intro logic if possible, or just the diagram?
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
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
                <div className="flex flex-col gap-6">
                    <span className="text-xs font-bold text-green-primary tracking-widest uppercase mb-1 block">LOYALTY CREDITS</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                        The Loyalty Credit Programme
                    </h2>
                    <div className="space-y-4 text-lg text-gray-600">
                        <p>Payroll funds are typically received several days before employees are paid. This is standard industry practice.</p>
                        <p>Within that operational window, safeguarded client accounts may generate treasury benefit at bank level.</p>
                        <p>Most providers retain this entirely.</p>
                        <p className="font-bold text-green-primary text-xl">We take a different approach.</p>
                    </div>
                    <div className="bg-green-light/50 border-l-4 border-green-primary p-4 rounded-r-lg mt-4">
                        <div className="flex gap-3">
                            <span className="text-xl">ℹ️</span>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                No investment exposure. No lending activity. No risk deployment.<br />
                                Just operational efficiency — shared fairly.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <FlowDiagram />
                </div>
            </div>

            {/* Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Standard */}
                <div className="bg-white p-8 rounded-xl border-2 border-green-primary/30 flex flex-col gap-4">
                    <div className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">Standard Partner</div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Funding</span>
                            <span className="font-medium">3 days prior</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Volume</span>
                            <span className="font-medium">Any</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Commitment</span>
                            <span className="font-medium text-gray-400">—</span>
                        </div>
                    </div>
                    <div className="mt-auto pt-6 text-center">
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">BASE ALLOCATION</span>
                    </div>
                </div>

                {/* Early Funding */}
                <div className="bg-green-light/30 p-8 rounded-xl border-2 border-green-primary flex flex-col gap-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                    <div className="text-lg font-bold text-gray-900 border-b border-green-primary/10 pb-4">Early Funding Partner</div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Funding</span>
                            <span className="font-bold text-green-primary">5 days prior</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Volume</span>
                            <span className="font-medium">Any</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Commitment</span>
                            <span className="font-medium text-gray-400">—</span>
                        </div>
                    </div>
                    <div className="mt-auto pt-6 text-center">
                        <span className="inline-block bg-green-primary text-white text-xs font-bold px-3 py-1 rounded-full">ENHANCED</span>
                    </div>
                </div>

                {/* Strategic */}
                <div className="bg-[#111827] p-8 rounded-xl border-2 border-gray-800 flex flex-col gap-4 text-white">
                    <div className="text-lg font-bold border-b border-gray-700 pb-4">Strategic Partner</div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Funding</span>
                            <span className="font-medium">5 days prior</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Volume</span>
                            <span className="font-medium">500+ employees</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Commitment</span>
                            <span className="font-medium">Annual service</span>
                        </div>
                    </div>
                    <div className="mt-auto pt-6 text-center">
                        <span className="inline-block bg-green-primary/20 text-green-primary border border-green-primary/50 text-xs font-bold px-3 py-1 rounded-full">PRIORITY</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};
