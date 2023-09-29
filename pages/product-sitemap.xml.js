const URL = "https://bibinabat.com"

function generateSiteMap(products) {
    return (
        `<?xml version="1.0" encoding="UTF-8"?>
           <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
             ${products.map(product => (
            `<url>
               <loc>${URL}/product/${product.main_category.slug}/${product.slug}</loc>
               <lastmod>2023-9-27</lastmod>
             </url>`
        ))}
           </urlset>
 `
    )
}

export async function getServerSideProps({res}) {
    const productsRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/`)
    const products = await productsRes.json()

    const sitemap = generateSiteMap(products.data.products)

    res.setHeader("Content-Type", "text/xml")
    res.write(sitemap)
    res.end()

    return {
        props: {}
    }
}

export default function ProductSiteMap() {
}