import {useCart} from "@/contexts/CartContext";
import HeaderCartItem from "@/components/modules/HeaderCartItem";
import Link from "next/link";

const NavBarCart = ({handleClose}) => {
    const {cart} = useCart()

    return (
        <div>
            <div className="mt-2 flex items-center justify-center flex-col">
                <hr className="border-[3px] border-[#939393] w-8 rounded-full"/>
                <span className="font-bold mt-3 mb-2 text-blue-dark">سبد خرید</span>
            </div>
            {
                cart.status === "loading" ? (
                        <div className="h-[200px] text-4xl text-blue-500 w-full flex items-center justify-center">
                            <i className="fa-duotone fa-spinner-third fa-spin"></i>
                        </div>
                    ) :
                    cart.cartInfo.orders?.length ? (
                        <div className="p-3">
                            <div className="mt-2 flex flex-col gap-2 max-h-[250px] overflow-y-auto scrollbar-hidden">
                                {
                                    cart.cartInfo.orders.map(order => (
                                        <HeaderCartItem key={order.id} info={order}/>
                                    ))
                                }
                            </div>
                            <hr className="bg-gray-200 h-[2.5px] my-3 rounded"/>
                            <div className="text-xs text-gray-400 font-bold mb-1">جمع سبد خرید</div>
                            <div className="flex justify-between items-end">
                                <div>
                                <span
                                    className="text-sm font-[600] text-gray-500 line-through">{cart.cartInfo.balances.real.toLocaleString()}</span>
                                    <div className="text-blue-dark flex gap-1 items-center">
                                    <span
                                        className="font-bold">{cart.cartInfo.balances.discount.toLocaleString()}</span>
                                        <span className="text-sm font-[600]">تومان</span>
                                    </div>
                                </div>
                                <Link href="/cart"
                                      onClick={handleClose}
                                      className="bg-blue-dark text-white rounded-md px-5 py-3 text-sm font-[500]">
                                    مشاهده سبد خرید
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="py-10 text-center text-blue-dark font-[600] text-sm">
                            سبد خرید شما خالی است.
                        </div>
                    )
            }
        </div>
    );
};

export default NavBarCart;