import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import AdBar from "@/components/modules/AdBar";
import NavBar from "@/components/modules/NavBar";
import DesktopSearchBar from "@/components/modules/DesktopSearchBar";
import {Dialog} from "@mui/material";
import {useEffect, useState} from "react";
import Login from "@/components/modules/Login";
import {useRouter} from "next/router";
import ProfileAside from "@/components/modules/ProfileAside";
import useWindowSize from "@/hooks/useWindowSize";

const Layout = ({children}) => {
    const router = useRouter()
    const {width} = useWindowSize()

    const isProfilePage = router.asPath.includes("profile") && router.route !== "/404"
    const isPdp = router.asPath.includes("product/") && router.route !== "/404"

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
            {
                isProfilePage || isPdp ? width > 1024 ? (
                    <Header handleLoginOpen={handleLoginOpen}/>
                ) : null : <Header handleLoginOpen={handleLoginOpen}/>
            }
            <AdBar/>
            <div
                className={`${isProfilePage ? "flex gap-5 mt-14 lg:mt-52 px-5 lg:px-24 pb-20 lg:pb-6 flex-flow absolute top-0 bottom-0 w-full" : ""}`}>
                {isProfilePage && (
                    <ProfileAside/>
                )}
                {children}
            </div>
            <NavBar handleLoginOpen={handleLoginOpen}/>
            {!isProfilePage && (
                <Footer/>
            )}
        </>
    );
};

export default Layout;