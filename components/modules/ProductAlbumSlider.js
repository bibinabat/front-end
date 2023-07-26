import {NavBtnL, NavBtnR} from "@/components/elements/NavBtn";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";
import {Dialog, Tooltip} from "@mui/material";
import Share from "@/components/modules/Share";
import {useRef, useState} from "react";
import useAuthState from "@/hooks/useAuth";
import {toast} from "react-toastify";
import Cookies from "js-cookie";

const ProductAlbumSlider = ({setInit, viewSwiperRef, images, productSlug, categorySlug, inWatchlist}) => {
    const {isLoggedIn} = useAuthState()

    const [isShareOpen, setIsShareOpen] = useState(false)
    const [isInWatchlist, setIsInWatchlist] = useState(inWatchlist)
    const [isLoading, setIsLoading] = useState(false)

    const handleWatchlistToggle = () => {
        if (isLoggedIn) {
            setIsLoading(true)
            if (isInWatchlist) {
                fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/`, {
                    method: "DELETE",
                    body: JSON.stringify({
                        "product_slug": productSlug
                    }),
                    headers: {
                        "Authorization": Cookies.get("Authorization"),
                        "Content-Type": "Application/json"
                    },
                    credentials: "include"
                })
                    .then(response => response.json())
                    .then(data => {
                        setIsLoading(false)
                        if (data.data.messages && data.data.messages.success) {
                            setIsInWatchlist(false)
                            toast.info(data.data.messages.success[0])
                        } else {
                            toast.error("مشکلی در انجام عملیات رخ داده است")
                        }
                    })
                    .catch(err => {
                        setIsLoading(false)
                        console.log(err)
                        toast.error("مشکلی در انجام عملیات رخ داده است")
                    })
            } else {
                fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/`, {
                    method: "PUT",
                    body: JSON.stringify({
                        "product_slug": productSlug
                    }),
                    headers: {
                        "Authorization": Cookies.get("Authorization"),
                        "Content-Type": "Application/json"
                    },
                    credentials: "include"
                })
                    .then(response => response.json())
                    .then(data => {
                        setIsLoading(false)
                        if (data.data.messages && data.data.messages.success) {
                            setIsInWatchlist(true)
                            toast.info(data.data.messages.success[0])
                        } else {
                            toast.error("مشکلی در انجام عملیات رخ داده است")
                        }
                    })
                    .catch(err => {
                        setIsLoading(false)
                        console.log(err)
                        toast.error("مشکلی در انجام عملیات رخ داده است")
                    })
            }
        } else {
            toast.info("لطفا ابتدا وارد حساب کاربری خود شوید")
            window.location.hash = "#login"
        }
    }

    const handleShareOpen = () => {
        setIsShareOpen(true)
    }

    const handleShareClose = () => {
        setIsShareOpen(false)
    }

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className="bg-[#EFEDED] p-6 rounded-3xl relative h-full">
            <NavBtnR prevRef={prevRef} classes="right-0"/>
            <div className="rounded-2xl overflow-hidden h-full">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }}
                    onInit={() => setInit(true)}
                    ref={viewSwiperRef}
                >
                    {
                        images ? (
                            images.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <Image src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${image.url}`} alt={image.alt}
                                           width={300}
                                           height={300}
                                           priority/>
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <div
                                    className="w-full h-full min-w-[240px] min-h-[300px] rounded-2xl flex items-center justify-center bg-gray-200 text-gray-400 text-3xl">
                                    <i className="fa-solid fa-image"></i>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            <NavBtnL nextRef={nextRef} classes="left-0"/>
            <div
                className="text-[#9E9E9E] flex justify-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-3 z-10">
                <Tooltip title={isInWatchlist ? "حذف از علاقه مندی ها" : "اضافه به علاقه مندی ها"} arrow>
                    <button
                        onClick={handleWatchlistToggle}
                        disabled={isLoading}
                        className="h-11 w-11 bg-white rounded-xl flex items-center justify-center shadow-[0px_5px_43px_-6px_rgba(0,0,0,0.3)] transition hover:text-red">
                        {
                            isLoading ? (
                                <i className="fa-duotone fa-spinner-third fa-spin text-xl text-blue-500"></i>
                            ) : (
                                <i className={`${isInWatchlist ? "fa-solid fa-heart text-red" : "fa-regular fa-heart"}`}></i>
                            )
                        }
                    </button>
                </Tooltip>
                <Tooltip arrow title="اشتراک گذاری">
                    <button
                        onClick={handleShareOpen}
                        className="h-11 w-11 bg-white rounded-xl flex items-center justify-center shadow-[0px_5px_43px_-6px_rgba(0,0,0,0.3)] transition hover:text-blue-dark">
                        <i className="fa-solid fa-share-nodes"></i>
                    </button>
                </Tooltip>
                <Dialog
                    open={isShareOpen}
                    onClose={handleShareClose}
                    fullWidth={true}
                    maxWidth="xs"
                    PaperProps={{
                        sx: {
                            borderRadius: "15px"
                        }
                    }}
                >
                    <Share handleClose={handleShareClose} productSlug={productSlug} categorySlug={categorySlug}/>
                </Dialog>
            </div>
        </div>
    );
};

export default ProductAlbumSlider;