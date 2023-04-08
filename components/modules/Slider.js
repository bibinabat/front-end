import Image from "next/image";

import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Navigation, Autoplay} from "swiper";
import 'swiper/swiper-bundle.min.css'
import {NavBtnL, NavBtnR} from "@/components/elements/NavBtn";
import {useRef, useState} from "react";

const Slider = () => {
    const [_, setInit] = useState()

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className="row-span-2 col-span-2 flex items-center justify-center relative">
            <NavBtnR prevRef={prevRef} classes={"-right-6"}/>
            <div className="relative flex justify-center item-center overflow-hidden rounded-2xl">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current
                        }}
                        onInit={() => setInit(true)}
                    >
                        <SwiperSlide>
                            <Image src="/testImages/category-ghand.jpg" alt="banner" width={1000} height={1000}
                                   className="w-full h-full object-cover" priority/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/testImages/category-ghand.jpg" alt="banner" width={1000} height={1000}
                                   className="w-full h-full object-cover"/>
                        </SwiperSlide>
                    </Swiper>
            </div>
            <NavBtnL nextRef={nextRef} classes={"-left-6"}/>
        </div>
    );
};

export default Slider;