import ProductAlbumSlider from "@/components/modules/productDetails/ProductAlbumSlider";
import {useEffect, useRef, useState} from "react";
import {Dialog, Rating, Skeleton} from "@mui/material";
import {toast} from "react-toastify";
import Link from "next/link";
import ProductTypes from "@/components/modules/product/ProductTypes";
import {useRouter} from "next/router";

const FastView = ({handleClose, productId}) => {
    const [_, setInit] = useState()
    const [data, setData] = useState("loading")

    const viewSwiperRef = useRef(null)

    const [isTypesOpen, setIsTypesOpen] = useState(false)

    const handleTypesOpen = () => {
        setIsTypesOpen(true)
    }

    const handleTypesClose = () => {
        setIsTypesOpen(false)
    }

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/${productId}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(json => {
                if (json.data.product) {
                    setData(json.data.product)
                } else {
                    toast.error("مشکلی در گرفتن اطلاعات رخ داده است", {
                        icon: false,
                        closeButton: false
                    })
                }
            })
            .catch(err => {
                console.log(err)
                toast.error("مشکلی در گرفتن اطلاعات رخ داده است", {
                    icon: false,
                    closeButton: false
                })
            })
    }, [productId])

    const [images, setImages] = useState(null)

    useEffect(() => {
        if (data.weights) {
            setImages([].concat(...data.weights.map(weight => (weight.images))))
        }
    }, [data])

    return (
        <div className="p-5">
            <div className="w-full">
                <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                   onClick={handleClose}></i>
            </div>
            <div className="p-3 flex flex-col md:flex-row items-center gap-5">
                <div className="w-[290px] min-w-[290px] h-[290px]">
                    <ProductAlbumSlider
                        images={
                            images && images.length ? (
                                images
                            ) : null
                        }
                        setInit={setInit} viewSwiperRef={viewSwiperRef}
                        categorySlug={data !== "loading" ? data.product.main_category.slug : ""}
                        productSlug={data !== "loading" ? data.product.slug : ""}/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center mb-3">
                        {
                            data === "loading" ? (
                                <Skeleton animation="wave" variant="rectangular" width={210} height={20}/>
                            ) : (
                                <Link href={`/product/${data.product.main_category.slug}/${data.product.slug}`}
                                      className="text-blue-dark font-bold text-base sm:text-xl">{data.product.title}</Link>
                            )
                        }
                        {
                            data === "loading" ? (
                                <Skeleton animation="wave" variant="rectangular" width={150} height={20}/>
                            ) : (
                                data.product.rate === 0 ? (
                                    <Link
                                        href={`/product/${data.product.main_category.slug}/${data.product.slug}#comment_form`}
                                        className="text-blue-600 font-bold">نظر دهید</Link>
                                ) : (
                                    <div className="flex items-center">
                                        <div className="items-center hidden min-[835px]:flex">
                                            <Rating name="read-only" value={data.product.rate} readOnly/>
                                        </div>
                                        <i className="fa-solid fa-star text-mustard min-[835px]:hidden"></i>
                                        <span
                                            className="text-xs whitespace-nowrap self-end mr-1 text-blue-dark font-[500]">
                                        {data.product.rate}
                                            <span className="mr-1 text-[#909090]">
                                            ({data.product.comments_count} نظر)
                                        </span>
                                    </span>
                                    </div>
                                )
                            )
                        }
                    </div>
                    {
                        data === "loading" ? (
                            <div className="flex flex-col gap-2">
                                <Skeleton animation="wave" variant="rectangular" height={20}/>
                                <Skeleton animation="wave" variant="rectangular" height={20}/>
                                <Skeleton animation="wave" variant="rectangular" height={20}/>
                                <Skeleton animation="wave" variant="rectangular" width={200} height={20}/>
                            </div>
                        ) : (
                            <p className="text-[#909090] font-[500] mb-3"
                               dangerouslySetInnerHTML={{__html: data.product.short_description}}></p>
                        )
                    }
                    <div className="flex flex-col sm:flex-row sm:gap-5 text-sm items-center">
                        <div className="flex items-center">
                            <i className="fa-solid fa-shield-check text-[#63C94A] text-2xl ml-2"></i>
                            <span className="text-blue-dark font-[600]">ضمانت اصل بودن کالا</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-box text-blue-dark text-2xl ml-2"></i>
                            <span className="text-blue-dark font-[600]">بازگشت 7 روزه کالا</span>
                        </div>
                    </div>
                    {
                        data === "loading" ? null : (
                            <div className="flex flex-col items-end">
                                {
                                    data.weights[0].prices.discount ? (
                                        <>
                                            <div className="flex items-center">
                                                <span
                                                    className="font-bold line-through text-[#7C7C7C]">{data.weights[0].prices.real.toLocaleString()}</span>
                                                <span
                                                    className="bg-red text-white rounded px-2 text-xs py-0.5 mr-1 font-bold flex items-center gap-1">
                                                    {data.weights[0].prices.discount.percent}
                                                    <i className="fa-solid fa-percent"></i>
                                                </span>
                                            </div>
                                        </>
                                    ) : null
                                }
                                <div className="mb-2">
                                    <span className="text-blue-dark font-bold text-xl ml-1">
                                        {
                                            data.weights[0].prices.discount ? (
                                                data.weights[0].prices.discount.price.toLocaleString()
                                            ) : (
                                                data.weights[0].prices.real.toLocaleString()
                                            )
                                        }
                                    </span>
                                    <span>تومان</span>
                                </div>
                            </div>
                        )
                    }
                    {
                        data === "loading" ? null : data.product.exists ? (
                            <>
                                <button className="bg-blue-dark w-full text-white rounded-lg py-2 mt-2"
                                        onClick={handleTypesOpen}>
                                    افزودن به سبد خرید
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
                                    <ProductTypes handleClose={handleTypesClose} weights={data.weights}/>
                                </Dialog>
                            </>
                        ) : (
                            <button className="bg-gray-400 w-full text-white rounded-lg py-2 mt-2" disabled>
                                ناموجود
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FastView;