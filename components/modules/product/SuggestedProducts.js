import Image from "next/image";
import ProductCard from "@/components/modules/product/ProductCard";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Navigation, FreeMode} from "swiper";
import 'swiper/swiper-bundle.min.css'
import {NavBtnL, NavBtnR} from "@/components/elements/NavBtn";
import {useRef, useState} from "react";

const SuggestedProducts = ({title, products, productId}) => {
    const [_, setInit] = useState()

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className="w-full">
            <div
                className="flex bg-blue-dark items-center justify-between rounded-xl text-white relative overflow-hidden -z-20 mb-3">
                <div className="py-3 px-5 sm:px-10 items-center flex w-full justify-between">
                    <span className="font-bold text-lg">
                        {title}
                    </span>
                    <div className="flex gap-3">
                        مشاهده همه
                        <Image src="/customIcons/NavIcon.svg" alt="nav icon" width={10} height={10}
                               className="-scale-x-100"/>
                    </div>
                </div>
                <Image src="/images/title-bar-img.png" alt="tile bar image" width="700" height="100"
                       className="absolute -z-10 w-full opacity-25"/>
            </div>
            <div className="px-5 relative">
                <NavBtnR prevRef={prevRef} classes={"right-5"}/>
                <Swiper
                    modules={[Navigation, FreeMode]}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                        1536: {
                            slidesPerView: 5
                        }
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }}
                    onInit={() => setInit(true)}
                >
                    {
                        products ? products.data.products.map(product => {
                            if (product.exists && productId !== product.id) {
                                return (
                                    <SwiperSlide key={product.id}><ProductCard data={product}/></SwiperSlide>
                                )
                            }
                        }) : null
                    }
                </Swiper>
                <NavBtnL nextRef={nextRef} classes={"left-5"}/>
            </div>
        </div>
    );
};

export default SuggestedProducts;