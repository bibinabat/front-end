import {useState} from "react";
import {useSpring, animated} from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

const FooterAccordion = (props) => {
    const [open, setOpen] = useState(false)

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
        <animated.div style={openAnimation} className="w-full overflow-hidden mb-2 ">
            <div onClick={toggleHandler}
                 className="flex items-center gap-20 justify-between bg-blue-dark text-white px-3 py-2 rounded text-sm cursor-pointer">
                <p>{props.title}</p>
                <animated.i style={iconAnimation}>
                    <Image src="/customIcons/NavIcon.svg" alt="nav icon" width={10} height={10}/>
                </animated.i>
            </div>
            <div className="flex flex-col">
                {
                    props.items.map((item, index) => (
                        <Link key={index} href={item.url}
                              className="bg-white text-sm mt-2 px-2 py-1 rounded-md">{item.text}</Link>
                    ))
                }
            </div>
        </animated.div>
    );
};

export default FooterAccordion;