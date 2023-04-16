import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import AdBar from "@/components/modules/AdBar";
import NavBar from "@/components/modules/NavBar";
import DesktopSearchBar from "@/components/modules/DesktopSearchBar";
import {Dialog} from "@mui/material";
import {useState} from "react";
import Login from "@/components/modules/Login";

const Layout = ({children}) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    const handleLoginOpen = () => {
        setIsLoginOpen(true)
    }

    const handleLoginClose = () => {
        setIsLoginOpen(false)
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