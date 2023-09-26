import PurchaseSurveyPage from "@/components/templates/PurchaseSurveyPage";
import {parse} from "cookie";
import {NextSeo} from "next-seo";

const PurchaseSurvey = ({cart}) => {
    return (
        <>
            <NextSeo
                title="نظرسنجی"
                nofollow={true}
                noindex={true}
            />
            <PurchaseSurveyPage cart={cart}/>
        </>

    );
};

export default PurchaseSurvey;

export async function getServerSideProps(context) {
    const {params} = context

    const cookies = parse(context.req.headers.cookie || '')

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/carts/${params.purchaseId}`, {
        headers: {
            "Authorization": cookies.Authorization
        }
    })
    const data = await res.json()

    if (data.data?.cart && +data.data.cart.status >= 6 && !data.data.cart.survey) {
        return {
            props: {
                cart: data.data.cart
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}