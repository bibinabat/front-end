import Image from "next/image";
import SingleRelatedBlog from "@/components/modules/blog/SingleRelatedBlog";

const RelatedBlogs = () => {
    return (
        <div className="mt-5 flex items-center justify-center gap-5">
            <SingleRelatedBlog/>
            <Image src="/logo/bibinabat-logo.png" alt="لوگو بی بی نبات" width={140} height={140}/>
            <SingleRelatedBlog/>
        </div>
    );
};

export default RelatedBlogs;