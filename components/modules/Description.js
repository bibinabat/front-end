import Image from "next/image";
import {useEffect, useState} from "react";
import {useSpring, animated} from "@react-spring/web";

const Description = ({content, productTitle, faqs}) => {
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
                className="bg-[#DBDAE3] text-[#2D2D2D] flex gap-2 items-center px-5 py-2 rounded relative overflow-hidden mb-3">
                <i className="fa-regular fa-memo text-lg text-blue-dark"></i>
                <span className="text-lg font-bold">توضیحات</span>
                <Image src="/images/darkblue-line.png" alt="darkblue line" fill
                       className="opacity-10 object-center object-cover pointer-events-none"
                       sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 70vw"/>
            </div>
            <div className="relative" onClick={handleOpen}>
                <div
                    className={`${open ? "before:opacity-0" : "cursor-pointer"} before:content-[''] before:bg-gradient-to-t before:from-[rgba(277,277,277,0.95)] before:w-full before:h-full before:block before:absolute before:rounded-3xl`}>
                    <animated.div style={openAnimation}
                                  className="bg-[#f5f5f5] px-5 lg:px-20 xl:px-44 py-5 rounded-3xl overflow-hidden">
                        <div className="text-blue-dark leading-relaxed text-justify">
                            <div dangerouslySetInnerHTML={{__html: content}} className="descriptionContent"></div>
                            {
                                faqs && faqs.length ? (
                                    <>
                                        <h2 className="text-xl font-bold mb-3">سوالات پرتکرار راجع به
                                            خرید {productTitle}</h2>
                                        <p className="mb-3">
                                            در بخش آخر می خواهیم تا سوالات مهمی که در خصوص {productTitle} از سوی برخی از
                                            خریداران
                                            پرسیده
                                            می
                                            شوند
                                            را ذکر نماییم:
                                        </p>
                                        <ul className="">
                                            {
                                                faqs.map(faq => (
                                                    <li key={faq.id} className="mb-2">
                                                    <span className="font-[600]"
                                                          dangerouslySetInnerHTML={{__html: faq.question}}></span>
                                                        <ul className="list-disc pr-4">
                                                            <li dangerouslySetInnerHTML={{__html: faq.answer}}></li>
                                                        </ul>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </>
                                ) : null
                            }
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

export default Description;