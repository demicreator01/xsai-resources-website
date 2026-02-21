import React from 'react';
import { ServiceTabs } from '../shared/ServiceTabs';

const accountingServices = [
    {
        id: 'bookkeeping',
        label: 'Bookkeeping',
        mobileLabel: 'Bookkeeping',
        description: 'Your financial records, maintained accurately and continuously.',
        items: [
            { text: 'Ongoing transaction recording' },
            { text: 'Bank reconciliations' },
            { text: 'Management of expenses' },
            { text: 'Clear monthly reporting' },
            { text: 'Cloud software integration' },
        ],
        closingStatement: 'Your books stay current, organised, and inspection-ready.',
        closingSubStatement: 'Always accurate. Never behind.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 7h8M5 10h6M5 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'vat',
        label: 'VAT Returns',
        mobileLabel: 'VAT',
        description: 'Accurate VAT submissions filed on time, every quarter.',
        items: [
            { text: 'VAT scheme advisory' },
            { text: 'Accurate VAT submissions' },
            { text: 'Digital record compliance' },
            { text: 'Filing under Making Tax Digital (MTD)' },
        ],
        closingStatement: 'No missed deadlines. No late penalties.',
        closingSubStatement: 'Every quarter, handled.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 8h5M5 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'annual-accounts',
        label: 'Annual Accounts',
        mobileLabel: 'Accounts',
        description: 'Statutory accounts prepared and filed professionally at year-end.',
        items: [
            { text: 'Preparation of statutory accounts' },
            { text: 'Companies House filing' },
            { text: 'Compliance with UK accounting standards' },
            { text: 'Director review and sign-off support' },
        ],
        closingStatement: 'Your year-end handled professionally and properly.',
        closingSubStatement: 'Filed on time. Every time.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 2v3M12 2v3M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 12.5l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 'corporation-tax',
        label: 'Corporation Tax',
        mobileLabel: 'Corp Tax',
        description: 'Corporation tax calculated correctly and filed without surprises.',
        items: [
            { text: 'Corporation tax calculations' },
            { text: 'CT600 submission' },
            { text: 'Tax efficiency review' },
            { text: 'Filing and deadline monitoring' },
        ],
        closingStatement: 'Clear calculations. No surprises.',
        closingSubStatement: 'Calculated correctly. Filed without delay.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 9h6M9 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'self-assessment',
        label: 'Self-Assessment',
        mobileLabel: 'Self-Assessment',
        description: 'Personal tax aligned with your company structure and strategy.',
        items: [
            { text: 'Self-assessment preparation' },
            { text: 'Dividend planning' },
            { text: 'Income structuring guidance' },
            { text: 'Filing and HMRC liaison' },
        ],
        closingStatement: 'Your personal tax aligned with your company strategy.',
        closingSubStatement: 'Director tax done properly.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 16c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'integrated',
        label: 'Integrated with Payroll',
        mobileLabel: 'Payroll Integration',
        description: 'When payroll and accounting are handled separately, inconsistencies arise. We integrate:',
        items: [
            { text: 'Payroll journals into bookkeeping' },
            { text: 'Pension liabilities into reporting' },
            { text: 'PAYE balances into reconciliation' },
            { text: 'Year-end payroll data into statutory accounts' },
        ],
        closingStatement: 'Everything aligns automatically.',
        closingSubStatement: 'No duplicated effort. No conflicting numbers.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="5" width="6" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <rect x="11" y="8" width="6" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 7.5h2a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

export const AccountingServices: React.FC = () => (
    <ServiceTabs
        eyebrow="Our Services"
        headline={<>What We <span className="text-green-primary">Provide</span></>}
        subheading="Our accounting services are built to support growing UK businesses with structured financial oversight — from daily bookkeeping to year-end filing."
        services={accountingServices}
        background="light"
    />
);
