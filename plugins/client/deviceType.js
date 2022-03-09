
import store from "../../redux/store.js";

const app = () => {
    try{
        let resize = null;

        store.subscribe(() => {
            if(store.getState().ready){
                let _resize = store.getState().resize;

                if(resize != _resize){
                    resize = _resize;

                    let dispatch = (deviceType) => {
                        store.dispatch({
                            type: "deviceType",
                            value: deviceType
                        });
                    };

                    if(resize.width <= 414){
                        dispatch("mobile");
                    }
                    else if(resize.width <= 768){
                        dispatch("pad");
                    }
                    else{
                        dispatch("pc");
                    }
                }
            }
        });
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
