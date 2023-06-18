import Link from "next/link";
import FavoriteProductCard from "@/components/modules/FavoriteProductCard";

const FavoritesPage = () => {
    return (
        <div className="overflow-hidden rounded-3xl border-[1.5px] flex-1">
            <div className={`p-5 sm:p-10 rounded-3xl h-full overflow-auto`}>
                <div className="flex gap-3 md:gap-0 items-center mb-5">
                    <Link href="/profile">
                        <i className="fa-solid fa-circle-chevron-right text-2xl text-gray-300 md:hidden"></i>
                    </Link>
                    <h1 className="text-lg font-bold text-blue-dark">لیست علاقه مندی ها</h1>
                </div>
                <div className="flex justify-center mb-5">
                    <div
                        className="shadow-[0px_3px_15px_-3px_rgba(0,0,0,0.1)] flex gap-5 px-5 py-4 rounded-full font-bold">
                        <span className="text-mustard">
                            محصولات
                        </span>
                        {/*<span className="text-blue-dark">*/}
                        {/*    مقالات*/}
                        {/*</span>*/}
                    </div>
                </div>
                <div className="grid min-[1420px]:grid-cols-2 gap-3">
                    <FavoriteProductCard discount={2}/>
                    <FavoriteProductCard/>
                    <FavoriteProductCard/>
                    <FavoriteProductCard/>
                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;