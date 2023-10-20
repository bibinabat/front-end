import Image from "next/image";
import Slider from "@/components/modules/Home/Slider";
import SuggestedProducts from "@/components/modules/product/SuggestedProducts";
import MiddleBanners from "@/components/modules/Home/MiddleBanners";
import HomeArticles from "@/components/modules/Home/HomeArticles";

const HomePage = ({popularProducts, mostSaleProducts}) => {
    return (
        <div>
            <div className="w-full h-96 bg-blue-dark overflow-hidden absolute top-0 -z-10">
                <h1 className="mt-14 z-10 absolute top-32 w-full text-center md:top-36 text-white text-2xl md:text-4xl font-bold ">
                    <span className="text-mustard block md:inline">بی بی نبات </span>
                    با کیفیت ترین قند و نبات یزدی
                </h1>
                <Image src="/images/square-mustard-pattern.png"
                       alt="banners background"
                       width={700} height={700}
                       className="w-full opacity-20 lg:opacity-10 pointer-events-none z-0"
                       priority
                />
            </div>
            <div className="w-full items-center justify-center">
                <div
                    className="mt-56 bg-[#F2F2F2] mx-[20px] lg:mx-[100px] rounded-[30px] md:rounded-[50px] p-6 md:p-10 lg:grid gap-7 lg:grid-cols-3 lg:grid-rows-2">
                    <Slider/>
                    <div className="rounded-3xl overflow-hidden justify-center items-center hidden lg:flex relative">
                        <Image src="/testImages/category-ghand.jpg" alt="banner" fill
                               sizes="(min-width: 808px) 50vw, 100vw"
                               className="object-cover"/>
                    </div>
                    <div className="rounded-3xl overflow-hidden justify-center items-center hidden lg:flex relative">
                        <Image src="/testImages/category-nabat-1.jpg" alt="banner" fill
                               sizes="(min-width: 808px) 50vw, 100vw"
                               className="object-cover"/>
                    </div>
                </div>
            </div>
            <div className="pt-5 p-5 sm:p-10">
                <SuggestedProducts title="محبوب ترین ها" products={popularProducts}/>
                <MiddleBanners/>
                <SuggestedProducts title="پرفروش ترین ها" products={mostSaleProducts}/>
            </div>
            <div>
                <HomeArticles/>
            </div>
        </div>
    );
};

export default HomePage;