
const app = (ctx) => {
    try{
        global.sunrise = global.sunrise || {};

        let seoDefault = null;
        let seoTitle = null;
        let seoDescription = null;
        let seoOther = null;

        if(ctx.router.locale != ctx.router.defaultLocale){
            try{
                seoDefault = require(`../../assets/json/seo/${ctx.router.locale}/default.json`);
                seoTitle = require(`../../assets/json/seo/${ctx.router.locale}/title.json`);
                seoDescription = require(`../../assets/json/seo/${ctx.router.locale}/description.json`);
                seoOther = require(`../../assets/json/seo/${ctx.router.locale}/other.json`);
            }
            catch(ex){
                seoDefault = require("../../assets/json/seo/default.json");
                seoTitle = require("../../assets/json/seo/title.json");
                seoDescription = require("../../assets/json/seo/description.json");
                seoOther = require("../../assets/json/seo/other.json");
            }
        }
        else{
            seoDefault = require("../../assets/json/seo/default.json");
            seoTitle = require("../../assets/json/seo/title.json");
            seoDescription = require("../../assets/json/seo/description.json");
            seoOther = require("../../assets/json/seo/other.json");
        }

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
