import PLPAccordion from "@/components/elements/PLPAccordion";

const PlpCategory = ({categories, closeHandler}) => {
    return (
        <div className="bg-[#f5f5f5] w-fit rounded-xl p-4 w-full">
            <span className="font-bold text-blue-dark">دسته بندی</span>
            <div className="flex flex-col gap-2 mt-3">
                {
                    categories.data.main_categories.map((category, index) => (
                        <PLPAccordion
                            closeHandler={closeHandler}
                            key={category.id}
                            url={`/product-category/${category.slug}`}
                            items={
                                category.sub_categories.map(subCategory => (
                                    {
                                        text: subCategory.title,
                                        url: `/product-category/${category.slug}/${subCategory.slug}`
                                    }
                                ))
                            }
                            title={category.title} isOpen={index === 0}/>
                    ))
                }
            </div>
        </div>
    );
};

export default PlpCategory;