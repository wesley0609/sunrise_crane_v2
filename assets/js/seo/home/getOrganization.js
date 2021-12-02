
import pkg from "../../../../package.json";
import contactMeta from "../../../json/meta/contact/index.json";

const app = () => {
    let url = pkg.siteUrl;
    let contact = contactMeta.contact;
    let twAddress = contact.fullAddress.tw;

    let obj = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": pkg.title,
        "url": url,
        "logo": `${url}/logo.svg`,
        "image": `${url}/share.jpg`,
        "email": `mailto:${contact.email}`,
        "telephone": contact.phoneNumber.local,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": twAddress.address,
            "addressLocality": twAddress.district,
            "addressRegion": twAddress.county,
            "postalCode": contact.fullAddress.postal,
            "addressCountry": twAddress.country
        }
    };

    return {
        __html: JSON.stringify(obj)
    };
};

export default app;
