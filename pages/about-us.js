import AboutUsPage from "@/components/templates/AboutUsPage";

const AboutUs = ({data, error}) => {
    return (
        <AboutUsPage data={data} error={error}/>
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