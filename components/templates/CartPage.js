import CartProductCard from "@/components/modules/cart/CartProductCard";
import CartAside from "@/components/modules/cart/CartAside";
import {useCart} from "@/contexts/CartContext";

const CartPage = () => {
    const {cart} = useCart()

    return (
        <div className="mt-36 md:mt-48 px-3 sm:px-7 xl:px-20">
            <h1 className="text-xl font-bold text-blue-dark mb-5">سبد خرید</h1>
            {
                cart.cartInfo.orders ? (
                    cart.cartInfo.orders.length ? (
                        <div className="flex flex-col lg:flex-row gap-3 w-full">
                            <div className="flex-1 flex flex-col gap-2">
                                {
                                    cart.cartInfo.orders.map(order => (
                                        <CartProductCard key={order.id} data={order}/>
                                    ))
                                }
                            </div>
                            <div>
                                <CartAside data={cart}/>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center font-[600] py-32 text-blue-dark">سبد خرید شما خالی است.</div>
                    )
                ) : (
                    <div className="h-[400px] text-4xl text-blue-500 w-full flex items-center justify-center">
                        <i className="fa-duotone fa-spinner-third fa-spin"></i>
                    </div>
                )
            }
        </div>
    );
};

export default CartPage;