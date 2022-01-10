
import { connect } from "react-redux";
import { useMemo } from "react";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import bannerMeta from "../assets/json/meta/banner/index.json";
import faqMeta from "../assets/json/meta/faq/index.json";

import Faq from "../components/faq/index.jsx";

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
            banner: bannerMeta.faq,
            faq: faqMeta
        };
    }, []);

    return (
        <>
            <Head>
                <title key="title">{seo.faq.getTitle()}</title>
                <meta name="description" content={seo.faq.getDescription()} key="description" />
                <meta property="og:url" content={seo.faq.getUrl()} key="og:url" />
                <meta property="og:title" content={seo.faq.getTitle()} key="og:title" />
                <meta property="og:description" content={seo.faq.getDescription()} key="og:description" />
                <link rel="canonical" href={seo.faq.getUrl()} key="canonical" />
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.faq.getBreadcrumbList()} key="BreadcrumbList"></script>
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.faq.getFAQPage(meta.faq)} key="FAQPage"></script>
            </Head>

            <Faq banner={meta.banner} faq={meta.faq} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
