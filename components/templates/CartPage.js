import CartProductCard from "@/components/modules/CartProductCard";
import CartAside from "@/components/modules/CartAside";

const CartPage = () => {
    return (
        <div className="mt-36 md:mt-48 px-3 sm:px-7 xl:px-20">
            <h1 className="text-xl font-bold text-blue-dark mb-5">سبد خرید</h1>
            <div className="flex flex-col lg:flex-row gap-3 w-full">
                <div className="flex-1 flex flex-col gap-2">
                    <CartProductCard discount={20}/>
                    <CartProductCard/>
                </div>
                <div>
                    <CartAside/>
                </div>
            </div>
        </div>
    );
};

export default CartPage;