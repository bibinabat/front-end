import {useState} from "react";
import {useSpring, animated} from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

const SidebarAccordion = (props) => {
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
        <animated.div style={openAnimation} className="w-full overflow-hidden mb-2">
            <div onClick={toggleHandler} className="flex items-center justify-between bg-white px-3 py-2 rounded-lg">
                <p>{props.title}</p>
                <animated.i style={iconAnimation}>
                    <Image src="/customIcons/NavIcon.svg" alt="nav icon" width={10} height={10}/>
                </animated.i>
            </div>
            <div className="mr-7 flex flex-col">
                {
                    props.items.map((item, index) => (
                        <Link href={item.url} key={index}
                              className="bg-white mt-2 px-2 py-1 rounded-md"
                              onClick={props.toggleSidebar(false)}>{item.text}</Link>
                    ))
                }
            </div>
        </animated.div>
    );
};

export default SidebarAccordion;