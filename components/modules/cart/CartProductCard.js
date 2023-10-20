import Image from "next/image";
import Link from "next/link";
import {useCart} from "@/contexts/CartContext";
import {useState} from "react";

const CartProductCard = ({data}) => {
    const {removeFromCart} = useCart()

    const [isLoading, setIsLoading] = useState(false)

    const handleRemoveFromCart = async () => {
        try {
            setIsLoading(true)
            await removeFromCart(data.product_weight.id)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    return (
        <div
            className="flex flex-col md:flex-row bg-[#f5f5f5] rounded-xl p-3 justify-between">
            <div className="flex gap-5">
                <Link href={`/product/${data.product_weight.main_category.slug}/${data.product_weight.product.slug}`}
                      className="block">
                    {
                        data.product_weight.image ? (
                            <Image src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${data.product_weight.image.url}`}
                                   alt={data.product_weight.image.alt} width={120} height={120}
                                   className="rounded-lg min-h-[120px]"/>
                        ) : (
                            <div
                                className="h-[120px] w-[120px] aspect-square bg-gray-200 text-gray-300 flex items-center justify-center text-xl rounded-lg">
                                <i className="fa-solid fa-image"></i>
                            </div>
                        )
                    }
                </Link>
                <div>
                    <Link
                        href={`/product/${data.product_weight.main_category.slug}/${data.product_weight.product.slug}`}
                        className="font-[600] text-blue-dark mb-3 block">{data.product_weight.product.title}</Link>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-10 text-sm text-gray-400 font-[600]">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-shop"></i>
                            <span>{data.product_weight.brand.title}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-weight-hanging"></i>
                            <span>{data.product_weight.size}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-shield-check"></i>
                            <span>ضمانت اصل بودن کالا</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row md:flex-col items-end justify-between md:justify-end">
                <div className="flex flex-col items-end mt-2 md:mt-0">
                    {
                        data.prices.price_after_discount &&
                        <div className="flex items-center">
                            <span
                                className="font-bold line-through text-sm text-[#7C7C7C]">{data.prices.real.toLocaleString()}</span>
                            <span
                                className="bg-red text-white rounded px-2 text-xs py-0.5 mr-1 font-bold flex items-center gap-1">
                            {data.prices.discount_percent}
                                <i className="fa-solid fa-percent"></i>
                            </span>
                        </div>
                    }
                    <div className="md:mb-2">
                        <span className="text-blue-dark font-bold ml-1">
                            {(data.prices.price_after_discount || data.prices.real).toLocaleString()}
                        </span>
                        <span>تومان</span>
                    </div>
                </div>
                <div className="flex items-center px-3 py-1.5 rounded-lg gap-5 border-2 border-gray-300">
                    <i className="fa-solid fa-plus text-sm cursor-pointer text-blue-600"></i>
                    <span className="font-bold text-blue-dark">
                        {
                            isLoading ? (
                                <i className="fa-duotone fa-spinner-third fa-spin"></i>
                            ) : (
                                data.count
                            )
                        }
                    </span>
                    <i className="fa-solid fa-trash text-sm text-red cursor-pointer" onClick={handleRemoveFromCart}></i>
                </div>
            </div>
        </div>
    );
};

export default CartProductCard;