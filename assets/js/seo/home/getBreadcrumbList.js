
import pkg from "../../../../package.json";

const app = () => {
    let obj = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": pkg.siteName,
                "item": pkg.siteUrl
            }
        ]
    };

    return {
        __html: JSON.stringify(obj)
    };
};

export default app;
