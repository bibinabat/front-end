import ProductListPage from "@/components/templates/ProductListPage";
import {NextSeo} from "next-seo";

const CategoryName = ({products, categories, category}) => {
    return (
        <>
            <NextSeo
                title={category.data.main_category.seo.title}
                description={category.data.main_category.seo.description}
                canonical={`https://bibinabat.com/product-category/${category.data.main_category.slug}`}
                openGraph={{
                    type: "article",
                    url: `https://bibinabat.com/product-category/${category.data.main_category.slug}`
                }}
            />
            <ProductListPage products={products} categories={categories}
                             pageHeading={category.data.main_category.title}
                             description={category.data.main_category.description}
                             faqs={category.data.main_category.faqs}
            />
        </>
    );
};

export default CategoryName;

export async function getServerSideProps(context) {
    const {params, query} = context

    let orderBy

    switch (query.sort) {
        case "popular":
            orderBy = 1
            break
        case "bestSell":
            orderBy = 2
            break
        case "newest":
            orderBy = 3
            break
        case "expensive":
            orderBy = 4
            break
        case "cheapest":
            orderBy = 5
            break
        default:
            orderBy = 1
    }

    const productsRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/?main_category=${params.categoryName}&order_by=${orderBy}&paginate=false`)
    const products = await productsRes.json()

    if (!products.data.products.length) {
        return {
            notFound: true
        }
    }

    const categoriesRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/main_categories/`)
    const categories = await categoriesRes.json()

    const categoryRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/main_categories/${params.categoryName}`)
    const category = await categoryRes.json()

    return {
        props: {
            products,
            categories,
            category
        }
    }
}