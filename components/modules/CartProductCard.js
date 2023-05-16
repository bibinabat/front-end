import Image from "next/image";

const CartProductCard = ({discount}) => {
    return (
        <div className="flex flex-col md:flex-row bg-[#f5f5f5] rounded-xl p-3 justify-between">
            <div className="flex gap-5">
                <Image src="/testImages/pm4.jpg" alt="product image" width={120} height={120} className="rounded-lg"/>
                <div>
                    <p className="font-[600] text-blue-dark text-lg mb-3">پرده نبات درجه یک</p>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-10 text-sm text-gray-400 font-[600]">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-shop"></i>
                            <span>بی بی نبات</span>
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
                        discount &&
                        <div className="flex items-center">
                            <span className="font-bold line-through text-[#7C7C7C]">77,000</span>
                            <span
                                className="bg-red text-white rounded px-2 text-xs py-0.5 mr-1 font-bold flex items-center gap-1">
                            {discount}
                                <i className="fa-solid fa-percent"></i>
                            </span>
                        </div>
                    }
                    <div className="md:mb-2">
                        <span className="text-blue-dark font-bold text-xl ml-1">61,600</span>
                        <span>تومان</span>
                    </div>
                </div>
                <div className="flex items-center px-3 py-1.5 rounded-lg gap-5 border-2 border-gray-400">
                    <i className="fa-solid fa-plus text-sm cursor-pointer"></i>
                    <span className="font-bold text-blue-dark">1</span>
                    <i className="fa-solid fa-trash text-sm text-red cursor-pointer"></i>
                </div>
            </div>
        </div>
    );
};

export default CartProductCard;