import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {Dialog, Rating, Tooltip} from "@mui/material";
import {useRouter} from "next/router";
import FastView from "@/components/modules/FastView";

const ProductCard = ({data}) => {
    const [productId, setProductId] = useState(Math.floor(Math.random() * 875643165))

    const router = useRouter()

    const [isFastViewOpen, setIsFastViewOpen] = useState(router.asPath.split("#")[1] === `fast_view_${productId}`)

    useEffect(() => {
        const onHashChange = () => setIsFastViewOpen(window.location.hash === `#fast_view_${productId}`)
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleFastViewOpen = () => {
        window.location.hash = `#fast_view_${productId}`
    }

    const handleFastViewClose = () => {
        window.history.back()
    }

    return (
        <div className="flex justify-center">
            <div className="group bg-gray-100 w-max p-4 rounded-2xl text-blue-dark">
                <div className="relative">
                    {data.price.discount &&
                        <span
                            className="absolute top-3 right-3 flex items-center text-xs bg-red text-white rounded px-2 py-0.5 font-bold gap-1 z-20">
                            {data.price.discount.percent}
                            <i className="fa-solid fa-percent"></i>
                        </span>}
                    {
                        data.image ? (
                            <div className="rounded-2xl w-[230px] h-[230px] overflow-hidden">
                                <Image src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${data.image.url}`}
                                       alt={data.image.alt}
                                       width={230}
                                       height={230}
                                       className="rounded-2xl group-hover:scale-125 transition-transform"/>
                            </div>
                        ) : (
                            <div
                                className="w-[230px] h-[230px] rounded-2xl flex items-center justify-center bg-gray-200 text-gray-400 text-3xl">
                                <i className="fa-solid fa-image"></i>
                            </div>
                        )
                    }
                </div>
                <div className="flex flex-col gap-1 pt-1">
                    <span className="text">{data.title}</span>
                    <div className="flex justify-end items-center">
                        {
                            data.price.discount && (
                                <span className="text-gray-500 text-sm font-bold ml-2 line-through">
                                    {data.price.real.toLocaleString()}
                                </span>
                            )
                        }
                        <span className="font-bold pl-1 text-lg">
                            {
                                data.price.discount ? (
                                    data.price.discount.price.toLocaleString()
                                ) : (
                                    data.price.real.toLocaleString()
                                )
                            }
                        </span>
                        <span className="font-[600] text-sm">تومان</span>
                    </div>
                    <div className="flex justify-end gap-1 items-center mb-1">
                        {
                            data.rate !== 0 ? (
                                <>
                                    <span
                                        className="text-xs font-[600] text-gray-500">({data.comments_count} نظر)</span>
                                    <span className="text-xs font-bold text-blue-dark">{data.rate}</span>
                                    <i className="fa-solid fa-star text-mustard text-sm"></i>
                                </>
                            ) : (
                                <span className="text-sm font-bold text-blue-600">نظر دهید</span>
                            )
                        }
                    </div>
                </div>
                <div className="flex justify-between mt-1">
                    <button className="text-white bg-blue-dark flex items-center gap-2 py-2 px-3 rounded-lg">
                        <i className="fa-regular fa-cart-shopping"></i>
                        افزودن به سبد خرید
                    </button>
                    <Tooltip arrow title="نمایش سریع">
                        <button
                            onClick={handleFastViewOpen}
                            className="text-blue-dark flex items-center justify-center p-3 bg-[#D0CFD7] rounded-lg text-lg">
                            <i className="fa-light fa-eye"></i>
                        </button>
                    </Tooltip>
                    <Dialog
                        open={isFastViewOpen}
                        onClose={handleFastViewClose}
                        fullWidth={true}
                        maxWidth="md"
                        PaperProps={{
                            sx: {
                                borderRadius: "15px"
                            }
                        }}
                        scroll="body"
                    >
                        <FastView handleClose={handleFastViewClose} productId={data.slug}/>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;