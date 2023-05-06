import Image from "next/image";

const MobileAddToCart = ({toggleTypes}) => {
    return (
        <div
            className="z-[997] bg-white w-full flex sticky bottom-[72px] px-4 py-3 items-center gap-12 shadow-[0px_-20px_62px_9px_rgba(0,0,0,0.1)] lg:hidden">
            <button className="bg-blue-dark w-full text-white py-2 rounded-lg relative overflow-hidden"
                    onClick={toggleTypes?.(true)}>
                <span className="z-[9] relative font-bold">افزودن به سبد خرید</span>
                <Image src="/images/btn-bg-img.png" alt="Button background" width={500} height={100}
                       className="absolute top-0 z-[6] w-full"/>
            </button>
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
        </div>
    );
};

export default MobileAddToCart;