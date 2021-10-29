
import "normalize.css";

import { Provider } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

import store from "../redux/store.js";
import plugins from "../plugins/index.js";

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
            <GlobalStyle {...pageProps} />
            <Loading {...pageProps} />
            <Header {...pageProps} />
            <Component {...pageProps} />
            <Footer {...pageProps} />
        </Provider>
    );
};

export default App;
