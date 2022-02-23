
import { connect } from "react-redux";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import About from "../components/about/index.jsx";

export const getInitialProps = async (context) => {
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
    const router = useRouter();

    const bannerMeta = useMemo(() => {
        if(router.locale != router.defaultLocale){
            try{
                return require(`../assets/json/meta/banner/${router.locale}/index.json`);
            }
            catch(ex){
                return require("../assets/json/meta/banner/index.json");
            }
        }

        return require("../assets/json/meta/banner/index.json");
    }, [router]);

    const aboutMeta = useMemo(() => {
        if(router.locale != router.defaultLocale){
            try{
                return require(`../assets/json/meta/about/${router.locale}/index.json`);
            }
            catch(ex){
                return require("../assets/json/meta/about/index.json");
            }
        }

        return require("../assets/json/meta/about/index.json");
    }, [router]);

    const meta = useMemo(() => {
        return {
            banner: bannerMeta.about,
            about: aboutMeta
        };
    }, [bannerMeta, aboutMeta]);

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

                {
                    seo.about.getAlternate(router).map((item, index) => {
                        return (
                            <link rel="alternate" hrefLang={item.hreflang} href={item.href} key={`alternate-${item.hreflang}`} />
                        );
                    })
                }
            </Head>

            <About banner={meta.banner} about={meta.about} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
