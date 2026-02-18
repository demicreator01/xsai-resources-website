import React from 'react';
import { Section } from '../ui/Section';

export const ProcessSteps: React.FC = () => {
    const steps = [
        {
            title: "Data Submission",
            desc: "Submit payroll data securely via our portal or direct integration."
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
    ];

    return (
        <Section id="process">
            <div className="flex flex-col gap-12 sm:gap-16">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Our Payroll Process
                    </h2>
                    <p className="text-lg text-gray-600">A structured, repeatable workflow — every cycle, every time.</p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[24px] left-0 right-0 h-[2px] border-t-2 border-dashed border-green-primary/30 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-4 lg:text-center group">
                                <div className="w-12 h-12 rounded-full bg-green-primary text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    {index + 1}
                                </div>
                                <div className="pt-2 lg:pt-0">
                                    <h3 className="font-bold text-lg text-text-primary mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center pt-8">
                    <p className="font-medium text-gray-500 italic text-lg">"Simple. Controlled. Accountable."</p>
                </div>
            </div>
        </Section>
    );
};
