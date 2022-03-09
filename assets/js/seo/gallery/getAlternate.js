
const app = (router) => {
    let arr = [];
    let seo = sunrise.seo;
    let locales = router.locales;

    for(let i = 0; i < locales.length; i ++){
        let locale = locales[i];

        if(locale == router.defaultLocale){
            arr.push({
                hreflang: "x-default",
                href: `${seo.default.siteUrl}/gallery`
            });

            arr.push({
                hreflang: locale,
                href: `${seo.default.siteUrl}/gallery`
            });
            
            continue;
        }

        arr.push({
            hreflang: locale,
            href: `${seo.default.siteUrl}/${locale}/gallery`
        });
    }

    return arr;
};

export default app;
