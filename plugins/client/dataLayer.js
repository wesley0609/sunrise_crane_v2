
const app = () => {
    try{
        window.dataLayer = window.dataLayer || [];
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
