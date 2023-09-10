import ContactUsPage from "@/components/templates/ContactUsPage";
import {NextSeo} from "next-seo";

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