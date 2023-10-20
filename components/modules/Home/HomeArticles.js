import HomeSingleArticle from "@/components/modules/Home/HomeSingleArticle";

const HomeArticles = () => {
    return (
        <div className="px-0 2xl:px-32 px-4 md:px-10">
            <h2 className="font-bold text-3xl mb-2">مقالات</h2>
            <div className="w-full overflow-x-scroll home-articles">
                <div className="flex gap-8">
                    <HomeSingleArticle/>
                    <HomeSingleArticle/>
                    <HomeSingleArticle/>
                    <HomeSingleArticle/>
                    <HomeSingleArticle/>
                </div>
            </div>
        </div>
    );
};

export default HomeArticles;