import BlogsList from "@/components/modules/blog/BlogsList";
import RelatedProducts from "@/components/modules/blog/RelatedProducts";
import Social from "@/components/modules/layout/Social";
import {useCommunication} from "@/contexts/CommunicationContext";

const BlogAside = () => {
    const {communicationWays} = useCommunication()

    return (
        <div className="mr-5 h-fit sticky top-40 hidden lg:block">
            <BlogsList/>
            <RelatedProducts/>
            <Social communicationWays={communicationWays}/>
        </div>
    );
};

export default BlogAside;