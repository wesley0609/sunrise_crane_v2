
const app = () => {
    try{
        window.sunrise = window.sunrise || {};

        sunrise.config = __NEXT_DATA__.props.config;
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
