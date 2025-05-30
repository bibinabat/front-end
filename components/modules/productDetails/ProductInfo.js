import {Dialog, Rating, SwipeableDrawer} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import ProductTypes from "@/components/modules/product/ProductTypes";
import useWindowSize from "@/hooks/useWindowSize";

const ProductInfo = ({toggleTypes, rate, brand, exists, weights, commentsCount}) => {
    const windowSize = useWindowSize()

    const router = useRouter()

    const [isTypesOpen, setIsTypesOpen] = useState(router.asPath.split("#")[1] === "product_types")

    useEffect(() => {
        const onHashChange = () => setIsTypesOpen(window.location.hash === `#product_types`)
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleTypesOpen = () => {
        window.location.hash = "#product_types"
    }

    const handleTypesClose = () => {
        window.history.back()
    }

    return (
        <div className="bg-[#f5f5f5] p-6 mr-0 md:mr-5 rounded-2xl sticky top-40 md:mb-5">
            <div className="flex items-center gap-2 mb-1">
                <i className="fa-solid fa-shop text-cyan text-xl"></i>
                <span className="text-blue-dark font-[500] text-lg">{brand}</span>
            </div>
            {brand === "بی بی نبات" && (
                <div className="flex items-center font-[500]">
                    <span className="text-[#909090] ml-2">عملکرد:</span>
                    <span className="text-cyan">عالی</span>
                </div>
            )}
            <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
            {
                rate === 0 || commentsCount === 0 ? (
                    <div onClick={() => window.location.hash = "#comment_form"}
                         className="text-blue-600 font-bold cursor-pointer mb-2">نظر دهید</div>
                ) : (
                    <div className="flex items-center mb-2">
                        <span className="font-[500] text-[#909090] ml-2">امتیاز:</span>
                        <Rating name="read-only" value={rate} readOnly
                                icon={<i className="fa-solid fa-star text-base"></i>}
                                emptyIcon={<i className="fa-duotone fa-star text-base"></i>}
                                style={{
                                    gap: "3px"
                                }}
                        />
                        <span className="text-xs whitespace-nowrap self-end mr-1 text-blue-dark font-[500]">
                            {rate}
                            <span className="mr-1 text-[#909090]">
                                ({commentsCount} نظر)
                            </span>
                        </span>
                    </div>
                )
            }
            <div className="flex items-center mb-2">
                <i className="fa-solid fa-shield-check text-[#63C94A] text-2xl ml-2"></i>
                <span className="text-blue-dark font-[600]">ضمانت اصل بودن کالا</span>
            </div>
            <div className="flex items-center">
                <i className="fa-solid fa-box text-blue-dark text-2xl ml-2"></i>
                <span className="text-blue-dark font-[600]">بازگشت 7 روزه کالا</span>
            </div>
            <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
            <div className="flex items-center gap-2 mb-2">
                {
                    exists ? (
                        <>
                            <i className="fa-solid fa-box-archive text-mustard"></i>
                            <span className="text-sm font-[600] text-[#757575]">موجود در انبار بی بی نبات</span>
                        </>
                    ) : (
                        <>
                            <i className="fa-solid fa-square-xmark text-red"></i>
                            <span className="text-sm font-[600] text-[#757575]">متاسفانه این کالا موجود نیست</span>
                        </>
                    )
                }
            </div>
            <div
                className="bg-cyan bg-opacity-10 text-cyan text-xs text-center font-[600] py-3 whitespace-nowrap px-8 rounded-lg mb-2">
                <p>
                    <i className="fa-regular fa-clock ml-1"></i>
                    زمان تحویل متناسب با تازه ترین محصول <br/> بین 1 تا 5 روز میباشد.
                </p>
            </div>
            <div
                className="bg-mustard bg-opacity-20 text-mustard text-xs text-center font-[600] py-3 whitespace-nowrap px-8 rounded-lg">
                <p>
                    <i className="fa-regular fa-truck ml-1"></i>
                    ارسال از یزد به سراسر کشور
                </p>
            </div>
            <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
            {
                exists ? (
                    <>
                        <div className="flex flex-col items-end">
                            {
                                weights[0].prices.discount && (
                                    <div className="flex items-center">
                                        <span
                                            className="font-bold line-through text-[#7C7C7C]">{weights[0].prices.real.toLocaleString()}</span>
                                        <span
                                            className="bg-red text-white rounded px-2 text-xs py-0.5 mr-1 font-bold flex items-center gap-1">
                                            {weights[0].prices.discount.percent}
                                            <i className="fa-solid fa-percent"></i>
                                        </span>
                                    </div>
                                )
                            }
                            <div className="mb-2">
                                <span className="text-blue-dark font-bold text-xl ml-1">
                                    {
                                        weights[0].prices.discount ? (
                                            weights[0].prices.discount.price.toLocaleString()
                                        ) : (
                                            weights[0].prices.real.toLocaleString()
                                        )
                                    }
                                </span>
                                <span>تومان</span>
                            </div>
                        </div>
                        <button className="bg-blue-dark w-full text-white py-2 rounded-lg relative overflow-hidden"
                                onClick={windowSize.width <= 1024 ? toggleTypes?.(true) : handleTypesOpen}>
                            <span className="z-[9] relative font-bold">افزودن به سبد خرید</span>
                            <Image src="/images/btn-bg-img.png" alt="Button background" width={500} height={100}
                                   className="absolute top-0 z-[6] w-full"/>
                        </button>
                        <Dialog
                            open={isTypesOpen}
                            onClose={handleTypesClose}
                            fullWidth={true}
                            maxWidth="xs"
                            PaperProps={{
                                sx: {
                                    borderRadius: "15px"
                                }
                            }}
                        >
                            <ProductTypes handleClose={handleTypesClose} weights={weights}/>
                        </Dialog>
                    </>
                ) : (
                    <div className="flex gap-1.5 items-center text-gray-500 font-bold">
                        <i className="fa-regular fa-circle-info text-lg"></i>
                        <span>ناموجود</span>
                    </div>
                )
            }
        </div>
    );
};

export default ProductInfo;