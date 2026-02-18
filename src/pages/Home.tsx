import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/ui/SEO';
import { Hero } from '../components/home/Hero';
import { SmarterInfrastructure } from '../components/home/SmarterInfrastructure';
import { PayrollPreview } from '../components/home/PayrollPreview';
import { LoyaltyProgram } from '../components/home/LoyaltyProgram';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { WhyUs } from '../components/home/WhyUs';
import { Security } from '../components/home/Security';
import { CTA } from '../components/home/CTA';

export const Home: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Hero />
            <SmarterInfrastructure />
            <PayrollPreview />
            <LoyaltyProgram />
            <ServicesGrid />
            {/* Other sections will be added here */}
        </Layout>
    );
};
