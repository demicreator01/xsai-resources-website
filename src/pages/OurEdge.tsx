import { Layout } from "../components/layout/Layout";
import { OurEdgeHero } from '../components/edge/OurEdgeHero';
import { TransparencyOverComplexity } from '../components/edge/TransparencyOverComplexity';
import { EfficiencyAndSafeguarding } from '../components/edge/EfficiencyAndSafeguarding';
import { IntegratedControl } from '../components/edge/IntegratedControl';
import { BuiltForLongTerm } from '../components/edge/BuiltForLongTerm';
import { CalmlyDifferent } from '../components/edge/CalmlyDifferent';
import { OurEdgeClose } from '../components/edge/OurEdgeClose';

export const OurEdge: React.FC = () => {
    return (
        <Layout>
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