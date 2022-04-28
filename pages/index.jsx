
import { connect } from "react-redux";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

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
    return {};
};

const App = (props) => {
    const router = useRouter();

    const bannerMeta = useMemo(() => {
        return require(`../assets/json/meta/banner/${router.locale}/index.json`);
    }, [router]);

    const serviceMeta = useMemo(() => {
        return require(`../assets/json/meta/service/${router.locale}/index.json`);
    }, [router]);

    const homeMeta = useMemo(() => {
        return require(`../assets/json/meta/home/${router.locale}/index.json`);
    }, [router]);

    const clientMeta = useMemo(() => {
        return require(`../assets/json/meta/client/${router.locale}/index.json`);
    }, [router]);

    const contactMeta = useMemo(() => {
        return require(`../assets/json/meta/contact/${router.locale}/index.json`);
    }, [router]);

    const meta = useMemo(() => {
        return {
            banner: bannerMeta.home,
            service: serviceMeta.content,
            home: homeMeta,
            client: clientMeta.content,
            contact: contactMeta.content
        };
    }, [bannerMeta, serviceMeta, homeMeta, clientMeta, contactMeta]);

    return (
        <>
            <Head>
                <title key="title">{seo.home.getTitle()}</title>
                <meta name="description" content={seo.home.getDescription()} key="description" />
                <meta property="og:url" content={seo.home.getUrl()} key="og:url" />
                <meta property="og:title" content={seo.home.getTitle()} key="og:title" />
                <meta property="og:description" content={seo.home.getDescription()} key="og:description" />
                <link rel="canonical" href={seo.home.getUrl()} key="canonical" />
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.home.getOrganization(meta.contact)} key="Organization"></script>
                <script type="application/ld+json" dangerouslySetInnerHTML={seo.home.getBreadcrumbList()} key="BreadcrumbList"></script>

                {
                    seo.home.getAlternate(router).map((item, index) => {
                        return (
                            <link rel="alternate" hrefLang={item.hreflang} href={item.href} key={`alternate-${item.hreflang}`} />
                        );
                    })
                }
            </Head>

            <Home banner={meta.banner} service={meta.service} home={meta.home} client={meta.client} />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
