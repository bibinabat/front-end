import SubmittingComplaintPage from "@/components/templates/SubmittingComplaintPage";
import {NextSeo} from "next-seo";

const SubmittingComplaint = () => {
    return (
        <>
            <NextSeo
                title="ثبت شکایت - بی بی نبات"
                nofollow={true}
                noindex={true}
            />
            <SubmittingComplaintPage/>
        </>
    );
};

export default SubmittingComplaint;