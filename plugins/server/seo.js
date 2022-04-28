
const app = (ctx) => {
    try{
        global.sunrise = global.sunrise || {};

        let seoDefault = require(`../../assets/json/seo/${ctx.router.locale}/default.json`);
        let seoTitle = require(`../../assets/json/seo/${ctx.router.locale}/title.json`);
        let seoDescription = require(`../../assets/json/seo/${ctx.router.locale}/description.json`);
        let seoOther = require(`../../assets/json/seo/${ctx.router.locale}/other.json`);

        let seo = {
            lang: ctx.router.locale,
            default: seoDefault,
            title: seoTitle,
            description: seoDescription,
            other: seoOther
        };

        sunrise.seo = seo;

        return seo;
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
