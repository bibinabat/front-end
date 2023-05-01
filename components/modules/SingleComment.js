import {Rating} from "@mui/material";
import Image from "next/image";

const SingleComment = (props) => {
    return (
        <div className="bg-[#f5f5f5] px-5 py-4 rounded-xl mb-3">
            {
                props.replyText ? (
                    <div className="bg-white rounded-xl px-4 py-3">
                        <div className="text-sm text-[#2D2D2D]">
                            {props.replyText}
                        </div>
                        <div className="text-sm font-[600] text-[#B8B8B8] flex items-center justify-end">
                            <span>کاربر بی بی نبات</span>
                            <span className="h-1 w-1 bg-[#B8B8B8] block rounded-full mx-2"></span>
                            <span>14 اسفند 1401</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="text-mustard font-bold">
                                <span className="text-xl ml-1">4</span>
                                <span className="text-sm">از 5</span>
                            </div>
                            <Rating name="read-only" value={4} readOnly/>
                        </div>
                        <div className="items-center gap-3 hidden lg:flex">
                            <div className="flex items-center text-[#46B715] font-[600] gap-1 border-l-2 pl-2 text-sm">
                                <i className="fa-solid fa-circle-check"></i>
                                <span>پیشنهاد میکنم</span>
                            </div>
                            <div className="flex items-center text-cyan font-[600] gap-1 text-sm">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span>خریدار محصول هستم</span>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="mt-3">
                <p className="font-[500] text-[#2D2D2D]" dangerouslySetInnerHTML={{__html: props.text}}></p>
            </div>
            {
                props.media ? (
                    <div className="flex items-center gap-2 mt-3">
                        <Image src="/testImages/khz3.jpg" alt="product name" width={70} height={70}
                               className="rounded-lg cursor-pointer"/>
                        <Image src="/testImages/khz3.jpg" alt="product name" width={70} height={70}
                               className="rounded-lg cursor-pointer"/>
                        <div
                            className="rounded-lg overflow-hidden relative before:content-[''] before:bg-black before:opacity-50 before:w-full before:h-full before:block before:absolute cursor-pointer">
                            <i className="fa-solid fa-play absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white"></i>
                            <Image src="/testImages/khz3.jpg" alt="product name" width={70} height={70}/>
                        </div>
                    </div>
                ) : (
                    null
                )
            }
            <div className="flex items-center justify-between mt-3">
                <div className="text-xs min-[385px]:text-sm font-[600] text-[#B8B8B8] flex items-center">
                    <span>کاربر بی بی نبات</span>
                    <span className="h-1 w-1 bg-[#B8B8B8] block rounded-full mx-2"></span>
                    <span>14 اسفند 1401</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className="px-3 py-2 bg-[#CECDD7] text-blue-dark rounded-full flex items-center text-xs gap-1 font-bold">
                        <i className="fa-solid fa-reply"></i>
                        <span>پاسخ</span>
                    </button>
                    <button
                        className="px-3 py-1 bg-[#F8C3C3] text-red rounded-full flex items-center gap-1 font-bold">
                        <span>5</span>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;