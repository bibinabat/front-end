import UserInfoPage from "@/components/templates/UserInfoPage";
import {NextSeo} from "next-seo";

const IndexPage = () => {
    return (
        <>
            <NextSeo
                title="حساب کاربری"
                noindex={true}
                nofollow={true}
            />
            <UserInfoPage/>
        </>
    );
};

export default IndexPage;