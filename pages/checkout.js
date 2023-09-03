import CheckoutPage from "@/components/templates/CheckoutPage";
import {NextSeo} from "next-seo";

const Checkout = () => {
    return (
        <>
            <NextSeo
                title="ثبت سفارش"
                noindex={true}
                nofollow={true}
            />
            <CheckoutPage/>
        </>
    );
};

export default Checkout;