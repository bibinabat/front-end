import React from 'react';
import Image from "next/image";
import {Rating, Tooltip} from "@mui/material";

const ProductCard = ({discount}) => {
    return (
        <div className="flex justify-center">
            <div className="bg-gray-100 w-max p-4 rounded-2xl text-blue-dark">
                <div className="relative">
                    {discount &&
                        <span
                            className="absolute top-3 right-3 flex items-center text-xs bg-red text-white rounded px-2 py-0.5 font-bold gap-1">
                            {discount}
                            <i className="fa-solid fa-percent"></i>
                        </span>}
                    <Image src="/testImages/khz3.jpg" alt="نبات" width={230} height={250} className="rounded-2xl"/>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                    <span className="text">پرده نبات زعفرانی درجه یک</span>
                    <Rating name="read-only" value={4} readOnly/>
                    <span>
                        <span className="font-bold pl-1 text-lg">
                            94,000
                        </span>
                        <span>تومان</span>
                    </span>
                </div>
                <div className="flex justify-between mt-1">
                    <button className="text-white bg-blue-dark flex items-center gap-2 py-2 px-3 rounded-lg">
                        <i className="fa-regular fa-cart-shopping"></i>
                        افزودن به سبد خرید
                    </button>
                    <Tooltip arrow title="نمایش سریع">
                        <button
                            className="text-blue-dark flex items-center justify-center p-3 bg-[#D0CFD7] rounded-lg text-lg">
                            <i className="fa-light fa-eye"></i>
                        </button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;