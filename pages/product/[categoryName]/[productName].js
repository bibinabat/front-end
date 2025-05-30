import ProductDetailsPage from "@/components/templates/ProductDetailsPage";
import {parse} from 'cookie'
import {NextSeo, ProductJsonLd} from "next-seo";
import {useEffect, useState} from "react";
import Head from "next/head";
import {j2g} from "@/utils/dateConversion";

const ProductDetails = ({data, surveys, comments, sameProducts}) => {
    const [images, setImages] = useState(null)
    const [productPrice, setProductPrice] = useState(null)

    useEffect(() => {
        if (data.weights) {
            setImages([].concat(...data.weights.map(weight => (weight.images))))
            setProductPrice(data.weights[0].prices)
        }
    }, [data])

    return (
        <>
            <Head>
                <meta name="product_id" content={data.product.id}/>
                <meta name="product_name" content={data.product.title}/>
                <meta name="product_price"
                      content={productPrice?.discount ? productPrice?.discount.price : productPrice?.real}/>
                <meta name="product_old_price"
                      content={productPrice?.discount ? productPrice?.real : null}/>
                <meta name="availability" content="instock or outofstock"/>
                <meta name="guarantee" content="guarantee_sample"/>
            </Head>
            <NextSeo
                title={data.product.seo.title}
                description={data.product.seo.description}
                canonical={`https://bibinabat.com/product/${data.product.main_category.slug}/${data.product.slug}`}
                openGraph={{
                    images: images?.map(image => ({
                        url: `${process.env.NEXT_PUBLIC_API_DOMAIN}/${image.url}`,
                        alt: image.alt,
                        height: 1000,
                        weight: 1000
                    })),
                    url: `https://bibinabat.com/product/${data.product.main_category.slug}/${data.product.slug}`,
                    type: "product",
                    videos: data.videos.map(video => ({
                        url: `${process.env.NEXT_PUBLIC_API_DOMAIN}/${video.url}`,
                        type: "video/mp4"
                    }))
                }}
            />
            <ProductJsonLd
                productName={data.product.title}
                description={data.product.description}
                images={images?.map(image => (`${process.env.NEXT_PUBLIC_API_DOMAIN}/${image.url}`))}
                brand={data.product.brand.title}
                category={data.product.main_category.title}
                reviews={
                    surveys.data.surveys.map(survey => ({
                        author: survey.user,
                        datePublished: j2g(survey.created_date),
                        reviewBody: survey.text,
                        reviewRating: {
                            ratingValue: ((+survey.products_quality + +survey.pack_quality) / 2).toString()
                        }
                    }))
                }
            />
            <ProductDetailsPage data={data} surveys={surveys} comments={comments} sameProducts={sameProducts}/>
        </>
    );
};

export default ProductDetails;

export async function getServerSideProps(context) {
    const {params} = context

    const cookies = parse(context.req.headers.cookie || '')

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/${params.productName}`, {
        headers: {
            "Authorization": cookies.Authorization
        }
    })
    const data = await res.json()

    if (data.data && data.data.product) {
        if (data.data.product.product.main_category.slug !== params.categoryName) {
            return {
                notFound: true
            }
        }
    } else {
        return {
            notFound: true
        }
    }

    const surveysRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/carts/survey/product/${params.productName}`)
    const surveys = await surveysRes.json()

    const commentsRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/comment/?product_slug=${params.productName}`, {
        headers: {
            "Authorization": cookies.Authorization
        }
    })
    const comments = await commentsRes.json()

    const sameProductsRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/?main_category=1&paginate=false`)
    const sameProducts = await sameProductsRes.json()

    return {
        props: {
            data: data.data.product || null,
            surveys,
            comments,
            sameProducts
        }
    }
}