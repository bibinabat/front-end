import Image from "next/image";

const SingleRelatedBlog = () => {
    return (
        <div>
            <div
                className="h-[140px] w-[220px] overflow-hidden rounded-xl relative before:content-[''] before:bg-black/50 before:w-full before:h-full before:block before:absolute">
                <Image src="/testImages/khz3.jpg" alt="" width={140} height={140} className="w-full "/>
            </div>
            <p>بهترین نبات ایران برای کجاست؟!</p>
        </div>
    );
};

export default SingleRelatedBlog;