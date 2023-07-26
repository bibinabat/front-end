import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/swiper-bundle.min.css'
import {useRef, useState} from "react";
import {NavBtnL, NavBtnR} from "@/components/elements/NavBtn";
import ProductAlbumSlider from "@/components/modules/ProductAlbumSlider";

const ProductAlbum = ({images, productSlug, categorySlug, inWatchlist}) => {
    const [_, setInit] = useState()

    const AlPrevRef = useRef(null)
    const AlNextRef = useRef(null)

    const viewSwiperRef = useRef(null)

    return (
        <div className="w-[350px] h-[350px] mb-8 md:mb-28 xl:mb-20">
            <ProductAlbumSlider images={images} setInit={setInit} viewSwiperRef={viewSwiperRef}
                                productSlug={productSlug} categorySlug={categorySlug} inWatchlist={inWatchlist}/>
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
                            images ? (
                                images.map((image, index) => (
                                    <SwiperSlide key={image.id}
                                                 onClick={() => viewSwiperRef.current.swiper.slideTo(index)}>
                                        <div className="p-2 bg-[#EFEDED] rounded-xl cursor-pointer">
                                            <Image src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${image.url}`}
                                                   alt={image.alt}
                                                   width={90} height={90}
                                                   className="rounded-lg"/>
                                        </div>
                                    </SwiperSlide>
                                ))
                            ) : (
                                <SwiperSlide>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
                <NavBtnL nextRef={AlNextRef} classes="scale-50 active:!scale-50 -left-6 !top-4"/>
            </div>
        </div>
    );
};

export default ProductAlbum;