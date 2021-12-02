
import { connect } from "react-redux";
import { useEffect, useMemo } from "react";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import bannerMeta from "../assets/json/meta/banner/index.json";
import serviceMeta from "../assets/json/meta/service/index.json";

import Service from "../components/service/index.jsx";

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
            banner: bannerMeta.service,
            service: serviceMeta
        };
    }, []);

    useEffect(() => {
        props.dispatchHeaderFocus("/service");
    }, [props]);

    return (
        <>
            <Head>
                <title key="title">{seo.service.getTitle()}</title>
                <meta name="description" content={seo.service.getDescription()} key="description" />
                <meta property="og:url" content={seo.service.getUrl()} key="og:url" />
                <meta property="og:title" content={seo.service.getTitle()} key="og:title" />
                <meta property="og:description" content={seo.service.getDescription()} key="og:description" />
                <link rel="canonical" href={seo.service.getUrl()} key="canonical" />
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.service.getBreadcrumbList()} key="BreadcrumbList"></script>
            </Head>

            <Service banner={meta.banner} service={meta.service} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
