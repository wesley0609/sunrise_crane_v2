
import { connect } from "react-redux";
import { useMemo } from "react";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import bannerMeta from "../assets/json/meta/banner/index.json";
import aboutMeta from "../assets/json/meta/about/index.json";

import About from "../components/about/index.jsx";

export const getStaticProps = async (context) => {
    return {
        props: {}
    };
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const App = (props) => {
    const meta = useMemo(() => {
        return {
            banner: bannerMeta.about,
            about: aboutMeta
        };
    }, []);

    return (
        <>
            <Head>
                <title key="title">{seo.about.getTitle()}</title>
                <meta name="description" content={seo.about.getDescription()} key="description" />
                <meta property="og:url" content={seo.about.getUrl()} key="og:url" />
                <meta property="og:title" content={seo.about.getTitle()} key="og:title" />
                <meta property="og:description" content={seo.about.getDescription()} key="og:description" />
                <link rel="canonical" href={seo.about.getUrl()} key="canonical" />
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.about.getBreadcrumbList()} key="BreadcrumbList"></script>
            </Head>

            <About banner={meta.banner} about={meta.about} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
