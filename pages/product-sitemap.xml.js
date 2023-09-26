const URL = "https://bibinabat.com"

function generateSiteMap() {
    return (
        `<?xml version="1.0" encoding="UTF-8"?>
           <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
             <url>
               <loc>${URL}/</loc>
               <lastmod>2023-9-26</lastmod>
             </url>
           </urlset>
 `
    )
}

export async function getServerSideProps({res}) {
    const productsRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/`)
    const products = await productsRes.json()

    const sitemap = generateSiteMap()

    res.setHeader("Content-Type", "text/xml")
    res.write(sitemap)
    res.end()

    return {
        props: {}
    }
}

export default function PageSiteMap() {
}