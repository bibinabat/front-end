import ContactUsPage from "@/components/templates/ContactUsPage";

const ContactUs = ({data, error}) => {
    return (
        <ContactUsPage data={data} error={error}/>
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