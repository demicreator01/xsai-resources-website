import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PayrollHero } from '../components/payroll/PayrollHero';
import { ProcessSteps } from '../components/payroll/ProcessSteps';
import { Inclusions } from '../components/payroll/Inclusions';
import { SafeguardingDeepDive } from '../components/payroll/SafeguardingDeepDive';
import { LoyaltyTiers } from '../components/payroll/LoyaltyTiers';
import { Personas } from '../components/payroll/Personas';
import { CTA } from '../components/home/CTA'; // Reusing CTA
import { SEO } from '../components/ui/SEO';

export const Payroll: React.FC = () => {
    return (
        <Layout>
            <SEO
                title="Payroll Services | XSAI Resources Ltd"
                description="Structured, secure, and efficient payroll processing for UK businesses. Fully compliant RTI submissions and dedicated support."
                canonical="https://xsai.co.uk/payroll"
            />
            <PayrollHero />
            <ProcessSteps />
            <Inclusions />
            <SafeguardingDeepDive />
            <LoyaltyTiers />
            <Personas />
            <CTA />
        </Layout>
    );
};
