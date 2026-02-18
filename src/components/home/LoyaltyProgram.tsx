import React from 'react';
import { Section } from '../ui/Section';

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

export const LoyaltyProgram: React.FC = () => {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <div className="flex flex-col gap-8">
                    <div>
                        <span className="text-xs font-bold text-green-primary tracking-widest uppercase mb-3 block">LOYALTY CREDITS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                            The Loyalty Credit Programme
                        </h2>
                        <div className="space-y-4 text-lg text-gray-600">
                            <p>Payroll funds are typically received several days before employees are paid. This is standard industry practice.</p>
                            <p>Within that operational window, safeguarded client accounts may generate treasury benefit at bank level.</p>
                            <p>Most providers retain this entirely.</p>
                            <p className="font-bold text-green-primary text-xl">We take a different approach.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { icon: "receipt", text: "Applied against future invoices" },
                            { icon: "settings", text: "Used toward additional services" },
                            { icon: "arrow-out", text: "Redeemed manually" } // Simplified text for space
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-green-light flex items-center justify-center text-green-primary">
                                    {/* Placeholder Icons */}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>
                                </div>
                                <span className="text-sm font-medium text-gray-700 leading-tight">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-green-light/50 border-l-4 border-green-primary p-4 rounded-r-lg">
                        <div className="flex gap-3">
                            <span className="text-xl">ℹ️</span>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                No investment exposure. No lending activity. No risk deployment.<br />
                                Just operational efficiency — shared fairly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Diagram */}
                <div className="flex justify-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <FlowDiagram />
                </div>
            </div>
        </Section>
    );
};
