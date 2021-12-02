
import { connect } from "react-redux";
import { useEffect, useMemo } from "react";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import bannerMeta from "../assets/json/meta/banner/index.json";
import galleryMeta from "../assets/json/meta/gallery/index.json";

import Gallery from "../components/gallery/index.jsx";

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
            banner: bannerMeta.gallery,
            gallery: galleryMeta
        };
    }, []);

    useEffect(() => {
        props.dispatchHeaderFocus("/gallery");
    }, [props]);
    
    return (
        <>
            <Head>
                <title key="title">{seo.gallery.getTitle()}</title>
                <meta name="description" content={seo.gallery.getDescription()} key="description" />
                <meta property="og:url" content={seo.gallery.getUrl()} key="og:url" />
                <meta property="og:title" content={seo.gallery.getTitle()} key="og:title" />
                <meta property="og:description" content={seo.gallery.getDescription()} key="og:description" />
                <link rel="canonical" href={seo.gallery.getUrl()} key="canonical" />
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.gallery.getBreadcrumbList()} key="BreadcrumbList"></script>
            </Head>

            <Gallery banner={meta.banner} gallery={meta.gallery} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
