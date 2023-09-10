import '@/styles/globals.css'
import {ThemeProvider} from "@mui/material";
import theme from "@/mui/theme";
import Layout from "@/components/layout/Layout";
import {ToastContainer} from "react-toastify";
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import Head from "next/head";
import axios from "axios";
import {AuthProvider} from "@/contexts/AuthContext";
import ProgressBar from "@badrap/bar-of-progress";
import {Router} from "next/router";
import {CartProvider} from "@/contexts/CartContext";
import {DefaultSeo, SiteLinksSearchBoxJsonLd} from "next-seo";

const progress = new ProgressBar({
    size: 2,
    color: "#2563EB",
    className: "bar-of-progress",
    delay: 100,
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})

const contextClass = {
    success: "bg-green-100 text-green-700",
    error: "bg-red text-center rounded-xl w-fit",
    info: "bg-[#2F70EF] text-center rounded-xl w-fit",
    warning: "bg-orange-400",
};

axios.defaults.baseURL = "https://backend-bibinabat.iran.liara.run/api"

export default function App({Component, pageProps}) {
    return (
        <>
            <CartProvider>
                <AuthProvider>
                    <Head>
                        <link rel="icon" href="/favicon.jpg"/>
                        <link rel="shortcut icon"/>
                    </Head>
                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <Layout>
                                <DefaultSeo
                                    openGraph={{
                                        type: "website",
                                        locale: "fa_IR",
                                        siteName: "بی بی نبات",
                                    }}
                                    twitter={{
                                        cardType: "summary_large_image",
                                        site: "@https://twitter.com/bibinabat_ir",
                                        handle: "@https://twitter.com/bibinabat_ir"
                                    }}
                                />
                                <SiteLinksSearchBoxJsonLd url="https://bibinabat.com" potentialActions={[
                                    {
                                        queryInput: "required name=search_term_string",
                                        target: "https://bibinabat.com/?s={search_term_string}"
                                    }
                                ]}/>
                                <Component {...pageProps} />
                            </Layout>
                            <ToastContainer
                                toastClassName={({type}) => contextClass[type || "default"] +
                                    " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer mb-2"}
                                className="!w-full flex flex-col items-center justify-center !p-3 sm:!p-0"
                                position="top-center"
                                icon={false}
                                closeButton={false}
                            />
                        </ThemeProvider>
                    </CacheProvider>
                </AuthProvider>
            </CartProvider>
        </>
    )
}
