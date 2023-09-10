import AboutUsPage from "@/components/templates/AboutUsPage";
import {NextSeo, BreadcrumbJsonLd, WebPageJsonLd} from "next-seo";

const AboutUs = ({data, error}) => {
    return (
        <>
            <NextSeo
                title="درباره ما - بی بی نبات"
                canonical="https://bibinabat.com/about-us/"
                description="فروشگاه بی بی نبات، از بزرگترین و بهترین فروشگاه های عرضه کننده انواع محصولات یزدی از قبیل نبات و قند به شمار آمده و شرایط آسان و بسیار خوبی را برای خرید این محصولات، در اختیار شما عزیزان قرار خواهد داد."
                openGraph={{
                    type: "article",
                    url: "https://bibinabat.com/about-us/",
                    article: {
                        authors: ["https://facebook.com/bibinabat.ir"]
                    },
                    images: [{
                        url: 'https://bibinabat.com/_next/image?url=%2Fimages%2Fbanner.jpg&w=2048&q=75',
                        width: 850,
                        height: 650,
                        alt: 'پرده نبات زعفرانی',
                        type: 'image/jpeg'
                    }],
                }}
            />
            <BreadcrumbJsonLd itemListElements={[
                {
                    position: 1,
                    name: "بی بی نبات",
                    item: "https://bibinabat.com/"
                },
                {
                    position: 2,
                    name: "about-us",
                    item: "https://bibinabat.com/about-us"
                }
            ]}/>
            <WebPageJsonLd
                id="https://bibinabat.com/about-us"
                type="AboutPage"
                description="فروشگاه بی بی نبات، از بزرگترین و بهترین فروشگاه های عرضه کننده انواع محصولات یزدی از قبیل نبات و قند به شمار آمده و شرایط آسان و بسیار خوبی را برای خرید این محصولات، در اختیار شما عزیزان قرار خواهد داد."
            />
            <AboutUsPage data={data} error={error}/>
        </>
    );
};

export default AboutUs;

export async function getStaticProps() {
    try {
        const res = await fetch("https://backend-bibinabat.iran.liara.run/api/about_us/communication_ways/", {
            method: "GET",
            credentials: "include"
        })
        const data = await res.json()

        return {
            props: {
                data
            }
        }
    } catch (error) {
        return {
            props: {
                error: "Failed to fetch data"
            }
        }
    }
}