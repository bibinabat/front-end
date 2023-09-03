import Link from "next/link";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {Dialog, Skeleton, SwipeableDrawer, Tooltip} from "@mui/material";
import HeaderCart from "@/components/modules/HeaderCart";
import HeaderUserMenu from "@/components/modules/HeaderUserMenu";
import Sidebar from "@/components/modules/Sidebar";
import DesktopSearchBar from "@/components/modules/DesktopSearchBar";
import {useRouter} from "next/router";
import useAuthState from "@/hooks/useAuth";
import Cookies from "js-cookie";
import useWindowSize from "@/hooks/useWindowSize";
import {useCart} from "@/contexts/CartContext";

const Header = ({handleLoginOpen}) => {
    const router = useRouter()
    const {cart} = useCart()

    const [scrolled, setScrolled] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(router.asPath.split("#")[1] === "search")
    const {width} = useWindowSize()
    const {isLoggedIn, userData} = useAuthState()

    useEffect(() => {
        const onHashChange = () => setIsSearchOpen(window.location.hash === "#search")
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const toggleSidebar = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setIsSidebarOpen(open)
    }

    const handleSearchOpen = () => {
        window.location.hash = "#search"
    }

    const handleSearchClose = () => {
        window.history.back()
    }

    const header = useRef(null)

    useEffect(() => {
        let sticky = header.current.offsetTop

        const handleScroll = () => {
            if (window.pageYOffset > sticky) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="relative">
            <header ref={header}
                    className={`flex items-center px-10 md:px-16 h-28 md:h-32 justify-between shadow-2xl z-[998] bg-white transition-[width,border-radius] ${scrolled ? "w-full fixed" : "mt-14 rounded-3xl absolute w-[95%] m-auto right-2/4 translate-x-2/4"}`}>
                <button
                    onClick={toggleSidebar(true)}
                    className="w-8 h-8 bg-[#D6D5DF] rounded-2xl items-center justify-center p-6 flex text-xl lg:hidden">
                    <i className="fa-solid fa-bars text-blue-dark"></i>
                </button>
                <SwipeableDrawer
                    anchor="left"
                    open={isSidebarOpen}
                    onClose={toggleSidebar(false)}
                    onOpen={toggleSidebar(true)}
                    PaperProps={{
                        sx: {
                            backgroundColor: "#E8E8E8",
                            '&::before': {
                                content: '""',
                                position: "absolute",
                                top: "0px",
                                right: "0px",
                                bottom: "0px",
                                left: "0px",
                                backgroundImage: "url(/images/sidebar-square-darkblue-pattern.png)",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                zIndex: "-1",
                                opacity: "0.1"
                            }
                        }
                    }}
                >
                    <button className="absolute left-3 top-3 text-3xl text-[#8D8D8D]" onClick={toggleSidebar(false)}>
                        <i className="fa-duotone fa-circle-xmark"></i>
                    </button>
                    <Sidebar toggleSidebar={toggleSidebar}/>
                </SwipeableDrawer>
                <div>
                    <Link href="/">
                        <Image className="w-20 h-20 md:w-24 md:h-24" src="/logo/bibinabat-logo.png" alt="بی بی نبات"
                               width={100}
                               height={100}/>
                    </Link>
                </div>
                <div className="gap-7 font-[600] hidden lg:flex">
                    <Link href="/" className={`hover:text-mustard ${router.asPath === "/" ? "text-mustard" : ""}`}>صفحه
                        اصلی</Link>
                    <Link href="/product-category/nabat"
                          className={`hover:text-mustard ${router.asPath === "/product-category/nabat" ? "text-mustard" : ""}`}>خرید
                        نبات</Link>
                    <Link href="/product-category/ghand"
                          className={`hover:text-mustard ${router.asPath === "/product-category/ghand" ? "text-mustard" : ""}`}>خرید
                        قند</Link>
                    <Link href="https://bibinabat.com/blog/" target="_blank" className="hover:text-mustard">وبلاگ</Link>
                    <Link href="/about-us"
                          className={`hover:text-mustard ${router.asPath === "/about-us" ? "text-mustard" : ""}`}>درباره
                        ما</Link>
                    <Link href="/contact-us"
                          className={`hover:text-mustard ${router.asPath === "/contact-us" ? "text-mustard" : ""}`}>تماس
                        با ما</Link>
                </div>
                <div className="flex gap-2 items-center">
                    {
                        isLoggedIn === "loading" ? (
                                <div className="lg:mr-2">
                                    <Skeleton variant="rounded" width={width > 1280 ? 150 : 60} height={60} sx={{
                                        borderRadius: "10px"
                                    }}/>
                                </div>
                            ) :
                            isLoggedIn === true ? (
                                <button className="bg-slate-100 rounded-2xl p-5 ml-2 hidden lg:flex lg:items-center"
                                        onMouseEnter={() => setIsUserMenuOpen(true)}
                                        onMouseLeave={() => setIsUserMenuOpen(false)}>
                                    <i className="fa-solid fa-user xl:ml-2"></i>
                                    <span
                                        className="hidden xl:inline font-[600] max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">
                                    {
                                        userData !== "loading" ?
                                            userData.first_name === "" || userData.last_name === "" ? (
                                                userData.phone_number
                                            ) : (
                                                userData.first_name + " " + userData.last_name
                                            ) : (
                                                <Skeleton variant="rounded" width={100} height={10}/>
                                            )
                                    }
                                </span>
                                </button>
                            ) : (
                                <button
                                    className="bg-blue-dark text-white rounded-2xl p-5 ml-2 hidden lg:flex lg:items-center hover:bg-[#2D2671]"
                                    onClick={handleLoginOpen}
                                >
                                    <i className="fa-solid fa-user xl:hidden"></i>
                                    <span className="hidden xl:inline">ورود / ثبت نام</span>
                                </button>
                            )
                    }
                    {(isLoggedIn !== "loading" && isLoggedIn === true) && (
                        <Tooltip arrow title="اعلانات">
                            <Link href="/profile/notifications" className="relative ">
                            <span
                                className="absolute bg-red text-white rounded-full h-5 w-5 flex justify-center items-center text-sm p-3 -top-2 -right-2 border-2 border-white">5</span>
                                <button
                                    className="w-8 h-8 bg-[#D6D5DF] rounded-full flex items-center justify-center p-6">
                                    <i className="fa-regular fa-bell text-lg text-blue-dark"></i>
                                </button>
                            </Link>
                        </Tooltip>
                    )}
                    <Tooltip title="جستوجو" arrow>
                        <button
                            onClick={handleSearchOpen}
                            className="w-8 h-8 bg-[#D6D5DF] rounded-full items-center justify-center p-6 hidden lg:flex">
                            <i className="fa-solid fa-magnifying-glass text-blue-dark"></i>
                        </button>
                    </Tooltip>
                    <Dialog
                        open={isSearchOpen}
                        onClose={handleSearchClose}
                        fullWidth={true}
                        maxWidth="sm"
                        PaperProps={{
                            sx: {
                                borderRadius: "15px"
                            }
                        }}
                    >
                        <DesktopSearchBar handleClose={handleSearchClose}/>
                    </Dialog>
                    {
                        cart.status === "loaded" ? (
                            <div className="relative hidden lg:flex" onMouseEnter={() => setIsCartOpen(true)}
                                 onMouseLeave={() => setIsCartOpen(false)}>
                                <span
                                    className="absolute bg-black text-mustard rounded-full h-5 w-5 flex justify-center items-center text-sm p-3 -top-2 -right-2 border-2 border-white">{cart.cartInfo.orders?.length ? cart.cartInfo.orders?.length : 0}</span>
                                <button
                                    className="w-8 h-8 bg-[#F2E6CC] rounded-full flex items-center justify-center p-6">
                                    <i className="fa-solid fa-cart-shopping text-mustard"></i>
                                </button>
                            </div>
                        ) : cart.status === "loading" ? (
                            <Skeleton variant="circular" width={50} height={50}/>
                        ) : null
                    }
                </div>
                {
                    cart.status === "loaded" ? (
                        <HeaderCart isOpen={isCartOpen} setIsOpen={setIsCartOpen} cart={cart}/>
                    ) : null
                }

                {isLoggedIn && (
                    <HeaderUserMenu isOpen={isUserMenuOpen} setIsOpen={setIsUserMenuOpen} userData={userData}/>
                )}
            </header>
        </div>
    );
};

export default Header;