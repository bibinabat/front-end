import Link from "next/link";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {Dialog, SwipeableDrawer, Tooltip} from "@mui/material";
import HeaderCart from "@/components/modules/HeaderCart";
import HeaderUserMenu from "@/components/modules/HeaderUserMenu";
import Sidebar from "@/components/modules/Sidebar";
import DesktopSearchBar from "@/components/modules/DesktopSearchBar";

const Header = ({handleLoginOpen}) => {
    const [scrolled, setScrolled] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

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
        setIsSearchOpen(true)
    }

    const handleSearchClose = () => {
        setIsSearchOpen(false)
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
                    <Link href="/" className="text-mustard hover:text-mustard">صفحه اصلی</Link>
                    <Link href="/" className="hover:text-mustard">خرید نبات</Link>
                    <Link href="/" className="hover:text-mustard">خرید قند</Link>
                    <Link href="/" className="hover:text-mustard">وبلاگ</Link>
                    <Link href="/" className="hover:text-mustard">درباره ما</Link>
                    <Link href="/" className="hover:text-mustard">تماس با ما</Link>
                </div>
                <div className="flex gap-2 items-center">
                    {/*<button className="bg-slate-100 rounded-2xl p-5 ml-2 hidden lg:flex lg:items-center"*/}
                    {/*        onMouseEnter={() => setIsUserMenuOpen(true)}*/}
                    {/*        onMouseLeave={() => setIsUserMenuOpen(false)}>*/}
                    {/*    <i className="fa-solid fa-user xl:ml-2"></i>*/}
                    {/*    <span className="hidden xl:inline">امیرمحمد خلیلی</span>*/}
                    {/*</button>*/}
                    <button
                        className="bg-blue-dark text-white rounded-2xl p-5 ml-2 hidden lg:flex lg:items-center hover:bg-[#2D2671]"
                        onClick={handleLoginOpen}
                    >
                        <i className="fa-solid fa-user xl:hidden"></i>
                        <span className="hidden xl:inline">ورود / ثبت نام</span>
                    </button>
                    <Tooltip arrow title="اعلانات">
                        <div className="relative ">
                            <span
                                className="absolute bg-red text-white rounded-full h-5 w-5 flex justify-center items-center text-sm p-3 -top-2 -right-2 border-2 border-white">5</span>
                            <button className="w-8 h-8 bg-[#D6D5DF] rounded-full flex items-center justify-center p-6">
                                <i className="fa-regular fa-bell text-lg text-blue-dark"></i>
                            </button>
                        </div>
                    </Tooltip>
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
                    <div className="relative hidden lg:flex" onMouseEnter={() => setIsCartOpen(true)}
                         onMouseLeave={() => setIsCartOpen(false)}>
                        <span
                            className="absolute bg-black text-mustard rounded-full h-5 w-5 flex justify-center items-center text-sm p-3 -top-2 -right-2 border-2 border-white">5</span>
                        <button className="w-8 h-8 bg-[#F2E6CC] rounded-full flex items-center justify-center p-6">
                            <i className="fa-solid fa-cart-shopping text-mustard"></i>
                        </button>
                    </div>
                </div>
                <HeaderCart isOpen={isCartOpen} setIsOpen={setIsCartOpen}/>
                <HeaderUserMenu isOpen={isUserMenuOpen} setIsOpen={setIsUserMenuOpen}/>
            </header>
        </div>
    );
};

export default Header;