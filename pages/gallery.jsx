
import { useRouter } from "next/router";
import Head from "next/head";

import seo from "../assets/js/seo/index.js";

import Gallery from "../components/gallery/index.jsx";

export const getServerSideProps = async (context) => {
    return {
        props: {}
    };
};

const App = (props) => {
    const router = useRouter();

    const bannerMeta = require(`../assets/json/meta/banner/${router.locale}/index.json`);
    const galleryMeta = require(`../assets/json/meta/gallery/${router.locale}/index.json`);

    const meta = {
        banner: bannerMeta.gallery,
        gallery: galleryMeta
    };
    
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

                {
                    seo.gallery.getAlternate(router).map((item, index) => {
                        return (
                            <link rel="alternate" hrefLang={item.hreflang} href={item.href} key={`alternate-${item.hreflang}`} />
                        );
                    })
                }
            </Head>

            <Gallery banner={meta.banner} gallery={meta.gallery} />
        </>
    );
};

export default App;
