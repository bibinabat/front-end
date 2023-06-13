import Image from "next/image";
import {Tooltip} from "@mui/material";
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';
import FooterAccordion from "@/components/elements/FooterAccordion";

const Footer = () => {
    const handleFooterInputClick = () => {
        window.location.hash = "#login"
    }

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <footer className="mt-10 relative mb-20 lg:mb-0">
            <div className="relative">
                <Tooltip arrow title="بازگشت به بالا">
                    <button onClick={handleScrollToTop}
                            className="z-20 absolute bg-blue-dark w-10 h-10 flex items-center justify-center rounded-full right-1/2 translate-x-1/2 shadow-[0px_23px_55px_-6px_rgba(0,0,0,0.5)] -top-5">
                        <Image src="/customIcons/NavIcon.svg" alt="nav icon" width={10} height={10}
                               className="-rotate-90"/>
                    </button>
                </Tooltip>
                <div className="mx-5 md:mx-20 relative rounded-3xl overflow-hidden">
                    <div className="p-10 flex justify-center lg:justify-between bg-[#E9E9E9] rounded-3xl min-h-64">
                        <div className="hidden lg:flex lg:flex-col">
                            <span className="text-blue-dark font-[600] mb-10 text-lg">پشتیبانی</span>
                            <span className="mb-5">
                                <span className="text-[#676767] text-xl font-[500] ml-2">تلفنی:</span>
                                <span className="text-[#3C3C3C] ml-1">09131598619</span>
                                <span className="text-[#3C3C3C]">| هر روز هفته</span>
                            </span>
                            <span>
                                <span className="text-[#676767] text-xl font-[500] ml-2">ایمیل:</span>
                                <span className="text-[#3C3C3C]">bibinabat.ir@gmail.com</span>
                            </span>
                        </div>
                        <div className="flex items-center flex-col justify-center lg:ml-10">
                            <div className="grid grid-cols-2 grid-rows-2 gap-x-20 md:flex md:gap-20">
                                <div className="flex flex-col items-center gap-5 mt-2">
                                    <Image src="/images/footerImages/24-7Support.png" alt="warranty" width={55}
                                           height={100} className="w-auto h-auto"/>
                                    <span className="text-[#4E4E4E] text-center">پشتیبانی 24/7</span>
                                </div>
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/footerImages/Gift.png" alt="gift" width={45} height={100}
                                           className="w-auto"/>
                                    <span className="text-[#4E4E4E]">هدیه خرید</span>
                                </div>
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/footerImages/FastDelivery.png" alt="fast delivery" width={55}
                                           height={100} className="w-auto"/>
                                    <span className="text-[#4E4E4E]">ارسال سریع</span>
                                </div>
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/footerImages/Warranty.png" alt="warranty" width={45}
                                           height={100} className="w-auto"/>
                                    <span className="text-center text-[#4E4E4E]">7 روز ضمانت<br/> بازگشت</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src="/images/square-darkblue-pattern.png"
                           alt="banners background"
                           width={700} height={700}
                           className="h-full w-full object-cover opacity-5 pointer-events-none z-0 absolute top-0"
                           priority
                    />
                </div>
            </div>
            <div className="flex lg:hidden flex-col px-5 mt-5">
                <span className="text-blue-dark font-[600] mb-10 text-lg">پشتیبانی</span>
                <span className="mb-5">
                                <span className="text-[#676767] text-xl font-[500] ml-2">تلفنی:</span>
                                <span className="text-[#3C3C3C] ml-1">09131598619</span>
                                <span className="text-[#3C3C3C]">| هر روز هفته</span>
                            </span>
                <span>
                                <span className="text-[#676767] text-xl font-[500] ml-2">ایمیل:</span>
                                <span className="text-[#3C3C3C]">bibinabat.ir@gmail.com</span>
                            </span>
            </div>
            <div
                className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center lg:items-start justify-between mt-10 px-5 lg:px-10 xl:px-20">
                <div className="md:flex gap-x-5 gap-y-10 md:gap-10">
                    <div className="flex gap-5 mb-5 md:mb-0">
                        <div className="flex flex-col gap-5 justify-start">
                            <p className="font-bold mb-1 text-lg">دسته بندی محصولات</p>
                            <Link href="/"
                                  className="text-[#4A4A4A] hover:text-cyan">خرید نبات</Link>
                            <Link href="/" className="text-[#4A4A4A] hover:text-cyan">پرده نبات</Link>
                            <Link href="/" className="text-[#4A4A4A] hover:text-cyan">کاسه نبات</Link>
                            <Link href="/" className="text-[#4A4A4A] hover:text-cyan">خرده نبات</Link>
                            <Link href="/" className="text-[#4A4A4A] hover:text-cyan">قند</Link>
                        </div>
                        <div className="flex flex-col gap-5 justify-start">
                            <p className="font-bold mb-1 text-lg">صفحات دیگر</p>
                            <Link href="/" className="text-[#4A4A4A] hover:text-cyan">خرید عمده</Link>
                            <Link href="/" className="text-[#4A4A4A] hover:text-cyan">سوالات متداول</Link>
                            <Link href="/" className="text-[#4A4A4A] hover:text-cyan">تماس با ما</Link>
                            <Link href="/" className="text-[#4A4A4A] hover:text-cyan">ثبت شکایت</Link>
                            <Link href="/" className="text-[#4A4A4A] hover:text-cyan">قوانین و مقررات</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <FooterAccordion title="پرفروش ترین محصولات"
                                         items={[
                                             {text: "نبات", url: "/"},
                                             {text: "خرده نبات", url: "/"},
                                             {text: "کاسه نبات", url: "/"},
                                             {text: "پرده نبات", url: "/"}
                                         ]}/>
                        <FooterAccordion title="محبوب ترین محصولات"
                                         items={[
                                             {text: "نبات", url: "/"},
                                             {text: "خرده نبات", url: "/"},
                                             {text: "کاسه نبات", url: "/"},
                                             {text: "پرده نبات", url: "/"}
                                         ]}/>
                        <FooterAccordion title="جدیدترین محصولات"
                                         items={[
                                             {text: "نبات", url: "/"},
                                             {text: "خرده نبات", url: "/"},
                                             {text: "کاسه نبات", url: "/"},
                                             {text: "پرده نبات", url: "/"}
                                         ]}/>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-[#4A4A4A] font-[600]">از تخفیف ها با خبر شوید</span>
                    <div>
                        <form className="h-full flex">
                            <input
                                onClick={handleFooterInputClick}
                                className="w-64 px-3 py-2 bg-[#EEEEEE] rounded-lg text-sm font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark"
                                placeholder="شماره موبایل خود را وارد کنید"
                                readOnly
                            />
                            <button
                                className="bg-blue-dark text-white font-bold h-10 px-8 rounded-lg mr-2 hover:bg-[#30287A] transition">ثبت
                            </button>
                        </form>
                    </div>
                    <span className="text-[#4A4A4A] font-[600]">ما را در شبکه های اجتماعی دنبال کنید</span>
                    <div className="w-full flex gap-10 text-[#C4C4C4] text-3xl">
                        <Link href="https://twitter.com/share?url=https://bibinabat.com/" target="_blank">
                            <i className="fa-brands fa-twitter hover:text-[#1d9bf0]"></i>
                        </Link>
                        <Link href="https://t.me/bibinabat_support" target="_blank">
                            <i className="fa-brands fa-telegram hover:text-[#4c9ae1]"></i>
                        </Link>
                        <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://bibinabat.com/"
                              target="_blank">
                            <i className="fa-brands fa-linkedin hover:text-[#0864c1]"></i>
                        </Link>
                        <Link href="https://www.instagram.com/bibinabat.ir/" target="_blank">
                            <i className="fa-brands fa-instagram hover:text-[#ee008c]"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between mt-10 px-5 md:px-20">
                <div>
                    <p className="font-bold mb-1 text-lg">درباره ما</p>
                    <p className="max-w-xl leading-10 font-[500] text-blue-dark">
                        <span className="text-mustard">بی بی نبات </span>
                        از عرضه کنندگان مطرح نبات در کشور به شمار آمده و انواع نبات اصل و درجه یک یزدی را خدمت شما
                        خریداران عزیز ارائه خواهد کرد. این مجموعه، محصولات با کیفیت را گلچین کرده تا شما بتوانید با خرید
                        آنها، رضایت کافی را به دست آورده و در آخر، نبات های یزدی اصیل را نصیب خود کنید ، چنانچه قصد
                        <Link href="/" className="text-mustard"> خرید نبات </Link>
                        را دارید به فروشگاه مراجع نمائید.
                    </p>
                </div>
                <div className="flex gap-5">
                    <Link href="/about-us">
                        <Image src="/images/footerImages/enamad.png" alt="enamad" width={125} height={136}
                               className="w-32 h-auto"/>
                    </Link>
                    <Link href="https://gateway.zibal.ir/trustMe/bibinabat.com" target="_blank">
                        <Image src="/images/footerImages/zibal.png" alt="enamad" width={183} height={255}
                               className="w-32 h-auto"/>
                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center py-3 text-sm text-blue-dark">
                <hr className="w-80 mb-4 border-[1px] border-[#AFAFAF]"/>
                <p>
                    ©
                    تمام حقوق برای
                    <Link href="/"
                          className="text-mustard"> بی بی نبات </Link>
                    |
                    <Link href="/" className="text-mustard"> bibinabat </Link>
                    محفوظ است.
                </p>
            </div>
            <div className="overflow-hidden h-full absolute bottom-0 -z-10 w-full">
                <Image src="/images/footerImages/yazd.png" alt="Yazd" width={982} height={3072}
                       className="absolute left-[600px] scale-[7] bottom-72 lg:left-0 lg:scale-100 lg:bottom-0 lg:w-full opacity-5"/>
            </div>
        </footer>
    );
};

export default Footer;