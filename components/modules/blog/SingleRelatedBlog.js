import Image from "next/image";
import Link from "next/link";

const SingleRelatedBlog = ({side}) => {
    return (
        <Link href="/blog/hi">
            <div
                className="max-h-[170px] max-w-[220px] sm:w-[220px] flex items-end overflow-hidden rounded-xl relative before:content-[''] before:bg-black/50 before:w-full before:h-full before:block before:absolute">
                <span
                    className="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 text-white flex items-center justify-center h-10 w-10 rounded-full bg-black/60 text-sm">
                    {
                        side === "right" ?
                            <i className="fa-solid fa-chevron-right"></i> :
                            <i className="fa-solid fa-chevron-left"></i>
                    }
                </span>
                <Image src="/testImages/khz3.jpg" alt="" width={170} height={170} className="w-full"/>
            </div>
            <p className="text-sm mt-1 font-[600] text-gray-700">بهترین نبات ایران برای کجاست؟!</p>
        </Link>
    );
};

export default SingleRelatedBlog;