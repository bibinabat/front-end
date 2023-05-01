import React from 'react';
import Image from "next/image";
import CommentsAside from "@/components/modules/CommentsAside";
import BuyersComments from "@/components/modules/BuyersComments";
import SingleComment from "@/components/modules/SingleComment";

const Comments = () => {
    return (
        <div className="mb-5">
            <div
                className="bg-[#F5E9D0] text-[#2D2D2D] flex gap-2 items-center px-5 py-2 rounded relative overflow-hidden mb-3">
                <i className="fa-regular fa-comment-dots text-mustard text-lg"></i>
                <span className="text-lg font-bold">نظرات</span>
                <Image src="/images/mustard-line.png" alt="darkblue line" fill
                       className="opacity-30 object-center object-cover pointer-events-none"
                       sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 70vw"/>
            </div>
            <BuyersComments/>
            <div className="flex gap-5 flex-col 2xl:flex-row">
                <div>
                    <CommentsAside/>
                </div>
                <div className="w-full">
                    <SingleComment media={true} text="پرده نبات بی بی نبات بسیار با کیفیته" user="کاربر بی بی نبات"/>
                    <SingleComment
                        text="ممنون از شما آقای خلیلی
                        <br>
                        بی بی نبات محصولات با کیفیت رو خدمت شما ارسال میکنه
                        "
                        user="مدیر بی بی نبات"
                        replyText="پرده نبات بی بی نبات بسیار با کیفیته"/>
                </div>
            </div>
        </div>
    );
};

export default Comments;