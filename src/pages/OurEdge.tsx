import { Layout } from "../components/layout/Layout";
import { OurEdgeHero } from '../components/edge/OurEdgeHero';
import { TransparencyOverComplexity } from '../components/edge/TransparencyOverComplexity';
import { EfficiencyAndSafeguarding } from '../components/edge/EfficiencyAndSafeguarding';
import { IntegratedControl } from '../components/edge/IntegratedControl';
import { BuiltForLongTerm } from '../components/edge/BuiltForLongTerm';
import { CalmlyDifferent } from '../components/edge/CalmlyDifferent';
import { OurEdgeClose } from '../components/edge/OurEdgeClose';
import { SEO } from '../components/shared/SEO';
import { JsonLd } from '../components/shared/JsonLd';

export const OurEdge: React.FC = () => {
    return (
        <Layout>
            <SEO
                title="Our Edge — Why XSAI is Built Differently"
                description="Six reasons XSAI operates differently. Transparent pricing, shared efficiency, integrated control, and infrastructure built to last."
                path="/our-edge"
                ogImage="og-our-edge.png"
            />
            <JsonLd schema={{
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Our Edge — Why XSAI is Built Differently",
                "description": "Six reasons XSAI operates differently. Transparent pricing, shared efficiency, integrated control, and infrastructure built to last.",
                "url": "https://xsairesources.com/our-edge",
                "provider": {
                    "@type": "FinancialService",
                    "name": "XSAI Resources Ltd",
                    "url": "https://xsairesources.com"
                }
            }} />
            <OurEdgeHero />
            <TransparencyOverComplexity />
            <EfficiencyAndSafeguarding />
            <IntegratedControl />
            <BuiltForLongTerm />
            <CalmlyDifferent />
            <OurEdgeClose />
        </Layout>
    );
};