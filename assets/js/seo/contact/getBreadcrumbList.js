
import pkg from "../../../../package.json";
import title from "../../../json/seo/title.json";

import seo from "../index.js";

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
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": title.contact,
                "item": seo.contact.getUrl()
            }
        ]
    };

    return {
        __html: JSON.stringify(obj)
    };
};

export default app;
