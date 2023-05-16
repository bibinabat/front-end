import Image from "next/image";
import {Tooltip} from "@mui/material";
import React from "react";

const MobileProductCard = ({discount}) => {
    return (
        <div className="flex p-3 bg-[#f5f5f5] rounded-xl w-full">
            <Image src="/testImages/khz3.jpg" alt="text" width={125} height={125}
                   className="rounded-lg ml-3 block max-w-[125px] max-h-[125px] w-auto h-auto"/>
            <div className="w-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <span className="text-blue-dark font-[600]">پرده نبات ساده درجه یک</span>
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-blue-dark">4</span>
                        <i className="fa-solid fa-star text-mustard"></i>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-end">
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
                        <div className="mb-2">
                            <span className="text-blue-dark font-bold text-xl ml-1">61,600</span>
                            <span>تومان</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            className="text-white bg-blue-dark flex items-center gap-2  px-3 rounded-lg w-full justify-center text-sm">
                            افزودن به سبد خرید
                        </button>
                        <Tooltip arrow title="نمایش سریع">
                            <button
                                className="text-blue-dark flex items-center justify-center p-3 bg-[#D0CFD7] rounded-lg">
                                <i className="fa-light fa-eye"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileProductCard;