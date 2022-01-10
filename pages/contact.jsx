
import { connect } from "react-redux";
import { useMemo } from "react";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import bannerMeta from "../assets/json/meta/banner/index.json";
import contactMeta from "../assets/json/meta/contact/index.json";

import Contact from "../components/contact/index.jsx";

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
            banner: bannerMeta.contact,
            contact: contactMeta
        };
    }, []);

    return (
        <>
            <Head>
                <title key="title">{seo.contact.getTitle()}</title>
                <meta name="description" content={seo.contact.getDescription()} key="description" />
                <meta property="og:url" content={seo.contact.getUrl()} key="og:url" />
                <meta property="og:title" content={seo.contact.getTitle()} key="og:title" />
                <meta property="og:description" content={seo.contact.getDescription()} key="og:description" />
                <link rel="canonical" href={seo.contact.getUrl()} key="canonical" />
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.contact.getBreadcrumbList()} key="BreadcrumbList"></script>
            </Head>

            <Contact banner={meta.banner} contact={meta.contact} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
