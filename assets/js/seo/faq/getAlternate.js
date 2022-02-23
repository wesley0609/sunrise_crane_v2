
const app = (router) => {
    let arr = [];
    let seo = sunrise.seo;
    let locales = router.locales;

    arr.push({
        hreflang: "x-default",
        href: `${seo.default.siteUrl}/faq`
    });

    for(let i = 0; i < locales.length; i ++){
        let locale = locales[i];

        arr.push({
            hreflang: locale,
            href: `${seo.default.siteUrl}/${locale}/faq`
        });
    }

    return arr;
};

export default app;
