import Image from "next/image";

const HeaderCartItem = ({info}) => {
    return (
        <div className="w-full flex gap-2 bg-gray-100 p-2.5 rounded-xl">
            <Image src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${info.product_weight.image.url}`}
                   alt={info.product_weight.image.alt}
                   width={80} height={80} className="rounded-lg"/>
            <div className="flex flex-col justify-between w-full">
                <span className="text-[15px] font-[600] text-blue-dark w-fit">{info.product_weight.product.title}</span>
                <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-1 text-xs">
                        <div className="bg-white rounded-full flex gap-1 items-center font-bold px-2 w-fit">
                            <span>{info.count}</span>
                            <i className="fa-solid fa-xmark text-xs text-gray-500"></i>
                        </div>
                        <div
                            className="bg-white rounded-full font-bold px-2 w-fit">{info.product_weight.size}</div>
                    </div>
                    <div className="flex gap-1 items-center text-blue-dark">
                        <span className="font-[600] ">
                            {info.prices.price_after_discount ? info.prices.price_after_discount.toLocaleString() : info.prices.real.toLocaleString()}
                        </span>
                        <span className="text-xs font-bold">تومان</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCartItem;