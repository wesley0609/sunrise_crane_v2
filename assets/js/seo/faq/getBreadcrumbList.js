
import seo from "../index.js";

const app = () => {
    let _seo = sunrise.seo;

    let obj = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": _seo.default.siteName,
                "item": _seo.default.siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": _seo.title.faq,
                "item": seo.faq.getUrl()
            }
        ]
    };

    return {
        __html: JSON.stringify(obj)
    };
};

export default app;
