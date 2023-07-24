import {Rating} from "@mui/material";
import Image from "next/image";
import CommentImage from "@/components/modules/CommentImage";
import CommentVideo from "@/components/modules/CommentVideo";
import ReplyCommentForm from "@/components/modules/ReplyCommentForm";
import {months} from "@/public/months";
import React from "react";

const SingleComment = ({data}) => {
    return (
        <div className="bg-[#f5f5f5] px-5 py-4 rounded-xl mb-3">
            {
                data.reply ? (
                    <div className="bg-white rounded-xl px-4 py-3">
                        <div className="text-sm text-[#2D2D2D]"
                             dangerouslySetInnerHTML={{__html: data.reply.text}}></div>
                        <div className="text-sm font-[600] text-[#B8B8B8] flex items-center justify-end">
                            {
                                data.reply.author.is_staff ? (
                                    <span className="text-cyan">
                                        ادمین بی بی نبات
                                    </span>
                                ) : (
                                    <span>
                                        {
                                            data.reply.author.display_name ? (
                                                data.reply.author.display_name
                                            ) : (
                                                "کاربر بی بی نبات"
                                            )
                                        }
                                    </span>
                                )
                            }
                            <span className="h-1 w-1 bg-[#B8B8B8] block rounded-full mx-2"></span>
                            <span className="flex gap-1">
                                <span>{data.reply.created_date.split(" ")[0].split("/")[2]}</span>
                                <span>{months[+data.reply.created_date.split(" ")[0].split("/")[1]]}</span>
                                <span>{data.reply.created_date.split(" ")[0].split("/")[0]}</span>
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="text-mustard font-bold">
                                <span className="text-xl ml-1">{data.rate}</span>
                                <span className="text-sm">از 5</span>
                            </div>
                            <Rating name="read-only" value={data.rate} readOnly
                                    icon={<i className="fa-solid fa-star text-base"></i>}
                                    emptyIcon={<i className="fa-duotone fa-star text-base"></i>}
                                    style={{
                                        gap: "3px"
                                    }}
                            />
                        </div>
                        <div className="items-center gap-3 hidden lg:flex">
                            {
                                data.author_offer === "0" ? (
                                    <div
                                        className="flex items-center text-redx font-[600] gap-1 pl-2 text-sm">
                                        <i className="fa-solid fa-circle-xmark"></i>
                                        <span>پیشنهاد نمیکنم</span>
                                    </div>
                                ) : data.author_offer === "1" ? (
                                    <div
                                        className="flex items-center text-[#46B715] font-[600] gap-1 pl-2 text-sm">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>پیشنهاد میکنم</span>
                                    </div>
                                ) : data.author_offer === "2" ? (
                                    <div
                                        className="flex items-center text-[#FFA200] font-[600] gap-1 pl-2 text-sm">
                                        <i className="fa-solid fa-circle-minus"></i>
                                        <span>مطمئن نیستم</span>
                                    </div>
                                ) : null
                            }
                            {data.author.is_customer && (
                                <div className="flex items-center text-cyan font-[600] gap-1 text-sm border-r-2">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span>خریدار محصول هستم</span>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
            <div className="mt-3 font-[500] text-[#2D2D2D]" dangerouslySetInnerHTML={{__html: data.text}}></div>
            {
                data.images || data.videos ? (
                    <div className="flex items-center gap-2 mt-3">
                        {data.images && (
                            data.images.map((image, index) => (
                                <CommentImage key={index} src={image} name={index}/>
                            ))
                        )}
                        {data.videos && (
                            data.videos.map((video, index) => (
                                <CommentVideo key={index} src={video} name={index}/>
                            ))
                        )}
                    </div>
                ) : null
            }
            <div className="flex items-center justify-between mt-3">
                <div className="text-xs min-[385px]:text-sm font-[600] text-[#B8B8B8] flex items-center">
                    {
                        data.author.is_staff ? (
                            <span className="text-cyan">
                                ادمین بی بی نبات
                            </span>
                        ) : (
                            <span>
                                {
                                    data.author.display_name ? (
                                        data.author.display_name
                                    ) : (
                                        "کاربر بی بی نبات"
                                    )
                                }
                            </span>
                        )
                    }
                    <span className="h-1 w-1 bg-[#B8B8B8] block rounded-full mx-2"></span>
                    <span className="flex gap-1">
                        <span>{data.created_date.split(" ")[0].split("/")[2]}</span>
                        <span>{months[+data.created_date.split(" ")[0].split("/")[1]]}</span>
                        <span>{data.created_date.split(" ")[0].split("/")[0]}</span>
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <ReplyCommentForm text={data.text} commentId={data.id}/>
                    <button
                        className="px-3 py-1 bg-[#F8C3C3] text-red rounded-full flex items-center gap-1 font-bold">
                        <span>{data.like}</span>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;