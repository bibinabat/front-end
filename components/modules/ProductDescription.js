import Image from "next/image";
import {useState} from "react";
import {useSpring, animated} from "@react-spring/web";

const ProductDescription = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = (e) => {
        e.stopPropagation()
        setOpen(false)
        console.log(open)
    }

    const openAnimation = useSpring({
        from: {maxHeight: "350px"},
        to: {maxHeight: open ? "2000px" : "350px"},
        config: {duration: "300"}
    })

    const iconAnimation = useSpring({
        from: {
            transform: "rotate(0deg)"
        },
        to: {
            transform: open ? "rotate(180deg)" : "rotate(0deg)"
        },
        config: {duration: "120"}
    })

    return (
        <div className="mt-5 mb-5">
            <div
                className="bg-[#DBDAE3] text-blue-dark flex gap-2 items-center px-5 py-2 rounded relative overflow-hidden mb-3">
                <i className="fa-regular fa-memo text-lg"></i>
                <span className="text-lg font-[600]">توضیحات</span>
                <Image src="/images/darkblue-line.png" alt="darkblue line" fill
                       className="opacity-10 object-center object-cover pointer-events-none"/>
            </div>
            <div className="relative" onClick={handleOpen}>
                <div
                    className={`${open ? "before:opacity-0" : "cursor-pointer"} before:content-[''] before:bg-gradient-to-t before:from-[rgba(277,277,277,0.95)] before:w-full before:h-full before:block before:absolute before:rounded-3xl`}>
                    <animated.div style={openAnimation}
                                  className="bg-[#f5f5f5] px-5 lg:px-20 xl:px-44 py-5 rounded-3xl overflow-hidden">
                        <div className="text-blue-dark leading-relaxed">
                            <h2 className="text-xl font-bold mb-3">اطلاعاتی کلی راجع به خرید نبات پرده</h2>
                            <p className="mb-3">
                                نبات یکی از محصولات نام آشنا برای همه ماست که نه تنها برای مصارف خوراکی انتخاب می شود،
                                بلکه
                                به
                                عنوان یک محصول نمادین نیز استفاده گردیده و از آن در جشن های بزم و شادی و به منظور تزیین
                                سفره
                                بهره می گیرند. نبات نماد و سمبل شیرینی زندگی بوده و جای خود را در بین سفره های عقد به
                                خوبی
                                باز
                                کرده است. اما یکی از انواع این محصول که بیش از همه مورد توجه است، نبات پرده یا پرده نبات
                                است
                                ،
                                مطمئن باشید با خرید پرده نبات طعم شیرین و خاص آن هرگز از یاد و خاطره شما بیرون نمی رود.
                            </p>
                            <p className="mb-3">
                                زمانی که محصولی نهایی نبات آماده می شود، قسمت های روی نبات که دارای بلورهای درشت تر و
                                منظم
                                تری
                                هستند، جدا شده و به عنوان پرده نبات مورد استفاده قرار می گیرند؛ معمولاً ارتفاع این
                                بلورها به
                                پنج
                                سانتیمتر رسیده و لذا از نظر ظاهری، نسبت به انواع دیگر نبات، شکل متفاوت تری خواهد داشت.
                            </p>
                            <h2 className="text-xl font-bold mb-3">آشنایی با یکی از بزرگترین تولید کنندگان نبات
                                پرده</h2>
                            <p className="mb-3">
                                یزد که سابقه دیرینه ای را در حوزه تولید نبات کسب کرده است، به عنوان بزرگترین تولید
                                کنندگان
                                نبات
                                شناخته شده و تجربه دیرینه ای را در زمینه تولید انواع نبات کسب نموده است، تولید کنندگان
                                یزدی
                                از
                                مواد اولیه خالص برای تولید نبات پرده اعلا بهره برده و محصولی همراه با خلوص و کیفیت بالا
                                را
                                تولید
                                و روانه بازارهای داخلی و خارجی نموده اند.
                                کیفیت این محصول هم به همه خریداران داخلی و خریداران خارجی ثابت شده و آن را به عنوان پرده
                                نبات
                                درجه یک شناخته اند.
                            </p>
                            <h2 className="text-xl font-bold mb-3">از کجا می توانیم برای خرید پرده نبات اعلا ساده و
                                ممتاز
                                اقدام
                                نماییم؟</h2>
                            <p className="mb-3">
                                یکی از مسیرهای مناسبی که برای خرید پرده نبات، پیش روی شما خریداران عزیز قرار گرفته و می
                                توانید
                                از طریق آن اقدام نمایید، سایت بی بی نبات است که هم اکنون در این سایت قرار دارید؛ این
                                مجموعه،
                                محدودیت های زیادی را از پیش پای شما عزیزان برداشته تا بتوانید هر کجا که هستید، نسبت به
                                خرید
                                پرده
                                نبات اصل یزدی اقدام کرده و به روشی کاملاً سریع و راحت، آن را خریداری نمایید.
                            </p>
                            <h2 className="text-xl font-bold mb-3">سوالات رایج راجع به خرید پرده نبات</h2>
                            <p className="mb-3">
                                در بخش آخر می خواهیم تا سوالات مهمی که در خصوص نبات پرده از سوی برخی از خریداران پرسیده
                                می
                                شوند
                                را ذکر نماییم:
                            </p>
                            <ul className="">
                                <li className="mb-2">
                                    <span className="font-[600]">قیمت نبات پرده چقدر است؟</span>
                                    <ul className="list-disc pr-4">
                                        <li>
                                            باید این را بدانید که با توجه به بسته بندی های مختلف این محصول و همینطور
                                            کیفیت
                                            های
                                            متفاوت آن، قیمت پرده نبات دارای درجات مختلفی خواهد بود.
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-2">
                                    <span className="font-[600]">آیا پرده نبات گرم است؟</span>
                                    <ul className="list-disc pr-4">
                                        <li>
                                            بله این محصول در طی فرآیند آماده سازی، گرمای زیادی را به خود دیده و به همین
                                            دلیل
                                            از
                                            طبع کاملاً گرم و مناسبی برخوردار است.
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-2">
                                    <span className="font-[600]">مصرف پرده نبات برای چه کسانی مناسب خواهد بود؟</span>
                                    <ul className="pr-4 list-disc">
                                        <li>
                                            این محصول با توجه به طبع گرم و عالی خود، برای همه افراد، مناسب به نظر می
                                            رسد؛ به
                                            ویژه کسانی که دارای طبع و مزاج سرد هستند، لازم است تا تاکید بیشتری بر روی
                                            مصرف
                                            این
                                            محصول داشته باشند.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </animated.div>
                    <span onClick={open ? handleClose : handleOpen}
                          className="absolute right-1/2 bottom-2 flex items-center gap-2 text-cyan font-[800] text-sm translate-x-1/2 cursor-pointer">
                    {
                        open ? ("بستن") : ("مشاهده بیشتر")
                    }
                        <animated.i style={iconAnimation} className="fa-solid fa-chevron-down"></animated.i>
                </span>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;