import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PayrollHero } from '../components/payroll/PayrollHero';
import { ProcessSteps } from '../components/payroll/ProcessSteps';
import { Inclusions } from '../components/payroll/Inclusions';
import { SafeguardingDeepDive } from '../components/payroll/SafeguardingDeepDive';
import { LoyaltyCreditProgramme } from '../components/payroll/LoyaltyCreditProgramme';
import { LoyaltyTiers } from '../components/payroll/LoyaltyTiers';
import { HowLoyaltyCreditsWork } from '../components/payroll/HowLoyaltyCreditsWork';
import { WhyThisModelWorks } from '../components/payroll/WhyThisModelWorks';
import { BuiltForReliability } from '../components/payroll/BuiltForReliability';
import { WhoWeWorkBestWith } from '../components/payroll/WhoWeWorkBestWith';
import { CTA } from '../components/layout/CTA';
import { SEO } from '../components/shared/SEO';

export const Payroll: React.FC = () => {
    return (
        <Layout>
            <SEO
                title="Payroll Services — £3 Per Employee"
                description="Full-service BACS bureau payroll at £3 per employee per month. RTI compliant, HMRC registered, with a Loyalty Credit Programme that rewards long-term partners."
                path="/payroll"
                ogImage="og-payroll.png"
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
            <CTA
                headline="Ready to streamline your payroll?"
                subline="If you want a payroll provider that treats infrastructure seriously — and rewards loyalty intelligently — we should talk."
                rightCardTitle="Request a Custom Proposal"
                rightCardDescription="For multi-entity businesses or SMEs with 50+ employees, we provide a detailed cost-benefit analysis, implementation roadmap, and projected Loyalty Credit allocation based on your payroll profile."
                rightCardButton="Request a Custom Proposal"
                rightCardEmailSubject="Custom%20Proposal%20Request%20-%20Payroll"
            />
        </Layout>
    );
};
