import ProductAlbumSlider from "@/components/modules/ProductAlbumSlider";
import {useRef, useState} from "react";
import {Rating} from "@mui/material";

const FastView = ({handleClose}) => {
    const [_, setInit] = useState()

    const viewSwiperRef = useRef(null)

    return (
        <div className="p-5">
            <div className="w-full">
                <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                   onClick={handleClose}></i>
            </div>
            <div className="p-3 flex flex-col md:flex-row items-center gap-5">
                <div className="w-[290px] h-[290px]">
                    <ProductAlbumSlider images={["pm4.jpg", "pm4.jpg", "pm4.jpg", "pm4.jpg", "pm4.jpg", "pm4.jpg"]}
                                        setInit={setInit} viewSwiperRef={viewSwiperRef}/>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-blue-dark font-bold text-base sm:text-xl">پرده نبات زعفرانی درجه یک</p>
                        <div className="flex items-center">
                            <div className="items-center hidden min-[835px]:flex">
                                <Rating name="read-only" value={4} readOnly/>
                            </div>
                            <i className="fa-solid fa-star text-mustard min-[835px]:hidden"></i>
                            <span className="text-xs whitespace-nowrap self-end mr-1 text-blue-dark font-[500]">
                                4
                                <span className="mr-1 text-[#909090]">
                                    (5 نظر)
                                </span>
                             </span>
                        </div>
                    </div>
                    <p className="text-[#909090] font-[500] mb-3">
                        <span className="font-bold">نبات پرده </span>
                        را می توان یکی از انواع نبات به شمار آورد که در قطب تولید نبات یعنی یزد تولید شده و
                        از
                        کیفیت
                        بی نظیری برخوردار می باشد. لازم به ذکر است این محصول، تحت عناوین دیگر مثل پرده نبات
                        نیز
                        شناخته شده و از القابی مانند الماس نبات هم برخوردار می باشد.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:gap-5 text-sm items-center">
                        <div className="flex items-center">
                            <i className="fa-solid fa-shield-check text-[#63C94A] text-2xl ml-2"></i>
                            <span className="text-blue-dark font-[600]">ضمانت اصل بودن کالا</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-box text-blue-dark text-2xl ml-2"></i>
                            <span className="text-blue-dark font-[600]">بازگشت 7 روزه کالا</span>
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
                    <button className="bg-blue-dark w-full text-white rounded-lg py-2 mt-2">
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FastView;