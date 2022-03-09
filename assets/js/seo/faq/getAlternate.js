
const app = (router) => {
    let arr = [];
    let seo = sunrise.seo;
    let locales = router.locales;

    for(let i = 0; i < locales.length; i ++){
        let locale = locales[i];

        if(locale == router.defaultLocale){
            arr.push({
                hreflang: "x-default",
                href: `${seo.default.siteUrl}/faq`
            });

            arr.push({
                hreflang: locale,
                href: `${seo.default.siteUrl}/faq`
            });
            
            continue;
        }

        arr.push({
            hreflang: locale,
            href: `${seo.default.siteUrl}/${locale}/faq`
        });
    }

    return arr;
};

export default app;
