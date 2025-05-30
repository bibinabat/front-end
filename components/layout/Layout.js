import Header from "@/components/modules/layout/header/Header";
import Footer from "@/components/modules/layout/footer/Footer";
import AdBar from "@/components/modules/layout/header/AdBar";
import NavBar from "@/components/modules/layout/navbar/NavBar";
import {Dialog} from "@mui/material";
import {useEffect, useState} from "react";
import Login from "@/components/modules/layout/authentication/Login";
import {useRouter} from "next/router";
import ProfileAside from "@/components/modules/profile/ProfileAside";
import useWindowSize from "@/hooks/useWindowSize";
import localFont from 'next/font/local'
import useAuthState from "@/hooks/useAuth";

const myFont = localFont({
    src: [
        {
            path: '/Webfonts/fonts/woff/IRANSansX-Thin.woff',
            weight: '100',
            style: 'normal'
        },
        {
            path: '/Webfonts/fonts/woff/IRANSansX-UltraLight.woff',
            weight: '200',
            style: 'normal'
        },
        {
            path: '/Webfonts/fonts/woff/IRANSansX-Light.woff',
            weight: '300',
            style: 'normal'
        },
        {
            path: '/Webfonts/fonts/woff/IRANSansX-Medium.woff',
            weight: '500',
            style: 'normal'
        },
        {
            path: '/Webfonts/fonts/woff/IRANSansX-DemiBold.woff',
            weight: '600',
            style: 'normal'
        },
        {
            path: '/Webfonts/fonts/woff/IRANSansX-ExtraBold.woff',
            weight: '800',
            style: 'normal'
        },
        {
            path: '/Webfonts/fonts/woff/IRANSansX-Black.woff',
            weight: '900',
            style: 'normal'
        },
        {
            path: '/Webfonts/fonts/woff/IRANSansX-Bold.woff',
            weight: 'bold',
            style: 'normal'
        },
        {
            path: '/Webfonts/fonts/woff/IRANSansX-Regular.woff',
            weight: 'normal',
            style: 'normal'
        }
    ]
})

const Layout = ({children}) => {
    const router = useRouter()
    const {width} = useWindowSize()
    const {isLoggedIn} = useAuthState()

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
        if (!isLoggedIn && isProfilePage) {
            router.replace('/')
                .then(() => {
                    setIsLoginOpen(false)
                })
        } else {
            window.history.back()
        }
    }

    useEffect(() => {
        if (!isLoggedIn && isProfilePage) {
            handleLoginOpen()
        }
    }, [isLoggedIn, isProfilePage])

    return (
        <main className={myFont.className}>
            {!isLoggedIn && (
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
            )}
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
        </main>
    );
};

export default Layout;