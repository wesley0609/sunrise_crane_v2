
import "normalize.css";

import { Provider } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import store from "../redux/store.js";
import plugins from "../plugins/index.js";

import pkg from "../package.json";

import GlobalStyle from "../assets/css/global.jsx";
import Loading from "../components/loading/index.jsx";
import Header from "../components/header/index.jsx";
import Footer from "../components/footer/index.jsx";

if(process.title == "browser"){
    plugins.client.config();
    plugins.client.resize();
    plugins.client.deviceType();
    plugins.client.gtm();
    plugins.client.dataLayer();
}

const App = ({Component, pageProps, ...etc}) => {
    const router = useRouter();

    useEffect(() => {
        store.dispatch({
            type: "router",
            value: router
        });
    }, [router]);

    useEffect(() => {
        store.dispatch({
            type: "ready",
            value: true
        });
    }, []);

    return (
        <Provider store={store}>
            <Head>
                <title key="title">{pkg.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" key="viewport" />
                <meta name="description" content={pkg.description} key="description" />
                <meta name="author" content={pkg.author} key="author" />
                <meta name="keywords" content={pkg.keywords.join(",")} key="keywords" />
                <meta name="theme-color" content="#121212" key="themeColor" />
                <meta property="og:url" content={pkg.siteUrl} key="og:url" />
                <meta property="og:type" content="website" key="og:type" />
                <meta property="og:title" content={pkg.title} key="og:title" />
                <meta property="og:description" content={pkg.description} key="og:description" />
                <meta property="og:site_name" content={pkg.siteName} key="og:site_name" />
                <meta property="og:image" content={`${pkg.siteUrl}/share.jpg`} key="og:image" />
                <meta property="og:image:width" content="1080" key="og:image:width" />
                <meta property="og:image:height" content="566" key="og:image:heigh" />
                <link rel="canonical" href={pkg.siteUrl} key="canonical" />
                <link rel="manifest" href="/manifest.json" key="manifest" />
                <link rel="shortcut icon" type="image/png" size="48x48" href="/favicon.png" key="shortcutIcon" />
                <link rel="icon" type="image/png" size="192x192" href="/icon/icon@192.png" key="icon" />
                <link rel="apple-touch-icon" type="image/png" size="512x512" href="/icon/icon@512.png" key="appleTouchIcon" />
            </Head>

            <GlobalStyle {...pageProps} />
            <Loading {...pageProps} />
            <Header {...pageProps} />
            <Component {...pageProps} />
            <Footer {...pageProps} />
        </Provider>
    );
};

export default App;
