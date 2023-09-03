import FavoritesPage from "@/components/templates/FavoritesPage";
import {NextSeo} from "next-seo";

const Favorites = () => {
    return (
        <>
            <NextSeo
                title="لیست علاقمندی ها"
                noindex={true}
                nofollow={true}
            />
            <FavoritesPage/>
        </>
    );
};

export default Favorites;