import CartPage from "@/components/templates/CartPage";
import {NextSeo} from "next-seo";

const Cart = () => {
    return (
        <>
            <NextSeo
                title="سبد خرید - بی بی نبات"
                noindex={true}
                nofollow={true}
            />
            <CartPage/>
        </>
    );
};

export default Cart;