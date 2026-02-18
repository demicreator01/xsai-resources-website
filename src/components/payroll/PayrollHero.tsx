import React from 'react';
import { Section } from '../ui/Section';

export const PayrollHero: React.FC = () => {
    return (
        <Section background="light" className="md:pt-32">
            <div className="max-w-4xl">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-sm text-gray-400">Home</span>
                    <span className="text-sm text-gray-300">/</span>
                    <span className="text-sm text-gray-900 font-medium">Payroll</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
                    Payroll — <br className="hidden md:block" />
                    <span className="text-green-primary">Structured. Secure. Efficient.</span>
                </h1>

                <div className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl space-y-2 border-l-4 border-green-primary pl-6">
                    <p>Payroll is not just a task. It's a responsibility.</p>
                    <p>Employees rely on accuracy. HMRC requires compliance. Employers need certainty.</p>
                </div>
            </div>
        </Section>
    );
};
