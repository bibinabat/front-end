import {useCart} from "@/contexts/CartContext";
import {useEffect} from "react";
import HeaderCartItem from "@/components/modules/layout/header/HeaderCartItem";
import Link from "next/link";

const HeaderCart = ({isOpen, setIsOpen, cart}) => {
    return (
        <div onMouseEnter={() => setIsOpen(true)}
             onMouseLeave={() => setIsOpen(false)}
             className={`w-[350px] p-5 absolute z-[9999] bg-white shadow-[0px_20px_58px_0px_rgba(0,0,0,0.2)] left-14 top-[86px] transition rounded-2xl ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            {
                cart.cartInfo.orders?.length ? (
                    <>
                        <div className="font-bold text-blue-dark text-center">سبد خرید</div>
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
                            <Link href="/pages/cart"
                                  className="bg-blue-dark text-white rounded-md px-2 py-2 text-sm font-[500]">
                                مشاهده سبد خرید
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="py-10 text-center text-blue-dark font-[600] text-sm">
                        سبد خرید شما خالی است.
                    </div>
                )
            }
        </div>
    );
};

export default HeaderCart;