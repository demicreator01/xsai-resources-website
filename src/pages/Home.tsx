import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/home/Hero';
import { SmarterInfrastructure } from '../components/home/SmarterInfrastructure';
import { PayrollPreview } from '../components/home/PayrollPreview';
import { LoyaltyProgram } from '../components/home/LoyaltyProgram';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { WhyUs } from '../components/home/WhyUs';
import { Security } from '../components/home/Security';
import { LongTerm } from '../components/home/LongTerm';
import { CTA } from '../components/layout/CTA';
import { SEO } from '../components/shared/SEO';

export const Home: React.FC = () => {
    return (
        <Layout>
            <SEO
                title="Payroll & Accounting Infrastructure for UK Businesses"
                description="Transparent £3 per employee payroll, integrated accounting, and admin support. One infrastructure. Built for businesses that value structure, clarity, and long-term partnership."
                path="/"
                ogImage="og-home.png"
            />
            <Hero />
            <div id="services">
                <SmarterInfrastructure />
            </div>
            <PayrollPreview />
            <LoyaltyProgram />
            <div id="accounting">
                <ServicesGrid />
            </div>
            <WhyUs />
            <Security />
            <LongTerm />
            <CTA />
        </Layout >
    );
};
