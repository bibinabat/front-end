import {NavBtnL, NavBtnR} from "@/components/elements/NavBtn";
import {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation} from "swiper";
import ProductCard from "@/components/modules/product/ProductCard";
import 'swiper/swiper-bundle.min.css'

const sample = {
    "id": 14,
    "title": "پرده نبات ساده",
    "slug": "pp",
    "exists": true,
    "rate": 4.0,
    "comments_count": 6,
    "in_watchlist": true,
    "main_category": {
        "id": 3,
        "title": "نبات 🥇",
        "slug": "nabat",
        "description": "",
        "created_date": "1402/3/31 19:30:46"
    },
    "sub_category": {
        "id": 7,
        "title": "پرده نبات",
        "slug": "1",
        "description": "",
        "created_date": "1402/3/31 19:31:39"
    },
    "brand": {
        "id": 2,
        "title": "بی بی نبات",
        "rate": 0.4,
        "slug": "1",
        "description": "",
        "created_date": "1402/3/31 19:30:25"
    },
    "seo": {
        "title": null,
        "description": null
    },
    "price": {
        "real": 68000,
        "discount": {
            "percent": 20.0,
            "price": 54400,
            "expire_date": null
        }
    },
    "weights": [
        {
            "id": 26,
            "size": "یک کیلویی",
            "weight": 1000,
            "slug": "1",
            "count": 99998,
            "exists": true,
            "sold_count": 2,
            "created_date": "1402/3/31 21:53:52",
            "updated_date": "1402/4/19 17:34:44",
            "prices": {
                "real": 68000,
                "discount": {
                    "percent": 20.0,
                    "price": 54400,
                    "expire_date": null
                }
            },
            "included_costs": {
                "shipping": 26000,
                "weight": 7000
            },
            "images": [
                {
                    "id": 34,
                    "url": "/media/public/products_categories/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA%20%D8%B3%D8%A7%D8%AF%D9%87/%D9%BE%D8%B1%D8%AF%D9%87_%D9%86%D8%A8%D8%A7%D8%AA_%D8%B3%D8%A7%D8%AF%D9%87556599065480.webp",
                    "alt": "پرده نبات ساده",
                    "title": "پرده نبات ساده"
                },
                {
                    "id": 35,
                    "url": "/media/public/products_categories/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA%20%D8%B3%D8%A7%D8%AF%D9%87/%D9%BE%D8%B1%D8%AF%D9%87_%D9%86%D8%A8%D8%A7%D8%AA_%D8%B3%D8%A7%D8%AF%D9%87_%D8%AF%D8%B1%D8%AC%D9%87_%DB%8C%DA%A93368838234.webp",
                    "alt": "پرده نبات ساده درجه یک",
                    "title": "پرده نبات ساده درجه یک"
                }
            ]
        },
        {
            "id": 25,
            "size": "دو کیلویی",
            "weight": 2000,
            "slug": "2",
            "count": 99998,
            "exists": true,
            "sold_count": 2,
            "created_date": "1402/3/31 21:53:09",
            "updated_date": "1402/5/24 16:37:17",
            "prices": {
                "real": 128000
            },
            "included_costs": {
                "shipping": 26000,
                "weight": 14000
            },
            "images": [
                {
                    "id": 32,
                    "url": "/media/public/products_categories/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA%20%D8%B3%D8%A7%D8%AF%D9%87/%D9%BE%D8%B1%D8%AF%D9%87_%D9%86%D8%A8%D8%A7%D8%AA_%D8%B3%D8%A7%D8%AF%D9%87_%D8%A7%D8%B9%D9%84%D8%A7894721068978.webp",
                    "alt": "پرده نبات ساده اعلا",
                    "title": "پرده نبات ساده اعلا"
                },
                {
                    "id": 33,
                    "url": "/media/public/products_categories/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA%20%D8%B3%D8%A7%D8%AF%D9%87/%D9%BE%D8%B1%D8%AF%D9%87_%D9%86%D8%A8%D8%A7%D8%AA_%D8%B3%D8%A7%D8%AF%D9%87267820340808.webp",
                    "alt": "پرده نبات ساده",
                    "title": "پرده نبات ساده"
                }
            ]
        }
    ],
    "image": {
        "id": 34,
        "url": "/media/public/products_categories/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA/%D9%BE%D8%B1%D8%AF%D9%87%20%D9%86%D8%A8%D8%A7%D8%AA%20%D8%B3%D8%A7%D8%AF%D9%87/%D9%BE%D8%B1%D8%AF%D9%87_%D9%86%D8%A8%D8%A7%D8%AA_%D8%B3%D8%A7%D8%AF%D9%87556599065480.webp",
        "alt": "پرده نبات ساده",
        "title": "پرده نبات ساده"
    }
}

const RelatedProducts = () => {
    const [_, setInit] = useState()

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className="relative mt-10 w-[300px] mb-10">
            <NavBtnR prevRef={prevRef} classes={"right-0"}/>
            <Swiper
                modules={[Navigation, FreeMode]}
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                onInit={() => setInit(true)}
            >
                <SwiperSlide><ProductCard data={sample}/></SwiperSlide>
                <SwiperSlide><ProductCard data={sample}/></SwiperSlide>
                <SwiperSlide><ProductCard data={sample}/></SwiperSlide>
            </Swiper>
            <NavBtnL nextRef={nextRef} classes={"left-0"}/>
        </div>
    );
};

export default RelatedProducts;