import Image from "next/image";
import SingleRelatedBlog from "@/components/modules/blog/SingleRelatedBlog";

const RelatedBlogs = () => {
    return (
        <div className="mt-5 flex items-center justify-center gap-5">
            <SingleRelatedBlog side="right"/>
            <Image src="/logo/bibinabat-logo.png" alt="لوگو بی بی نبات" width={140} height={140}
                   className="max-[640px]:hidden"/>
            <SingleRelatedBlog side="left"/>
        </div>
    );
};

export default RelatedBlogs;