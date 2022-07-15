
import { useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import Service from "../components/service/index.jsx";

export const getServerSideProps = async (context) => {
    return {
        props: {}
    };
};

const App = (props) => {
    const router = useRouter();

    const bannerMeta = useMemo(() => {
        return require(`../assets/json/meta/banner/${router.locale}/index.json`);
    }, [router]);

    const serviceMeta = useMemo(() => {
        return require(`../assets/json/meta/service/${router.locale}/index.json`);
    }, [router]);

    const meta = useMemo(() => {
        return {
            banner: bannerMeta.service,
            service: serviceMeta
        };
    }, [bannerMeta, serviceMeta]);

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

                {
                    seo.service.getAlternate(router).map((item, index) => {
                        return (
                            <link rel="alternate" hrefLang={item.hreflang} href={item.href} key={`alternate-${item.hreflang}`} />
                        );
                    })
                }
            </Head>

            <Service banner={meta.banner} service={meta.service} />
        </>
    );
};

export default App;
