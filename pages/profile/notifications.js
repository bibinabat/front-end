import NotificationsPage from "@/components/templates/NotificationsPage";
import {NextSeo} from "next-seo";

const Notifications = () => {
    return (
        <>
            <NextSeo
                title="اعلانات"
                noindex={true}
                nofollow={true}
            />
            <NotificationsPage/>
        </>
    );
};

export default Notifications;