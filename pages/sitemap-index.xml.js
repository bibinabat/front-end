const URL = "https://bibinabat.com"

function generateSiteMap() {
    return (
        `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <sitemap>
      <loc>${URL}/page-sitemap.xml</loc>
      <lastmod>2023-09-29</lastmod>
   </sitemap>
   <sitemap>
      <loc>${URL}/product-sitemap.xml</loc>
      <lastmod>2023-09-29</lastmod>
   </sitemap>
   <sitemap>
      <loc>${URL}/product-category-sitemap.xml</loc>
      <lastmod>2023-09-29</lastmod>
   </sitemap>
</sitemapindex>`
    )
}

export async function getServerSideProps({res}) {
    const sitemap = generateSiteMap()

    res.setHeader("Content-Type", "text/xml")
    res.write(sitemap)
    res.end()

    return {
        props: {}
    }
}

export default function ProductCategorySiteMap() {
}