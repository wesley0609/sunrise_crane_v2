
import "normalize.css";

import { Provider } from "react-redux";
import { useEffect } from "react";
import Head from "next/head";

import store from "../redux/store.js";
import plugins from "../plugins/index.js";

import GlobalStyle from "../assets/css/global.jsx";
import Loading from "../components/loading/index.jsx";
import Header from "../components/header/index.jsx";
import Footer from "../components/footer/index.jsx";

if(process.title == "browser"){
    plugins.client.sunrise();
    plugins.client.dataLayer();
    plugins.client.resize();
    plugins.client.deviceType();
}

const App = ({Component, pageProps, ...etc}) => {
    const seo = plugins.server.seo(etc.router);
    const config = plugins.server.config();

    sunrise.seo = seo;
    sunrise.config = config;

    useEffect(() => {
        store.dispatch({
            type: "ready",
            value: true
        });
    }, []);

    return (
        <Provider store={store}>
            <Head>
                <title key="title">{seo.default.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" key="viewport" />
                <meta name="description" content={seo.default.description} key="description" />
                <meta name="author" content={seo.default.author} key="author" />
                <meta name="keywords" content={seo.default.keywords.join(",")} key="keywords" />
                <meta property="og:type" content="website" key="og:type" />
                <meta property="og:site_name" content={seo.default.siteName} key="og:site_name" />
                <meta property="og:image" content={`${seo.default.siteUrl}/share.jpg`} key="og:image" />
                <meta property="og:image:width" content="1080" key="og:image:width" />
                <meta property="og:image:height" content="566" key="og:image:height" />
                <meta property="og:url" content={seo.default.siteUrl} key="og:url" />
                <meta property="og:title" content={seo.default.title} key="og:title" />
                <meta property="og:description" content={seo.default.description} key="og:description" />
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
