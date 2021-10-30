
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
                <meta property="og:url" content={pkg.siteUrl} key="og:url" />
                <meta property="og:title" content={pkg.title} key="og:title" />
                <meta property="og:description" content={pkg.description} key="og:description" />
                <link rel="canonical" href={pkg.siteUrl} key="canonical" />
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
