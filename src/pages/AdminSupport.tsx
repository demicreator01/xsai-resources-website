import { Layout } from "../components/layout/Layout";
import { AdminHero } from '../components/admin/AdminHero';
import { WhatWeSupport } from '../components/admin/WhatWeSupport';
import { IntegratedWithPayrollAccounting } from '../components/admin/IntegratedWithPayrollAccounting';
import { WhoThisIsFor } from '../components/shared/WhoThisIsFor';
import { CTA } from '../components/layout/CTA';
import { SEO } from '../components/shared/SEO';

export const AdminSupport: React.FC = () => {
    return (
        <Layout>
            <SEO
                title="Admin & Business Support Services"
                description="Director administration, document management, back-office coordination, and business support — quietly handled so your operations run smoothly."
                path="/admin-support"
                ogImage="og-admin.png"
            />
            <AdminHero />
            <WhatWeSupport />
            <IntegratedWithPayrollAccounting />
            <WhoThisIsFor
                context="admin"
                headline="Who This Is For"
                intro="Our admin services are designed for business owners who want their operational foundations handled properly — quietly, reliably, and without friction."
                clientTypes={[
                    {
                        label: 'Growing companies',
                        sub: 'As you scale, administrative complexity scales with you. We build the structure before it becomes a problem — not after.',
                    },
                    {
                        label: 'Time-poor founders',
                        sub: 'Founders should be building their business, not filing confirmation statements. We handle the background so you can stay focused on what matters.',
                    },
                    {
                        label: 'Multi-entity businesses',
                        sub: 'Multiple companies mean multiple compliance obligations. One team managing all of them means nothing falls through the cracks.',
                    },
                    {
                        label: 'Businesses seeking operational clarity',
                        sub: 'Clear records, organised documents, aligned providers. Operational clarity isn\'t a luxury — it\'s what makes everything else run smoothly.',
                    },
                ]}
                qualifier={{
                    negative: 'If you want a one-off filing done cheaply with no ongoing relationship, we\'re probably not the right fit.',
                    positive: 'If you want a team that quietly keeps your operational foundations in order — month after month — we are.',
                }}
            />
            <CTA
                subline="If you want your administrative foundations handled properly — quietly, reliably, and without friction — let's talk."
                rightCardTitle="Request a Service Overview"
                rightCardDescription="For businesses wanting to understand how our admin and back-office support integrates with payroll and accounting under one structure."
                rightCardChecklist={[
                    'Admin services scope and coverage',
                    'Integration with your existing payroll',
                    'Transparent pricing and engagement terms',
                ]}
                rightCardButton="Request a Service Overview"
                rightCardEmailSubject="Service%20Overview%20Request%20-%20Admin"
            />
        </Layout>
    );
};