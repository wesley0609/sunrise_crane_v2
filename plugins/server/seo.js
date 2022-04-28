
const app = (router) => {
    try{
        let seoDefault = require(`../../assets/json/seo/${router.locale}/default.json`);
        let seoTitle = require(`../../assets/json/seo/${router.locale}/title.json`);
        let seoDescription = require(`../../assets/json/seo/${router.locale}/description.json`);
        let seoOther = require(`../../assets/json/seo/${router.locale}/other.json`);

        let seo = {
            lang: router.locale,
            default: seoDefault,
            title: seoTitle,
            description: seoDescription,
            other: seoOther
        };

        return seo;
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
