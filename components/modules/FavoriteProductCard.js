import Image from "next/image";
import {Dialog, Tooltip} from "@mui/material";
import React, {useEffect, useState} from "react";
import FastView from "@/components/modules/FastView";
import {useRouter} from "next/router";

const FavoriteProductCard = ({discount}) => {
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
            <Image src="/testImages/khz3.jpg" alt="text" width={100} height={100}
                   className="rounded-lg ml-3 block max-w-[125px] max-h-[125px] w-auto h-auto"/>
            <div className="w-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <span className="text-blue-dark font-[600]">پرده نبات ساده درجه یک</span>
                </div>
                <div className="self-end">
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
                            <span className="text-blue-dark font-bold ml-1">61,600</span>
                            <span>تومان</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Tooltip arrow title="حذف">
                            <button className="text-red flex items-center justify-center w-10 bg-[#FFDFDF] rounded-lg">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </Tooltip>
                        <button
                            className="text-white bg-blue-dark flex items-center gap-2 px-3 rounded-lg justify-center text-sm">
                            <span className="hidden min-[895px]:block">
                                افزودن به سبد خرید
                            </span>
                            <i className="fa-regular fa-cart-shopping min-[895px]:hidden"></i>
                        </button>
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
                            <FastView handleClose={handleFastViewClose}/>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteProductCard;