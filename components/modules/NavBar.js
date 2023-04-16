import Link from "next/link";
import {Button, Dialog, Slide, SwipeableDrawer} from "@mui/material";
import NavBarCart from "@/components/modules/NavBarCart";
import {useState} from "react";
import React from "react";
import SearchMobile from "@/components/modules/SearchMobile";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const NavBar = ({handleLoginOpen}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

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
        setIsSearchOpen(true)
    }

    const handleSearchClose = () => {
        setIsSearchOpen(false)
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
                <NavBarCart/>
            </SwipeableDrawer>
            <div
                className="grid items-center justify-around grid-cols-4 bottom-0 right-0 fixed z-[999] bg-white w-full text-[#9F9F9F] py-3 shadow-[0px_-20px_62px_9px_rgba(0,0,0,0.1)] lg:hidden">
                <Link href="/">
                    <div className="flex flex-col items-center justify-center gap-1" onClick={handleSearchClose}>
                        <i className="fa-solid fa-house text-lg"></i>
                        <span className="text-sm">صفحه اصلی</span>
                    </div>
                </Link>
                <div className="flex flex-col items-center justify-center gap-1 cursor-pointer"
                     onClick={isSearchOpen ? handleSearchClose : handleSearchOpen}>
                    <i className="fa-solid fa-magnifying-glass text-lg"></i>
                    <span className="text-sm">جست و جو</span>
                </div>
                <Dialog
                    fullScreen
                    open={isSearchOpen}
                    onClose={handleSearchClose}
                    TransitionComponent={Transition}
                    style={{
                        zIndex: "998"
                    }}
                >
                    <SearchMobile handleClose={handleSearchClose}/>
                </Dialog>
                <div className="flex flex-col items-center justify-center gap-1 cursor-pointer"
                     onClick={toggleCart(true)}>
                    <i className="fa-solid fa-cart-shopping text-lg"></i>
                    <span className="text-sm">سبد خرید</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1" onClick={handleLoginOpen}>
                    <i className="fa-solid fa-user text-lg"></i>
                    <span className="text-sm">ورود</span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;