import {useSpring, animated} from "@react-spring/web";
import {useState} from "react";
import Link from "next/link";

export const blogList = [
    "نبات چیست؟",
    "بهترین نبات ایران برای کجاست!؟",
    "خرید لذت بخش را با محبوبترین برند نبات را تجربه کنید",
    "با طرز تهیه نبات یزدی آشنا شوید",
    "خواص نبات یزدی برای سلامتی"
]

const BlogsList = () => {
    const [open, setOpen] = useState(false)

    const openAnimation = useSpring({
        from: {opacity: "0", maxHeight: "130px"},
        to: {opacity: "1", maxHeight: open ? "300" : "130px"},
        config: {duration: "300"}
    })

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div className="relative">
            <animated.div style={openAnimation} className="bg-gray-100 px-8 py-5 rounded-3xl overflow-hidden">
                <span className="block text-center text-gray-700 font-bold mb-5">فهرست مطالب</span>
                <ul className="w-60 flex flex-col items-center gap-3 text-ellipsis overflow-hidden text-sm">
                    {blogList.map((blog, index) => (
                        <Link href="/" key={index} className="line-clamp-1">
                            {blog}
                        </Link>
                    ))}
                </ul>
            </animated.div>
            {blogList.length > 2 ? (
                <button onClick={handleToggle}
                        className="rounded-full absolute -bottom-4 right-1/2 translate-x-1/2 bg-gray-50 shadow text-sm text-gray-500 font-[600] px-3 py-1">{open ? "کمتر" : "بیشتر"}</button>
            ) : null}
        </div>
    );
};

export default BlogsList;