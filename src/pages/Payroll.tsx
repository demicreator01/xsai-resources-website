
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PayrollHero } from '../components/payroll/PayrollHero';
import { ProcessSteps } from '../components/payroll/ProcessSteps';
import { Inclusions } from '../components/payroll/Inclusions';
import { SafeguardingDeepDive } from '../components/payroll/SafeguardingDeepDive';
import { LoyaltyCreditProgramme } from '../components/payroll/LoyaltyCreditProgramme';
import { SEO } from '../components/ui/SEO';
import { LoyaltyTiers } from '../components/payroll/LoyaltyTiers';
import { HowLoyaltyCreditsWork } from '../components/payroll/HowLoyaltyCreditsWork';
import { WhyThisModelWorks } from '../components/payroll/WhyThisModelWorks';
import { BuiltForReliability } from '../components/payroll/BuiltForReliability';
import { WhoWeWorkBestWith } from '../components/payroll/WhoWeWorkBestWith';

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
            <LoyaltyCreditProgramme />
            <HowLoyaltyCreditsWork />
            <LoyaltyTiers />
            <WhyThisModelWorks />
            <BuiltForReliability />
            <WhoWeWorkBestWith />
        </Layout>
    );
};
