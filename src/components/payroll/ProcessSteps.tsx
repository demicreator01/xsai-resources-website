import React from 'react';
import { Section } from '../ui/Section';

export const ProcessSteps: React.FC = () => {

    return (
        <Section id="process" background="light">
            <div className="flex flex-col gap-12 sm:gap-16">
                <div className="max-w-3xl">

                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                        Our Payroll Process
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                        A structured, repeatable workflow — every cycle, every time.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-dashed border-green-primary/30 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                        {[
                            {
                                title: "Data Submission",
                                desc: "Submit payroll data securely via our portal or direct file transfer."
                            },
                            {
                                title: "Calculation & Compliance",
                                desc: "We calculate in line with HMRC RTI, pension auto-enrolment, statutory pay rules, and tax code updates."
                            },
                            {
                                title: "Employer Approval",
                                desc: "Receive a clear payroll summary for approval before processing. No surprises. Full visibility."
                            },
                            {
                                title: "Payroll Funding",
                                desc: "Funds received 3–5 working days before pay date. Ensures secure BACS processing and full reconciliation."
                            },
                            {
                                title: "Secure Disbursement",
                                desc: "BACS files submitted. Employees paid on agreed date. RTI confirmation follows immediately."
                            }
                        ].map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-text-primary text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-xl mb-6 group-hover:bg-green-primary transition-colors duration-300">
                                    {index + 1}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-gray-100">
                    <p className="text-xl text-gray-900 font-bold mb-2">Simple. Controlled. Accountable.</p>
                </div>
            </div>
        </Section>
    );
};
