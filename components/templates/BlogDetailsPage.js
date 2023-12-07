import BlogContent from "@/components/modules/blog/BlogContent";
import RelatedBlogs from "@/components/modules/blog/RelatedBlogs";
import BlogAside from "@/components/modules/blog/BlogAside";

const BlogDetailsPage = () => {
    return (
        <div className="mt-44 md:mt-56 px-3 sm:px-7 lg:px-20 max-w-screen-2xl mx-auto">
            <div className="flex">
                <BlogContent/>
                <BlogAside/>
            </div>
        </div>
    );
};

export default BlogDetailsPage;