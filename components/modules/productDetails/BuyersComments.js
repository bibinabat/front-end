import BuyersComment from "@/components/modules/productDetails/BuyersComment";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode, Navigation} from "swiper";
import 'swiper/swiper-bundle.min.css'

const BuyersComments = ({surveys}) => {
    return (
        <div className="w-full mx-auto mb-5">
            <div className="font-bold text-blue-dark mb-3">نظرات خریداران</div>
            <div
                className="swiper overflow-hidden max-w-[80vw] sm:max-w-[90vw] md:max-w-[47vw] lg:max-w-[50vw] xl:max-w-[60vw] 2xl:max-w-[65vw]">
                <Swiper
                    modules={[Navigation, FreeMode, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={10}
                    freeMode={true}
                    className="swiper-container"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                        1536: {
                            slidesPerView: 3
                        },
                        1700: {
                            slidesPerView: 4
                        }
                    }}
                    loop={true}
                    autoplay={true}
                >
                    {
                        surveys.data.surveys.map(survey => (
                            <SwiperSlide key={survey.id}><BuyersComment survey={survey}/></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default BuyersComments;