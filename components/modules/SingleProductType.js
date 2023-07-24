import Image from "next/image";

const SingleProductType = ({weight}) => {
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
                    <span className="text-blue-dark font-[600] text-lg">{weight.size}</span>
                    <div className="flex">
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
                                <span className="text-blue-dark font-bold text-xl ml-1">
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
                    <button
                        className="text-white bg-blue-dark flex items-center gap-2 py-2 px-3 rounded-lg w-full justify-center">
                        <i className="fa-regular fa-cart-shopping hidden min-[388px]:block"></i>
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProductType;