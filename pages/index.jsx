
import { connect } from "react-redux";
import { useEffect, useMemo } from "react";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import bannerMeta from "../assets/json/meta/banner/index.json";
import homeMeta from "../assets/json/meta/home/index.json";
import serviceMeta from "../assets/json/meta/service/index.json";
import clientMeta from "../assets/json/meta/client/index.json";

import Home from "../components/home/index.jsx";

export const getStaticProps = async (context) => {
    return {
        props: {}
    };
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchHeaderFocus: (value) => {
            dispatch({
                type: "header/focus",
                value: value
            });
        }
    };
};

const App = (props) => {
    const meta = useMemo(() => {
        return {
            banner: bannerMeta["home"],
            service: serviceMeta["service"],
            home: homeMeta,
            client: clientMeta["client"]
        }
    }, []);

    useEffect(() => {
        props.dispatchHeaderFocus("/");
    }, [props]);

    return (
        <>
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.home.getOrganization()} key="Organization"></script>
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.home.getBreadcrumbList()} key="BreadcrumbList"></script>
            </Head>

            <Home banner={meta.banner} service={meta.service} home={meta.home} client={meta.client} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
