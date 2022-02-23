
import { connect } from "react-redux";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import Faq from "../components/faq/index.jsx";

export const getServerSideProps = async (context) => {
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

    const faqMeta = useMemo(() => {
        if(router.locale != router.defaultLocale){
            try{
                return require(`../assets/json/meta/faq/${router.locale}/index.json`);
            }
            catch(ex){
                return require("../assets/json/meta/faq/index.json");
            }
        }

        return require("../assets/json/meta/faq/index.json");
    }, [router]);

    const meta = useMemo(() => {
        return {
            banner: bannerMeta.faq,
            faq: faqMeta
        };
    }, [bannerMeta, faqMeta]);

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

                {
                    seo.faq.getAlternate(router).map((item, index) => {
                        return (
                            <link rel="alternate" hrefLang={item.hreflang} href={item.href} key={`alternate-${item.hreflang}`} />
                        );
                    })
                }
            </Head>

            <Faq banner={meta.banner} faq={meta.faq} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
