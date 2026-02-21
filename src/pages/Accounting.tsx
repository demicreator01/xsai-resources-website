import { Layout } from "../components/layout/Layout";
import { AccountingHero } from '../components/accounting/AccountingHero';
import { AccountingServices } from '../components/accounting/AccountingServices';
import { WhyClientsCombine } from '../components/accounting/WhyClientsCombine';
import { TransparentEngagement } from '../components/accounting/TransparentEngagement';
import { WhoThisIsFor } from '../components/shared/WhoThisIsFor';
import { BuiltForLongTermStability } from '../components/accounting/BuiltForLongTermStability';
import { CTA } from '../components/layout/CTA';



export const Accounting: React.FC = () => {
    return (
        <Layout>
            <AccountingHero />
            <AccountingServices />
            <WhyClientsCombine />
            <TransparentEngagement />
            <WhoThisIsFor
                context="accounting"
                headline="Who This Is For"
                intro="Our accounting services are ideal for businesses that want integrated financial infrastructure — not piecemeal services."
                clientTypes={[
                    {
                        label: 'SMEs with active payroll',
                        sub: 'If you run payroll, your accounting and payroll should share the same infrastructure. We make that the default, not an add-on.',
                    },
                    {
                        label: 'Founder-led companies',
                        sub: 'Founders need accounting that keeps pace with growth — clear reporting, clean filings, and a team that understands what building a business actually looks like.',
                    },
                    {
                        label: 'Growing teams needing structured reporting',
                        sub: 'As headcount grows, financial reporting complexity grows with it. We build the structure before you need it, not after.',
                    },
                    {
                        label: 'Businesses wanting one accountable partner',
                        sub: 'One team handling bookkeeping, VAT, accounts, tax, and payroll. No fragmentation. No finger-pointing between providers.',
                    },
                ]}
                qualifier={{
                    negative: 'If you want the cheapest possible compliance-only filing service, we\'re probably not the right choice.',
                    positive: 'If you want integrated financial infrastructure with a team that understands your whole operation — we are.',
                }}
            />
            <BuiltForLongTermStability />
            <CTA
                subline="If you want accounting that integrates properly with your payroll and operational systems — and a team that explains how it all works — let's talk."
                rightCardTitle="Request a Service Breakdown"
                rightCardDescription="For businesses wanting a detailed breakdown of our accounting services, integration approach, and how we align with your existing payroll setup."
                rightCardChecklist={[
                    'Full accounting services breakdown',
                    'Payroll integration assessment',
                    'Transparent pricing for your structure',
                ]}
                rightCardButton="Request a Service Breakdown"
                rightCardEmailSubject="Service%20Breakdown%20Request%20-%20Accounting"
            />
        </Layout>
    );
};