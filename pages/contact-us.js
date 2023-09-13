import ContactUsPage from "@/components/templates/ContactUsPage";
import {NextSeo, BreadcrumbJsonLd, CorporateContactJsonLd, WebPageJsonLd} from "next-seo";

const ContactUs = ({data, error}) => {
    return (
        <>
            <NextSeo
                title="تماس با ما - بی بی نبات"
                canonical="https://bibinabat.com/contact-us/"
                description="تماس با بی بی نبات ما اینجا میتونیم به شما کمک کنیم Telegram Instagram Whatsapp آدرس یزد ، بلوارمدرس."
                openGraph={{
                    type: "article",
                    url: "https://bibinabat.com/contact-us/",
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
                    name: "contact-us",
                    item: "https://bibinabat.com/contact-us"
                }
            ]}/>
            <WebPageJsonLd
                id="https://bibinabat.com/contact-us"
                type="ContactPage"
                description="تماس با بی بی نبات - ما اینجا میتونیم به شما کمک کنیم - آدرس: یزد، بلوار مدرس، اکرم آباد، خیابان ولیعصر، کوچه شکوفه، نبش بن بست گلها - کدپستی: 8915444619 - شماره تماس: 09131598619 - ساعت کار هرزور هفته پیامی ارسال کنید."
            />
            <ContactUsPage data={data} error={error}/>
        </>
    );
};

export default ContactUs;

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