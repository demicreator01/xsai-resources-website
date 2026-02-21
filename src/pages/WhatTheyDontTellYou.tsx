import { Layout } from "../components/layout/Layout";
import { InsightsHero } from '../components/insights/InsightsHero';
import { FundingWindow } from '../components/insights/FundingWindow';
import { TheQuietPart } from '../components/insights/TheQuietPart';
import { WhyWeChoseTransparency } from '../components/insights/WhyWeChoseTransparency';
import { TheBiggerPicture } from '../components/insights/TheBiggerPicture';
import { WhatThisDoesntMean } from '../components/insights/WhatThisDoesntMean';
import { WhyThisMatters } from '../components/insights/WhyThisMatters';
import { ArticleClose } from '../components/insights/ArticleClose';





export const WhatTheyDontTellYou: React.FC = () => {
    return (
        <Layout>
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