import React from 'react';
import {months} from "@/public/months";
import Link from "next/link";

const BuyersComment = ({survey}) => {
    const poQNumber = survey.products_quality
    const paQNumber = survey.pack_quality

    const colors = {
        1: "red",
        2: "red",
        3: "#FFA200",
        4: "#57D91F",
        5: "#13A89E",
        0: "transparent"
    }

    const poQColor = colors[poQNumber] || ""
    const paQColor = colors[paQNumber] || ""

    return (
        <div className="bg-[#f5f5f5] h-[22rem] rounded-xl p-5 relative h-96 flex flex-col">
            <div className="flex items-center justify-between whitespace-nowrap text-blue-dark mb-2">
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-user text-lg"></i>
                    <span className="font-[600]">{survey.user}</span>
                </div>
                <span className="text-[#8A8A8A] text-sm font-[500] flex gap-1">
                    <span>{survey.created_date.split(" ")[0].split("/")[2]}</span>
                    <span>{months[+survey.created_date.split(" ")[0].split("/")[1]]}</span>
                    <span>{survey.created_date.split(" ")[0].split("/")[0]}</span>
                </span>
            </div>
            <div
                className="h-[124px] overflow-hidden line-clamp-5 font-[500] text-[#2D2D2D] text-sm leading-6 text-justify grow"
                dangerouslySetInnerHTML={{__html: survey.text}}></div>
            <div className="flex my-1 gap-5">
                <div className="flex items-start gap-1">
                    <span className="text-sm text-[#B5B5B8] font-bold">کیفیت محصول</span>
                    <span className={`text-lg font-[800]`} style={{color: poQColor}}>{poQNumber}</span>
                </div>
                <div className="flex items-start gap-1">
                    <span className="text-sm text-[#B5B5B8] font-bold">کیفیت بسته بندی</span>
                    <span className={`text-lg font-[800] text-[${paQColor}]`}
                          style={{color: paQColor}}>{paQNumber}</span>
                </div>
            </div>
            <div className="bg-white rounded-lg p-1 flex flex-col items-center grow">
                <div className="text-sm font-bold text-[#555555]">لیست محصولات خریداری شده</div>
                <div className="text-xs font-[600] text-blue-dark flex flex-col items-center gap-1 mt-1">
                    {
                        survey.orders.slice(0, 3).map(order => (
                            <Link href={`/product/${order.main_category.slug}/${order.slug}`}
                                  key={order.id}>{order.title}</Link>
                        ))
                    }
                </div>
                {
                    survey.orders.length > 3 ? (
                        <div className="text-cyan text-xs font-extrabold mt-1">و {survey.orders.length - 3} محصول
                            دیگر</div>
                    ) : null
                }
            </div>
        </div>
    );
};

export default BuyersComment;