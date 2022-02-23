
const app = () => {
    try{
        window.sunrise = window.sunrise || {};

        sunrise.seo = __NEXT_DATA__.props.seo;
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
