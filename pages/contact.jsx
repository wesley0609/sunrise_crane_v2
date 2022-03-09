
import { connect } from "react-redux";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

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
    const router = useRouter();

    const bannerMeta = useMemo(() => {
        return require(`../assets/json/meta/banner/${router.locale}/index.json`);
    }, [router]);

    const titleMapMeta = useMemo(() => {
        return require(`../assets/json/meta/contact/${router.locale}/titleMap.json`);
    }, [router]);

    const contactMeta = useMemo(() => {
        return require(`../assets/json/meta/contact/${router.locale}/index.json`);
    }, [router]);

    const meta = useMemo(() => {
        return {
            banner: bannerMeta.contact,
            titleMap: titleMapMeta,
            contact: contactMeta
        };
    }, [bannerMeta, titleMapMeta, contactMeta]);

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

                {
                    seo.contact.getAlternate(router).map((item, index) => {
                        return (
                            <link rel="alternate" hrefLang={item.hreflang} href={item.href} key={`alternate-${item.hreflang}`} />
                        );
                    })
                }
            </Head>

            <Contact banner={meta.banner} titleMap={meta.titleMap} contact={meta.contact} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
