import { Layout } from "../components/layout/Layout";
import { InsightsHero } from '../components/insights/InsightsHero';
import { FundingWindow } from '../components/insights/FundingWindow';
import { TheQuietPart } from '../components/insights/TheQuietPart';
import { WhyWeChoseTransparency } from '../components/insights/WhyWeChoseTransparency';
import { TheBiggerPicture } from '../components/insights/TheBiggerPicture';
import { WhatThisDoesntMean } from '../components/insights/WhatThisDoesntMean';
import { WhyThisMatters } from '../components/insights/WhyThisMatters';
import { ArticleClose } from '../components/insights/ArticleClose';
import { SEO } from '../components/shared/SEO';
import { JsonLd } from '../components/shared/JsonLd';

export const WhatTheyDontTellYou: React.FC = () => {
    return (
        <Layout>
            <SEO
                title="What They Don't Tell You About Payroll"
                description="An honest explanation of how payroll infrastructure works — the funding window, treasury benefit, and why XSAI chose transparency over silence."
                path="/insights"
                ogType="article"
                ogImage="og-insights.png"
            />
            <JsonLd schema={{
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "What They Don't Tell You About Payroll",
                "description": "An honest explanation of how payroll infrastructure works — the funding window, treasury benefit, and why XSAI chose transparency over silence.",
                "url": "https://xsairesources.com/insights",
                "author": {
                    "@type": "Organization",
                    "name": "XSAI Resources Ltd",
                    "url": "https://xsairesources.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "XSAI Resources Ltd",
                    "url": "https://xsairesources.com"
                },
                "image": "https://xsairesources.com/og-insights.png",
                "inLanguage": "en-GB"
            }} />
            <InsightsHero />
            <FundingWindow />
            <TheQuietPart />
            <WhyWeChoseTransparency />
            <TheBiggerPicture />
            <WhatThisDoesntMean />
            <WhyThisMatters />
            <ArticleClose />
        </Layout>
    );
};