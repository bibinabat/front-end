import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import AdBar from "@/components/modules/AdBar";
import NavBar from "@/components/modules/NavBar";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <AdBar/>
            {children}
            <NavBar/>
            <Footer/>
        </>
    );
};

export default Layout;