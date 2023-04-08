import Image from "next/image";
import Slider from "@/components/modules/Slider";
import SuggestedProducts from "@/components/modules/SuggestedProducts";
import MiddleBanners from "@/components/modules/MiddleBanners";
import HomeArticles from "@/components/modules/HomeArticles";

const HomePage = () => {
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
                       className="w-full opacity-10 pointer-events-none z-0"
                       priority
                />
            </div>
            <div className="w-full items-center justify-center">
                <div
                    className="mt-56 bg-[#F2F2F2] mx-[20px] lg:mx-[100px] rounded-[30px] md:rounded-[50px] p-6 md:p-10 lg:grid gap-7 lg:grid-cols-3 lg:grid-rows-2">
                    <Slider/>
                    <div className="bg-gray-600 rounded-3xl overflow-hidden justify-center items-center hidden lg:flex">
                        <Image src="/testImages/category-ghand.jpg" alt="banner" width={500} height={500}
                               className="w-full h-full object-cover"/>
                    </div>
                    <div className="bg-gray-600 rounded-3xl overflow-hidden justify-center items-center hidden lg:flex">
                        <Image src="/testImages/category-nabat-1.jpg" alt="banner" width={500} height={500}
                               className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            <div className="pt-5 p-5 sm:p-10">
                <SuggestedProducts title="محبوب ترین ها"/>
                <MiddleBanners/>
                <SuggestedProducts title="پرفروش ترین ها"/>
            </div>
            <div>
                <HomeArticles/>
            </div>
        </div>
    );
};

export default HomePage;