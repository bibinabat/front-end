import Image from "next/image";

const SingleProductType = (props) => {
    return (
        <div className="flex p-3 bg-[#f5f5f5] rounded-xl">
            <Image src="/testImages/khz3.jpg" alt="text" width={150} height={150} className="rounded-lg ml-3"/>
            <div className="w-full">
                <span className="text-blue-dark font-[600] text-lg">پرده نبات ساده درجه یک</span>
                <div className="flex">
                    <div>
                        <span className="ml-2 font-[600] text-[#909090]">وزن:</span>
                        <span className="font-bold text-blue-dark">{props.weight} کیلوگرمی</span>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center">
                        <span className="font-bold line-through text-[#7C7C7C]">77,000</span>
                        <span
                            className="bg-red text-white rounded px-2 text-xs py-0.5 mr-1 font-bold flex items-center gap-1">
                            20
                            <i className="fa-solid fa-percent"></i>
                            </span>
                    </div>
                    <div className="mb-2">
                        <span className="text-blue-dark font-bold text-xl ml-1">61,600</span>
                        <span>تومان</span>
                    </div>
                </div>
                <button
                    className="text-white bg-blue-dark flex items-center gap-2 py-2 px-3 rounded-lg w-full justify-center">
                    <i className="fa-regular fa-cart-shopping"></i>
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    );
};

export default SingleProductType;