import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
    return (
        <Section background="green" id="contact" className="text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 py-8 md:py-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                    Let's build something reliable.
                </h2>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                    Transparent pricing. Clean payroll execution. Integrated financial management.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                    <Button variant="white" className="w-full sm:w-auto">
                        Book a Discovery Call
                    </Button>
                    <Button variant="outline-white" className="w-full sm:w-auto">
                        Request a Proposal
                    </Button>
                </div>
            </div>
        </Section>
    );
};
