
const app = (contact) => {
    let seo = sunrise.seo;
    let url = seo.default.siteUrl;
    let fullAddress = contact.fullAddress;

    let obj = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": seo.default.title,
        "url": url,
        "logo": `${url}/logo.svg`,
        "image": `${url}/share.jpg`,
        "email": `mailto:${contact.email}`,
        "telephone": contact.telephone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": fullAddress.address,
            "addressLocality": fullAddress.district,
            "addressRegion": fullAddress.county,
            "postalCode": fullAddress.postal,
            "addressCountry": fullAddress.country
        }
    };

    return {
        __html: JSON.stringify(obj)
    };
};

export default app;
