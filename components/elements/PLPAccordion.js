import {useSpring, animated} from "@react-spring/web";
import {useState} from "react";
import Link from "next/link";

const PlpAccordion = ({items, title, isOpen, url, closeHandler}) => {
    const [open, setOpen] = useState(isOpen)

    const toggleHandler = (e) => {
        setOpen(!open)
    }

    const openAnimation = useSpring({
        from: {opacity: "0", maxHeight: "40px"},
        to: {opacity: "1", maxHeight: open ? "1000px" : "40px"},
        config: {duration: "300"}
    })

    const iconAnimation = useSpring({
        from: {
            transform: "rotate(0deg)"
        },
        to: {
            transform: open ? "rotate(90deg)" : "rotate(0deg)"
        },
        config: {duration: "120"}
    })

    return (
        <animated.div style={openAnimation} className="bg-white w-full overflow-hidden rounded-lg p-2 text-blue-dark">
            <div onClick={toggleHandler} className="flex justify-between items-center gap-48 cursor-pointer">
                <p className="font-[600] whitespace-nowrap">{title}</p>
                <animated.i style={iconAnimation}
                            className="fa-solid fa-chevron-right text-xs text-gray-400"></animated.i>
            </div>
            <div className="flex flex-col font-[500]">
                <Link onClick={closeHandler} href={url}
                      className="bg-white text-sm mt-2 px-2 py-1 rounded-md border-b-2 text-gray-400">
                    مشاهده این دسته بندی
                </Link>
                {
                    items.map((item, index) => (
                        <Link onClick={closeHandler} key={index} href={item.url}
                              className="bg-white text-sm mt-2 px-2 py-1 rounded-md border-b-2">{item.text}</Link>
                    ))
                }
            </div>
        </animated.div>
    );
};

export default PlpAccordion;