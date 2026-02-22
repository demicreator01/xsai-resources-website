import React from 'react';

interface JsonLdProps {
    schema: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ schema }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
);
