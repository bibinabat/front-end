import '@/styles/globals.css'
import {ThemeProvider} from "@mui/material";
import theme from "@/mui/theme";
import Layout from "@/components/layout/Layout";
import {ToastContainer} from "react-toastify";

const contextClass = {
    success: "bg-green-100 text-green-700",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
};

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <ToastContainer
                toastClassName={({type}) => contextClass[type || "default"] +
                    " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"}/>
        </ThemeProvider>
    )
}
