import PlpCategory from "@/components/modules/PLPCategory";
import Sorting from "@/components/modules/Sorting";
import {SwipeableDrawer} from "@mui/material";
import React, {useState} from "react";
import ProductCard from "@/components/modules/ProductCard";
import useWindowSize from "@/hooks/useWindowSize";
import MobileProductCard from "@/components/modules/MobileProductCard";
import Description from "@/components/modules/Description";

const ProductListPage = () => {
    const windowSize = useWindowSize()

    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const toggleCategory = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setIsCategoryOpen(open)
    }

    return (
        <div className="mt-36 md:mt-48 px-3 sm:px-7 xl:px-20">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="">
                    <div className="flex items-center justify-center gap-3 lg:mb-5">
                        <h1 className="text-2xl font-bold text-blue-dark">خرید نبات</h1>
                        <span className="text-sm font-[600]">(25 محصول)</span>
                    </div>
                    <div className="hidden lg:block sticky top-40">
                        <PlpCategory/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between lg:justify-center">
                        <div className="flex items-center gap-1 font-bold lg:hidden cursor-pointer"
                             onClick={toggleCategory(true)}>
                            <i className="fa-regular fa-list-tree"></i>
                            <span>دسته بندی</span>
                        </div>
                        <SwipeableDrawer
                            anchor="bottom"
                            open={isCategoryOpen}
                            onClose={toggleCategory(false)}
                            onOpen={toggleCategory(true)}
                            PaperProps={{
                                sx: {
                                    borderTopLeftRadius: "20px",
                                    borderTopRightRadius: "20px"
                                }
                            }}
                        >
                            <div className="my-2 flex items-center justify-center flex-col">
                                <hr className="border-[3px] border-[#939393] w-8 rounded-full"/>
                            </div>
                            <PlpCategory/>
                        </SwipeableDrawer>
                        <Sorting/>
                    </div>
                    {
                        windowSize.width >= 640 && (
                            <div className="flex flex-wrap gap-6 justify-center mt-5">

                            </div>
                        )
                    }
                    {
                        windowSize.width < 640 && (
                            <div className="flex flex-wrap gap-3 justify-center mt-5">
                                <MobileProductCard discount={20}/>
                                <MobileProductCard/>
                                <MobileProductCard/>
                                <MobileProductCard/>
                                <MobileProductCard/>
                                <MobileProductCard/>
                                <MobileProductCard/>
                                <MobileProductCard/>
                            </div>
                        )
                    }
                </div>
            </div>
            <Description/>
        </div>
    );
};

export default ProductListPage;