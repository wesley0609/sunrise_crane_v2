
const app = (router) => {
    let arr = [];
    let seo = sunrise.seo;
    let locales = router.locales;

    for(let i = 0; i < locales.length; i ++){
        let locale = locales[i];

        if(locale == router.defaultLocale){
            arr.push({
                hreflang: "x-default",
                href: `${seo.default.siteUrl}/contact`
            });

            arr.push({
                hreflang: locale,
                href: `${seo.default.siteUrl}/contact`
            });
            
            continue;
        }

        arr.push({
            hreflang: locale,
            href: `${seo.default.siteUrl}/${locale}/contact`
        });
    }

    return arr;
};

export default app;
