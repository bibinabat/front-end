import Link from "next/link";
import ProductAlbum from "@/components/modules/ProductAlbum";
import ProductInfo from "@/components/modules/ProductInfo";
import SuggestedProducts from "@/components/modules/SuggestedProducts";
import ProductDescription from "@/components/modules/ProductDescription";
import ProductVideo from "@/components/modules/ProductVideo";

const ProductDetailsPage = () => {
    return (
        <div className="mt-36 md:mt-40 px-4 sm:px-7 lg:px-24">
            <div
                className="text-[#abb4bc] font-[700] text-sm flex gap-3 items-center mb-5 whitespace-nowrap overflow-auto">
                <Link href="/" className="hover:text-blue-dark text-lg"><i className="fa-solid fa-house"></i></Link>
                <i className="fa-solid fa-chevron-left text-[0.7em]"></i>
                <Link href="/product/nabat/پرده-نبات-زعفرانی" className="hover:text-blue-dark">نبات</Link>
                <i className="fa-solid fa-chevron-left text-[0.7em]"></i>
                <Link href="/product/nabat/پرده-نبات-زعفرانی" className="hover:text-blue-dark">پرده نبات</Link>
                <i className="fa-solid fa-chevron-left text-[0.7em]"></i>
                <Link href="/product/nabat/پرده-نبات-زعفرانی" className="hover:text-blue-dark">پرده نبات ساده درجه
                    یک</Link>
            </div>
            <div className="flex">
                <div>
                    <div className="flex flex-col xl:flex-row items-center">
                        <ProductAlbum images={["pm4.jpg", "pm4.jpg", "pm4.jpg", "pm4.jpg", "pm4.jpg", "pm4.jpg"]}/>
                        <div className="md:mr-5">
                            <h1 className="font-bold text-blue-dark text-2xl">پرده نبات ساده درجه یک</h1>
                            <hr className="my-5 border-[1.5px]"/>
                            <p className="text-[#909090] font-[500]">
                                <span className="font-bold">نبات پرده </span>
                                را می توان یکی از انواع نبات به شمار آورد که در قطب تولید نبات یعنی یزد تولید شده و از
                                کیفیت
                                بی نظیری برخوردار می باشد. لازم به ذکر است این محصول، تحت عناوین دیگر مثل پرده نبات نیز
                                شناخته شده و از القابی مانند الماس نبات هم برخوردار می باشد.
                            </p>
                            <hr className="my-5 border-[1.5px]"/>
                            <div className="flex gap-10 mr-5 text-sm mb-8">
                                <div>
                                    <span className="ml-2 font-[600] text-[#909090]">وزن:</span>
                                    <span className="font-bold text-blue-dark">هر بسته 1 کیلوگرم</span>
                                </div>
                                <div>
                                    <span className="ml-2 font-[600] text-[#909090]">برند:</span>
                                    <span className="font-bold text-blue-dark">بی بی نبات</span>
                                </div>
                            </div>
                            <div className="p-4 bg-[#EEF9EB] inline-block text-sm text-[#63C94A] rounded-xl mb-3">
                                <span className="font-bold">توجه!</span>
                                <p className="font-[500]">کلیه محصولات ارائه شده توسط بی بی نبات کاملا با کیفیت و اصیل
                                    میباشد.</p>
                            </div>
                        </div>
                        <div className="md:hidden w-full">
                            <ProductInfo noButton={true}/>
                        </div>
                    </div>
                    <ProductVideo/>
                    <ProductDescription/>
                </div>
                <div className="hidden md:block">
                    <ProductInfo/>
                </div>
            </div>
            <SuggestedProducts title="محصولات مشابه"/>
        </div>
    );
};

export default ProductDetailsPage;