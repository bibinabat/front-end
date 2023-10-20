import Image from "next/image";
import {Dialog, Tooltip} from "@mui/material";
import React, {useEffect, useState} from "react";
import FastView from "@/components/modules/FastView";
import {useRouter} from "next/router";
import Link from "next/link";
import AddToCartBtnMobile from "@/components/elements/AddToCartBtnMobile";

const MobileProductCard = ({data}) => {
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
        <div className="flex p-3 bg-[#f5f5f5] rounded-xl w-full">
            <Link href={`/product/${data.main_category.slug}/${data.slug}`}>
                {
                    data.image ? (
                        <Image src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${data.image.url}`} alt={data.image.alt}
                               width={125}
                               height={125}
                               className={`rounded-lg ml-3 block max-w-[125px] max-h-[125px] w-auto h-auto ${data.exists ? "" : "opacity-50"}`}/>
                    ) : (
                        <div
                            className="w-[125px] h-[125px] rounded-lg flex items-center justify-center bg-gray-200 text-gray-400 text-3xl">
                            <i className="fa-solid fa-image"></i>
                        </div>
                    )
                }
            </Link>
            <div className="w-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <Link href={`/product/${data.main_category.slug}/${data.slug}`}
                          className="text-blue-dark font-[600]">{data.title}</Link>
                    {
                        data.rate !== 0 ? (
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-bold text-blue-dark">{data.rate}</span>
                                <i className="fa-solid fa-star text-mustard"></i>
                            </div>
                        ) : (
                            <Link href={`/product/${data.main_category.slug}/${data.slug}#comment_form`}
                                  className="text-sm font-bold text-blue-600">نظر دهید</Link>
                        )
                    }
                </div>
                <div>
                    <Link href={`/product/${data.main_category.slug}/${data.slug}`} className="flex flex-col items-end">
                        {
                            data.price.discount &&
                            <div className="flex items-center">
                                <span
                                    className="font-bold line-through text-[#7C7C7C]">{data.price.real.toLocaleString()}</span>
                                <span
                                    className="bg-red text-white rounded px-2 text-xs py-0.5 mr-1 font-bold flex items-center gap-1">
                                    {data.price.discount.percent}
                                    <i className="fa-solid fa-percent"></i>
                                </span>
                            </div>
                        }
                        <div className="mb-2">
                            <span className="text-blue-dark font-bold text-xl ml-1">
                                {
                                    data.price.discount ? (
                                        data.price.discount.price.toLocaleString()
                                    ) : (
                                        data.price.real.toLocaleString()
                                    )
                                }
                            </span>
                            <span>تومان</span>
                        </div>
                    </Link>
                    <div className="flex gap-2">
                        {
                            data.exists ? (
                                <AddToCartBtnMobile productId={productId} weights={data.weights}/>
                            ) : (
                                <button
                                    disabled
                                    className="text-white bg-gray-400 flex items-center gap-2  px-3 rounded-lg w-full justify-center text-sm">
                                    ناموجود
                                </button>
                            )
                        }
                        <Tooltip arrow title="نمایش سریع">
                            <button
                                onClick={handleFastViewOpen}
                                className="text-blue-dark flex items-center justify-center p-3 bg-[#D0CFD7] rounded-lg">
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
        </div>
    );
};

export default MobileProductCard;