import {j2g} from "@/utils/dateConversion";

const URL = "https://bibinabat.com"

function generateSiteMap(categories) {
    return (
        `<?xml version="1.0" encoding="UTF-8"?>
           <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
             ${categories.map(category => (
            `<url>
               <loc>${URL}/product-category/${category.slug}</loc>
               <lastmod>${j2g(category.created_date)}</lastmod>
             </url>
             ${category.sub_categories.map(subCategory => (
                `<url>
                   <loc>${URL}/product-category/${category.slug}/${subCategory.slug}</loc>
                   <lastmod>${j2g(subCategory.created_date)}</lastmod>
                </url>`
            ))}
           `
        ))}
           </urlset>
 `
    )
}

export async function getServerSideProps({res}) {
    const categoriesRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/main_categories/`)
    const categories = await categoriesRes.json()

    const sitemap = generateSiteMap(categories.data.main_categories)

    res.setHeader("Content-Type", "text/xml")
    res.write(sitemap)
    res.end()

    return {
        props: {}
    }
}

export default function ProductCategorySiteMap() {
}