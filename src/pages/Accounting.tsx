import { Layout } from "../components/layout/Layout";
import { AccountingHero } from '../components/accounting/AccountingHero';
import { AccountingServices } from '../components/accounting/AccountingServices';



export const Accounting: React.FC = () => {
    return (
        <Layout>
            <AccountingHero />
            <AccountingServices />
        </Layout>
    );
};