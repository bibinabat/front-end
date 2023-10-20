import Image from "next/image";
import {useCart} from "@/contexts/CartContext";
import {useEffect, useState} from "react";
import Link from "next/link";

const SingleProductType = ({weight}) => {
    const {addToCart, cart, removeFromCart} = useCart()

    const [isLoading, setIsLoading] = useState(false)
    const [inCart, setInCart] = useState(null)

    useEffect(() => {
        setInCart(cart.cartInfo.orders?.find(order => order.product_weight.id === weight.id))
    }, [cart]);

    const handleAddToCart = async () => {
        try {
            setIsLoading(true)
            await addToCart(weight.id, 1)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    const handleRemoveFromCart = async () => {
        try {
            setIsLoading(true)
            await removeFromCart(inCart.product_weight.id)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    return (
        <div className="flex p-3 bg-[#f5f5f5] rounded-xl">
            {
                weight.images && weight.images.length ? (
                    <Image src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${weight.images[0].url}`} alt="text" width={150}
                           height={150}
                           className="rounded-lg ml-3 block max-w-[150px] max-h-[150px] w-auto h-auto"/>
                ) : (
                    <div
                        className="rounded-lg w-[150px] h-[150px] bg-gray-200 text-gray-400 text-3xl flex items-center justify-center ml-3 aspect-square">
                        <i className="fa-duotone fa-image"></i>
                    </div>
                )
            }
            <div className="w-full flex flex-col justify-between">
                <div>
                    <span className="text-blue-dark font-[600]">{weight.size}</span>
                    <div className="flex text-sm mt-1">
                        <div>
                            <span className="ml-2 font-[600] text-[#909090]">وزن:</span>
                            <span className="font-bold text-blue-dark">{weight.weight} گرم</span>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        weight.prices && (
                            <div className="flex flex-col items-end">
                                {
                                    weight.prices.discount && (
                                        <div className="flex items-center">
                                        <span
                                            className="font-bold line-through text-[#7C7C7C]">{weight.prices.real.toLocaleString()}</span>
                                            <span
                                                className="bg-red text-white rounded px-2 text-xs py-0.5 mr-1 font-bold flex items-center gap-1">
                                            {weight.prices.discount.percent}
                                                <i className="fa-solid fa-percent"></i>
                                        </span>
                                        </div>
                                    )
                                }
                                <div className="mb-2">
                                <span className="text-blue-dark font-bold ml-1">
                                    {
                                        weight.prices.discount ? (
                                            weight.prices.discount.price.toLocaleString()
                                        ) : (
                                            weight.prices.real.toLocaleString()
                                        )
                                    }
                                </span>
                                    <span>تومان</span>
                                </div>
                            </div>
                        )
                    }
                    {
                        inCart ? (
                            <div className="flex items-center justify-between">
                                <div
                                    className="flex items-center gap-4 border-[2px] border-gray-300 rounded-lg py-1 px-2">
                                    <i className="fa-solid fa-plus text-sm cursor-pointer text-blue-600"></i>
                                    <span className="font-bold text-blue-dark">
                                        {
                                            isLoading ? (
                                                <i className="fa-duotone fa-spinner-third fa-spin"></i>
                                            ) : (
                                                inCart.count
                                            )
                                        }
                                    </span>
                                    <i className="fa-solid fa-trash text-sm text-red cursor-pointer"
                                       onClick={handleRemoveFromCart}></i>
                                </div>
                                <Link href="/pages/cart"
                                      className="text-xs font-[600] flex items-center gap-1 text-blue-500">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    مشاهده سبد خرید
                                </Link>
                            </div>
                        ) : (
                            isLoading ? (
                                <button
                                    disabled
                                    className="text-white bg-blue-dark flex items-center gap-2 h-9 rounded-lg w-full text-sm justify-center">
                                    <img src="/loading.svg" width={40}/>
                                </button>
                            ) : (
                                <button
                                    onClick={handleAddToCart}
                                    className="text-white bg-blue-dark flex items-center gap-2 h-9 rounded-lg w-full text-sm justify-center">
                                    <i className="fa-regular fa-cart-shopping hidden min-[388px]:block"></i>
                                    افزودن به سبد خرید
                                </button>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleProductType;