import ProductListPage from "@/components/templates/ProductListPage";
import {BreadcrumbJsonLd, NextSeo} from "next-seo";

const SubCategory = ({products, categories, category}) => {
    return (
        <>
            <NextSeo
                title={category.data.sub_category.seo.title}
                description={category.data.sub_category.seo.description}
                canonical={`https://bibinabat.com/product-category/${category.data.sub_category.slug}`}
                openGraph={{
                    type: "article",
                    url: `https://bibinabat.com/product-category/${category.data.sub_category.slug}`
                }}
            />
            <BreadcrumbJsonLd itemListElements={[
                {
                    position: 1,
                    name: "صفحه اصلی",
                    item: "https://bibinabat.com"
                },
                {
                    position: 2,
                    name: category.data.sub_category.seo.title,
                    item: `https://bibinabat.com/product-category//${category.data.sub_category.slug}`
                }
            ]} type="BreadcrumbList"/>
            <ProductListPage products={products} categories={categories}
                             pageHeading={category.data.sub_category.title}
                             faqs={category.data.sub_category.faqs}
                             description={category.data.sub_category.description}
            />
        </>
    );
};

export default SubCategory;

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

    const productsRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/?sub_category=${params.subCategory}&order_by=${orderBy}&paginate=false`)
    const products = await productsRes.json()

    if (!products.data.products.length) {
        return {
            notFound: true
        }
    }

    for (let i = 0; i < products.data.products.length; i++) {
        if (products.data.products[i].main_category.slug !== params.categoryName) {
            return {
                notFound: true
            }
        }
    }

    const categoriesRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/main_categories/`)
    const categories = await categoriesRes.json()

    const categoryRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/sub_categories/${params.subCategory}`)
    const category = await categoryRes.json()

    return {
        props: {
            products,
            categories,
            category
        }
    }
}