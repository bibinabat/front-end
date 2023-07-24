import HomePage from "@/components/templates/HomePage";

export default function Home({popularProducts, mostSaleProducts}) {
    return (
        <>
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