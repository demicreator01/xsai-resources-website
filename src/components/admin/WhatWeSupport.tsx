import React from 'react';
import { ServiceTabs } from '../shared/ServiceTabs';

const adminServices = [
    {
        id: 'director-admin',
        label: 'Director & Company Admin',
        mobileLabel: 'Director Admin',
        description: 'Your corporate records managed accurately and kept compliant at all times.',
        items: [
            { text: 'Companies House filings' },
            { text: 'Confirmation statements' },
            { text: 'Director changes' },
            { text: 'Registered office services' },
            { text: 'Share structure updates' },
        ],
        closingStatement: 'Your corporate records stay compliant and current.',
        closingSubStatement: 'Every filing. Every deadline. Handled.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 2v3M12 2v3M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 12.5l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 'document-management',
        label: 'Document & Record Management',
        mobileLabel: 'Documents',
        description: 'Secure, organised documentation — structured for compliance and audit readiness.',
        items: [
            { text: 'Secure document handling' },
            { text: 'Digital filing systems' },
            { text: 'Compliance record organisation' },
            { text: 'Audit-ready structuring' },
        ],
        closingStatement: 'Clear documentation. No scrambling at year-end.',
        closingSubStatement: 'Organised from day one.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="2" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'back-office',
        label: 'Back-Office Coordination',
        mobileLabel: 'Back Office',
        description: 'We keep your financial ecosystem aligned — liaising across providers on your behalf.',
        items: [
            { text: 'Liaison with HMRC' },
            { text: 'Pension provider coordination' },
            { text: 'Payroll data alignment' },
            { text: 'Accountant & adviser communication' },
        ],
        closingStatement: 'We keep your financial ecosystem aligned.',
        closingSubStatement: 'One coordinator. Every workstream.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 2v3M9 13v3M2 9h3M13 9h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4.2 4.2l2.1 2.1M11.7 11.7l2.1 2.1M4.2 13.8l2.1-2.1M11.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'business-support',
        label: 'Business Support & Sourcing',
        mobileLabel: 'Biz Support',
        description: 'Structured foundations that make scaling easier — without operational drag.',
        items: [
            { text: 'Operational onboarding' },
            { text: 'Contractor coordination' },
            { text: 'Administrative structuring' },
            { text: 'Internal process setup' },
        ],
        closingStatement: 'Structured foundations make scaling easier.',
        closingSubStatement: 'Built right from the start.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2l2 5h5l-4 3 1.5 5L9 12l-4.5 3L6 10 2 7h5L9 2Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const WhatWeSupport: React.FC = () => (
    <ServiceTabs
        eyebrow="What We Handle"
        headline={<>What We <span className="text-green-primary">Support</span></>}
        subheading="Structured administrative support across four areas — so your operations run cleanly in the background."
        services={adminServices}
        background="white"
    />
);
