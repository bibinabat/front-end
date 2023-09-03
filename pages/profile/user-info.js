import UserInfoPage from "@/components/templates/UserInfoPage";
import {NextSeo} from "next-seo";

const UserInfo = () => {
    return (
        <>
            <NextSeo
                title="اطلاعات حساب کاربری"
                noindex={true}
                nofollow={true}
            />
            <UserInfoPage/>
        </>
    );
};

export default UserInfo;