import ProductDetailsPage from "@/components/templates/ProductDetailsPage";
import {parse} from 'cookie'

const ProductDetails = ({data, surveys, comments, sameProducts}) => {
    return (
        <ProductDetailsPage data={data} surveys={surveys} comments={comments} sameProducts={sameProducts}/>
    );
};

export default ProductDetails;

// export async function getStaticPaths() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products`)
//     const products = await res.json()
//
//     const paths = products.data.products.map(product => ({
//         params: {
//             categoryName: product.main_category.slug,
//             productName: product.slug
//         }
//     }))
//
//     return {paths, fallback: 'blocking'}
// }

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

    const commentsRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/comment/?product_slug=${params.productName}`)
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