import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import AdBar from "@/components/modules/AdBar";
import NavBar from "@/components/modules/NavBar";
import DesktopSearchBar from "@/components/modules/DesktopSearchBar";
import {Dialog} from "@mui/material";
import {useEffect, useState} from "react";
import Login from "@/components/modules/Login";
import {useRouter} from "next/router";

const Layout = ({children}) => {
    const router = useRouter()

    const [isLoginOpen, setIsLoginOpen] = useState(router.asPath.split("#")[1] === "login")

    useEffect(() => {
        const onHashChange = () => setIsLoginOpen(window.location.hash === "#login")
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleLoginOpen = () => {
        window.location.hash = "#login"
    }

    const handleLoginClose = () => {
        window.history.back()
    }

    return (
        <>
            <Dialog
                open={isLoginOpen}
                onClose={handleLoginClose}
                fullWidth={true}
                maxWidth="xs"
                PaperProps={{
                    sx: {
                        borderRadius: "15px"
                    }
                }}
            >
                <Login handleClose={handleLoginClose}/>
            </Dialog>
            <Header handleLoginOpen={handleLoginOpen}/>
            <AdBar/>
            {children}
            <NavBar handleLoginOpen={handleLoginOpen}/>
            <Footer/>
        </>
    );
};

export default Layout;