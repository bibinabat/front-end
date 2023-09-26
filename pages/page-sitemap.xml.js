const URL = "https://bibinabat.com"

function generateSiteMap() {
    return (
        `<?xml version="1.0" encoding="UTF-8"?>
           <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
             <url>
               <loc>${URL}/</loc>
               <lastmod>2023-9-26</lastmod>
             </url>
             <url>
               <loc>${URL}/about-us</loc>
               <lastmod>2023-9-26</lastmod>
             </url>
             <url>
               <loc>${URL}/contact-us</loc>
               <lastmod>2023-9-26</lastmod>
             </url>
             <url>
               <loc>${URL}/submitting-complaint</loc>
               <lastmod>2023-9-26</lastmod>
             </url>
           </urlset>
 `
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

export default function PageSiteMap() {
}