import Link from "next/link";
import ProductAlbum from "@/components/modules/ProductAlbum";
import ProductInfo from "@/components/modules/ProductInfo";
import SuggestedProducts from "@/components/modules/SuggestedProducts";
import Description from "@/components/modules/Description";
import ProductVideo from "@/components/modules/ProductVideo";
import MobileAddToCart from "@/components/modules/MobileAddToCart";
import Comments from "@/components/modules/Comments";
import {SwipeableDrawer} from "@mui/material";
import {useEffect, useState} from "react";
import SingleProductType from "@/components/modules/SingleProductType";
import useWindowSize from "@/hooks/useWindowSize";

const ProductDetailsPage = ({data, surveys, comments, sameProducts}) => {
    const windowSize = useWindowSize()

    const [isMobileTypesOpen, setIsMobileTypesOpen] = useState(false)
    const [images, setImages] = useState(null)

    useEffect(() => {
        if (data.weights) {
            setImages([].concat(...data.weights.map(weight => (weight.images))))
        }
    }, [data])

    const toggleTypes = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setIsMobileTypesOpen(open)
    }

    return (
        <>
            <div className="mt-5 lg:mt-40 px-3 sm:px-7 lg:px-20">
                <div
                    className="text-[#abb4bc] font-[700] text-sm flex gap-3 items-center mb-5 whitespace-nowrap overflow-auto">
                    <Link href="/" className="hover:text-blue-dark text-lg"><i className="fa-solid fa-house"></i></Link>
                    <i className="fa-solid fa-chevron-left text-[0.7em]"></i>
                    <Link href={`/product-category/${data.product.main_category.slug}`}
                          className="hover:text-blue-dark">
                        {data.product.main_category.title}
                    </Link>
                    <i className="fa-solid fa-chevron-left text-[0.7em]"></i>
                    <Link
                        href={`/product-category/${data.product.main_category.slug}/${data.product.sub_category.slug}`}
                        className="hover:text-blue-dark">
                        {data.product.sub_category.title}
                    </Link>
                    <i className="fa-solid fa-chevron-left text-[0.7em]"></i>
                    <span className="hover:text-blue-dark">
                        {data.product.title}
                    </span>
                </div>
                <div className="flex">
                    <div>
                        <div className="flex flex-col xl:flex-row items-center">
                            <ProductAlbum images={
                                images && images.length ? (
                                    images
                                ) : null
                            } categorySlug={data.product.main_category.slug} productSlug={data.product.slug}
                                          inWatchlist={data.product.in_watchlist}/>
                            <div className="md:mr-5">
                                <h1 className="font-bold text-blue-dark text-2xl">{data.product.title}</h1>
                                <hr className="my-5 border-[1.5px]"/>
                                <div className="text-[#909090] font-[500]"
                                     dangerouslySetInnerHTML={{__html: data.product.short_description}}></div>
                                <hr className="my-5 border-[1.5px]"/>
                                <div className="flex gap-10 mr-5 text-sm mb-8">
                                    <div>
                                        <span className="ml-2 font-[600] text-[#909090]">وزن:</span>
                                        <div className="font-bold inline-flex gap-1 text-blue-dark">
                                            <span>بسته های</span>
                                            {
                                                data.weights.length === 1 ? (
                                                    data.weights[0].size
                                                ) : (
                                                    data.weights.map((weight, index) => (
                                                        <>
                                                            <span>{weight.size}</span>
                                                            {index !== data.weights.length - 1 && <span>و</span>}
                                                        </>
                                                    ))
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <span className="ml-2 font-[600] text-[#909090]">برند:</span>
                                        <span className="font-bold text-blue-dark">{data.product.brand.title}</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-[#EEF9EB] inline-block text-sm text-[#63C94A] rounded-xl mb-3">
                                    <span className="font-bold">توجه!</span>
                                    <p className="font-[500]">کلیه محصولات ارائه شده توسط بی بی نبات کاملا با کیفیت و
                                        اصیل
                                        میباشد.</p>
                                </div>
                            </div>
                            <div className="md:hidden w-full">
                                {
                                    data.videos.length ? (
                                        <ProductVideo video={data.videos[0]}/>
                                    ) : null
                                }
                                {
                                    windowSize.width < 768 &&
                                    <ProductInfo toggleTypes={toggleTypes} brand={data.product.brand.title}
                                                 rate={data.product.rate} exists={data.product.exists}
                                                 weights={data.weights} commentsCount={data.product.comments_count}/>
                                }
                            </div>
                        </div>
                        {
                            data.videos.length ? (
                                <div className="hidden md:block">
                                    <ProductVideo video={data.videos[0]}/>
                                </div>
                            ) : null
                        }
                        {
                            data.product.description.length || data.product.faqs.length ? (
                                <Description content={data.product.description} productTitle={data.product.title}
                                             faqs={data.product.faqs}/>
                            ) : null
                        }
                        <Comments surveys={surveys} rate={data.product.rate}
                                  commentsCount={data.product.comments_count} comments={comments}
                                  productSlug={data.product.slug}/>
                    </div>
                    {windowSize.width >= 768 &&
                        <div className="hidden md:block">
                            <ProductInfo toggleTypes={toggleTypes} brand={data.product.brand.title}
                                         rate={data.product.rate} exists={data.product.exists}
                                         weights={data.weights} commentsCount={data.product.comments_count}/>
                        </div>
                    }
                </div>
                <SuggestedProducts title="محصولات مشابه" products={sameProducts} productId={data.product.id}/>
            </div>
            <MobileAddToCart toggleTypes={toggleTypes} exists={data.product.exists}
                             weights={data.weights}/>
            <SwipeableDrawer
                anchor="bottom"
                open={isMobileTypesOpen}
                onClose={toggleTypes(false)}
                onOpen={toggleTypes(true)}
                PaperProps={{
                    sx: {
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px"
                    }
                }}
            >
                <div className="mt-2 flex items-center justify-center flex-col">
                    <hr className="border-[3px] border-[#939393] w-8 rounded-full "/>
                </div>
                <div className="flex flex-col gap-3 p-3">
                    {
                        data.weights.map(weight => {
                            if (weight.exists) {
                                return (<SingleProductType key={weight.id} weight={weight}/>)
                            }
                        })
                    }
                </div>
            </SwipeableDrawer>
        </>
    );
};

export default ProductDetailsPage;