import React from 'react';
import Image from "next/image";
import CommentsAside from "@/components/modules/CommentsAside";
import BuyersComments from "@/components/modules/BuyersComments";
import SingleComment from "@/components/modules/SingleComment";

const Comments = ({surveys, commentsCount, rate, comments, productSlug}) => {
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
            {surveys && surveys.data.surveys.length ? (
                <BuyersComments surveys={surveys}/>
            ) : null}
            <div className="flex gap-5 flex-col 2xl:flex-row">
                <div>
                    <CommentsAside surveys={surveys} rate={rate} commentsCount={commentsCount}
                                   productSlug={productSlug}/>
                </div>
                <div className="w-full">
                    {
                        comments.data && comments.data.comments.length ? (
                            comments.data.comments.map(comment => (
                                <SingleComment key={comment.id} data={comment} productSlug={productSlug}/>
                            ))
                        ) : (
                            <div className="h-60 text-lg font-bold flex items-center justify-center text-blue-dark">
                                هنوز نظری روی این کالا ثبت نشده است.
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Comments;