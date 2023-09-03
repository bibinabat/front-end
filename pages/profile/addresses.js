import AddressesPage from "@/components/templates/AddressesPage";
import {NextSeo} from "next-seo";

const Addresses = () => {
    return (
        <>
            <NextSeo
                title="آدرس ها"
                noindex={true}
                nofollow={true}
            />
            <AddressesPage/>
        </>
    );
};

export default Addresses;