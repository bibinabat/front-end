import '@/styles/globals.css'
import {ThemeProvider} from "@mui/material";
import theme from "@/mui/theme";
import Layout from "@/components/layout/Layout";
import {ToastContainer} from "react-toastify";

import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})

const contextClass = {
    success: "bg-green-100 text-green-700",
    error: "bg-red-600",
    info: "bg-[#2F70EF] text-center rounded-xl w-fit",
    warning: "bg-orange-400",
};

export default function App({Component, pageProps}) {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <ToastContainer
                    toastClassName={({type}) => contextClass[type || "default"] +
                        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer mb-2"}
                    className="!w-full flex items-center justify-center flex-col !m-2 sm:!m-0"
                />
            </ThemeProvider>
        </CacheProvider>
    )
}
