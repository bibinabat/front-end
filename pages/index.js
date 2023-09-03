import HomePage from "@/components/templates/HomePage";
import {NextSeo, OrganizationJsonLd} from "next-seo";

export default function Home({popularProducts, mostSaleProducts}) {
    return (
        <>
            <NextSeo
                title="بی بی نبات - فروشگاه آنلاین خرید نبات - با کیفیت ترین قند و نبات یزد"
                description="بی بی نبات از عرضه کنندگان مطرح نبات در کشور به شمار آمده و انواع نبات اصل و درجه یک یزدی را خدمت شما خریداران عزیز ارائه خواهد کرد."
                openGraph={{
                    url: "https://bibinabat.com/",
                    images: [{
                        url: 'https://bibinabat.com/_next/image?url=%2Fimages%2Fbanner.jpg&w=2048&q=75',
                        width: 850,
                        height: 650,
                        alt: 'پرده نبات زعفرانی',
                        type: 'image/jpeg'
                    }],
                }}
                canonical="https://bibinabat.com/"
            />
            <OrganizationJsonLd
                type="Store"
                logo="https://bibinabat.com/_next/image?url=%2Flogo%2Fbibinabat-logo.png&w=256&q=75"
                name="بی بی نبات"
                address={{
                    streetAddress: 'بلوار مدرسه ، خيابان وليعصر ، كوچه شكوفه',
                    addressLocality: 'یزد',
                    addressRegion: '2',
                    postalCode: '8915444617',
                    addressCountry: 'IR'
                }}
                contactPoint={[
                    {
                        telephone: '+989131598619',
                        contactType: 'customer service',
                        email: 'bibinabat.ir@gmail.com',
                        availableLanguage: 'Persian',
                    }
                ]}
                url="https://bibinabat.com/"
                sameAs={[
                    "https://facebook.com/bibinabat.ir",
                    "https://www.instagram.com/bibinabat.ir/",
                    "https://www.youtube.com/channel/UCZbqEy_O9L2Ue_Sxo_oPVkg",
                    "https://twitter.com/bibinabat_ir",
                    "https://www.pinterest.com/bibinabat_ir/"
                ]}
            />
            <HomePage popularProducts={popularProducts} mostSaleProducts={mostSaleProducts}/>
        </>
    )
}

export async function getStaticProps() {
    const popularProductsRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products?order_by=1&limit=5`, {
        method: "GET"
    })
    const popularProducts = await popularProductsRes.json()

    const mostSaleProductsRes = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products?order_by=2&limit=5`, {
        method: "GET"
    })
    const mostSaleProducts = await mostSaleProductsRes.json()

    console.log(mostSaleProducts, popularProducts)

    return {
        props: {
            popularProducts,
            mostSaleProducts
        },
        revalidate: 24 * 60 * 60 // Every day
    }
}