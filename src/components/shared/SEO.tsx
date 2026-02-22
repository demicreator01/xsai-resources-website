import React from 'react';

interface SEOProps {
    title: string;
    description: string;
    path?: string;
    ogType?: 'website' | 'article';
    ogImage?: string; // filename only e.g. 'og-home.png' — resolves to /public/
}

const BASE_URL = 'https://xsairesources.com'; // Update if domain differs

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    path = '',
    ogType = 'website',
    ogImage = 'og-home.png', // fallback to home image if none specified
}) => {
    const fullTitle = `${title} | XSAI Resources`;
    const canonicalUrl = `${BASE_URL}${path}`;
    const imageUrl = `${BASE_URL}/${ogImage}`;

    return (
        <>
            {/* Primary */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="XSAI Resources" />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={fullTitle} />

            {/* Twitter/X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:image:alt" content={fullTitle} />

            {/* Indexing */}
            <meta name="robots" content="index, follow" />
        </>
    );
};
