
const app = () => {
    try{
        window.sunrise = window.sunrise || [];
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
