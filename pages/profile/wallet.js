import WalletPage from "@/components/templates/WalletPage";
import {NextSeo} from "next-seo";

const Wallet = () => {
    return (
        <>
            <NextSeo
                title="کیف پول"
                noindex={true}
                nofollow={true}
            />
            <WalletPage/>
        </>
    );
};

export default Wallet;