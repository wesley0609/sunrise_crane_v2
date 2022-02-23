
const app = () => {
    let seo = sunrise.seo;

    let obj = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": seo.default.siteName,
                "item": seo.default.siteUrl
            }
        ]
    };

    return {
        __html: JSON.stringify(obj)
    };
};

export default app;
