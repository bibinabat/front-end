import Link from "next/link";
import {Button, Dialog, Slide, SwipeableDrawer} from "@mui/material";
import NavBarCart from "@/components/modules/NavBarCart";
import {useEffect, useState} from "react";
import React from "react";
import SearchMobile from "@/components/modules/SearchMobile";
import {useRouter} from "next/router";
import useAuthState from "@/hooks/useAuth";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const NavBar = ({handleLoginOpen}) => {
    const router = useRouter()
    const {isLoggedIn} = useAuthState()

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(router.asPath.split("#")[1] === "searchMobile")

    useEffect(() => {
        const onHashChange = () => setIsSearchOpen(window.location.hash === "#searchMobile")
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const toggleCart = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setIsCartOpen(open)
    }

    const handleSearchOpen = () => {
        window.location.hash = "#searchMobile"
    }

    const handleSearchClose = () => {
        window.history.back()
    }

    return (
        <nav>
            <SwipeableDrawer
                anchor="bottom"
                open={isCartOpen}
                onClose={toggleCart(false)}
                onOpen={toggleCart(true)}
                PaperProps={{
                    sx: {
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px"
                    }
                }}
            >
                <NavBarCart handleClose={toggleCart(false)}/>
            </SwipeableDrawer>
            <div
                className="grid items-center justify-around grid-cols-4 bottom-0 right-0 fixed z-[999] bg-white w-full text-[#ABB4BC] py-3 shadow-[0px_-20px_62px_9px_rgba(0,0,0,0.1)] lg:hidden">
                <Link href="/">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <i className="fa-solid fa-house text-lg"></i>
                        <span className="text-xs">صفحه اصلی</span>
                    </div>
                </Link>
                <div className="flex flex-col items-center justify-center gap-1 cursor-pointer"
                     onClick={isSearchOpen ? handleSearchClose : handleSearchOpen}>
                    <i className="fa-solid fa-magnifying-glass text-lg"></i>
                    <span className="text-xs">جست و جو</span>
                </div>
                <Dialog
                    fullScreen
                    open={isSearchOpen}
                    onClose={handleSearchClose}
                    TransitionComponent={Transition}
                >
                    <SearchMobile handleClose={handleSearchClose}/>
                </Dialog>
                <div className="flex flex-col items-center justify-center gap-1 cursor-pointer"
                     onClick={toggleCart(true)}>
                    <i className="fa-solid fa-cart-shopping text-lg"></i>
                    <span className="text-xs">سبد خرید</span>
                </div>
                {
                    isLoggedIn ? (
                        <Link href="/profile"
                              className="flex flex-col items-center cursor-pointer justify-center gap-1">
                            <i className="fa-solid fa-user text-lg"></i>
                            <span className="text-xs">پروفایل</span>
                        </Link>
                    ) : (
                        <div className="flex flex-col items-center cursor-pointer justify-center gap-1"
                             onClick={handleLoginOpen}>
                            <i className="fa-solid fa-user text-lg"></i>
                            <span className="text-xs">ورود</span>
                        </div>
                    )
                }
            </div>
        </nav>
    );
};

export default NavBar;