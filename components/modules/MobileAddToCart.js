import Image from "next/image";

const MobileAddToCart = ({toggleTypes, weights, exists}) => {
    return (
        <div
            className="z-[997] bg-white w-full flex sticky bottom-[72px] px-4 py-3 items-center gap-12 shadow-[0px_-20px_62px_9px_rgba(0,0,0,0.1)] lg:hidden">
            {
                exists ? (
                    <button className="bg-blue-dark w-full text-white py-2 rounded-lg relative overflow-hidden"
                            onClick={toggleTypes?.(true)}>
                        <span className="z-[9] relative font-bold">افزودن به سبد خرید</span>
                        <Image src="/images/btn-bg-img.png" alt="Button background" width={500} height={100}
                               className="absolute top-0 z-[6] w-full"/>
                    </button>
                ) : (
                    <button disabled
                            className="bg-gray-400 w-full text-white py-2 rounded-lg relative overflow-hidden font-bold">
                        ناموجود
                    </button>
                )
            }
            <div className="flex flex-col items-end">
                {
                    weights[0].prices.discount && (
                        <div className="flex items-center">
                                        <span
                                            className="font-bold line-through text-[#7C7C7C]">{weights[0].prices.real.toLocaleString()}</span>
                            <span
                                className="bg-red text-white rounded px-2 text-xs py-0.5 mr-1 font-bold flex items-center gap-1">
                                            {weights[0].prices.discount.percent}
                                <i className="fa-solid fa-percent"></i>
                                        </span>
                        </div>
                    )
                }
                <div className="">
                                <span className="text-blue-dark font-bold text-xl ml-1">
                                    {
                                        weights[0].prices.discount ? (
                                            weights[0].prices.discount.price.toLocaleString()
                                        ) : (
                                            weights[0].prices.real.toLocaleString()
                                        )
                                    }
                                </span>
                    <span>تومان</span>
                </div>
            </div>
        </div>
    );
};

export default MobileAddToCart;