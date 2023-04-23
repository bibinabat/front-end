import Image from "next/image";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/swiper-bundle.min.css'
import {useRef, useState} from "react";
import {NavBtnL, NavBtnR} from "@/components/elements/NavBtn";
import {Tooltip} from "@mui/material";

const ProductAlbum = ({images}) => {
    const [_, setInit] = useState()

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    const AlPrevRef = useRef(null)
    const AlNextRef = useRef(null)

    const viewSwiperRef = useRef(null)

    return (
        <div className="w-[350px] h-[350px] mb-8 md:mb-28 xl:mb-20">
            <div className="bg-[#EFEDED] p-6 rounded-2xl relative">
                <NavBtnR prevRef={prevRef} classes="right-0"/>
                <div className="rounded-xl overflow-hidden">
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
                            images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={`/testImages/${image}`} alt="test" width={300} height={300}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <NavBtnL nextRef={nextRef} classes="left-0"/>
                <div
                    className="text-[#9E9E9E] flex justify-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-3 z-10">
                    <Tooltip title="اضافه به علاقه مندی ها" arrow>
                        <button
                            className="h-11 w-11 bg-white rounded-xl flex items-center justify-center shadow-[0px_5px_43px_-6px_rgba(0,0,0,0.3)] transition hover:text-red">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </Tooltip>
                    <Tooltip arrow title="اشتراک گذاری">
                        <button
                            className="h-11 w-11 bg-white rounded-xl flex items-center justify-center shadow-[0px_5px_43px_-6px_rgba(0,0,0,0.3)] transition hover:text-blue-dark">
                            <i className="fa-solid fa-share-nodes"></i>
                        </button>
                    </Tooltip>
                </div>
            </div>
            <div className="mt-3 w-[325px] mx-auto relative hidden md:block">
                <NavBtnR prevRef={AlPrevRef} classes="scale-50 active:!scale-50 -right-6 !top-4"/>
                <div className="">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={8}
                        slidesPerView={4}
                        navigation={{
                            prevEl: AlPrevRef.current,
                            nextEl: AlNextRef.current
                        }}
                        onInit={() => setInit(true)}
                    >
                        {
                            images.map((image, index) => (
                                <SwiperSlide key={index} onClick={() => viewSwiperRef.current.swiper.slideTo(index)}>
                                    <div className="p-2 bg-[#EFEDED] rounded-xl cursor-pointer">
                                        <Image src={`/testImages/${image}`} alt="test" width={90} height={90}
                                               className="rounded-lg"/>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <NavBtnL nextRef={AlNextRef} classes="scale-50 active:!scale-50 -left-6 !top-4"/>
            </div>
        </div>
    );
};

export default ProductAlbum;