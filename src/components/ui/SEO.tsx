import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    type?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title = 'XSAI Resources Ltd | Payroll, Accounting & Admin Support',
    description = 'Professional payroll at £3 per employee, integrated accounting and administrative support. XSAI Resources Ltd — structured, transparent, built for UK businesses.',
    canonical = 'https://xsai.co.uk/',
    type = 'website'
}) => {
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};
