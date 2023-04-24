import {Rating} from "@mui/material";
import Image from "next/image";

const ProductInfo = () => {
    return (
        <div className="bg-[#f5f5f5] p-6 mr-0 md:mr-5 rounded-2xl sticky top-40 md:mb-5">
            <div className="flex items-center gap-2 mb-3">
                <i className="fa-solid fa-shop text-cyan text-xl"></i>
                <span className="text-blue-dark font-[500] text-lg">بی بی نبات</span>
            </div>
            <div className="flex items-center mb-1">
                <span className="font-[500] text-[#909090] ml-2">امتیاز:</span>
                <Rating name="read-only" value={4} readOnly/>
                <span className="text-xs whitespace-nowrap self-end mr-1 text-blue-dark font-[500]">
                    4
                    <span className="mr-1 text-[#909090]">
                    (5 نظر)
                    </span>
                </span>
            </div>
            <div className="flex items-center font-[500]">
                <span className="text-[#909090] ml-2">عملکرد:</span>
                <span className="text-cyan">عالی</span>
            </div>
            <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
            <div className="flex items-center mb-2">
                <i className="fa-solid fa-shield-check text-[#63C94A] text-2xl ml-2"></i>
                <span className="text-blue-dark font-[600]">ضمانت اصل بودن کالا</span>
            </div>
            <div className="flex items-center">
                <i className="fa-solid fa-box text-blue-dark text-2xl ml-2"></i>
                <span className="text-blue-dark font-[600]">بازگشت 7 روزه کالا</span>
            </div>
            <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
            <div className="flex items-center gap-2 mb-2">
                <i className="fa-solid fa-box-archive text-mustard"></i>
                <span className="text-sm font-[600] text-[#757575]">موجود در انبار بی بی نبات</span>
            </div>
            <div
                className="bg-cyan bg-opacity-10 text-cyan text-xs text-center font-[600] py-3 whitespace-nowrap px-8 rounded-lg mb-2">
                <p>
                    <i className="fa-regular fa-clock ml-1"></i>
                    زمان تحویل متناسب با تازه ترین محصول <br/> بین 1 تا 5 روز میباشد.
                </p>
            </div>
            <div
                className="bg-mustard bg-opacity-20 text-mustard text-xs text-center font-[600] py-3 whitespace-nowrap px-8 rounded-lg">
                <p>
                    <i className="fa-regular fa-truck ml-1"></i>
                    ارسال از یزد به سراسر کشور
                </p>
            </div>
            <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
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
            <button className="bg-blue-dark w-full text-white py-2 rounded-lg relative overflow-hidden">
                <span className="z-[9] relative font-bold">افزودن به سبد خرید</span>
                <Image src="/images/btn-bg-img.png" alt="Button background" width={500} height={100}
                       className="absolute top-0 z-[6] w-full"/>
            </button>
        </div>
    );
};

export default ProductInfo;