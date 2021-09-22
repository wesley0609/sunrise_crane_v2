
import _ from "lodash";

import common from "../../assets/json/config/config.common.json";
import dev from "../../assets/json/config/config.dev.json";
import prod from "../../assets/json/config/config.prod.json";

const app = () => {
    try{
        window.sunrise = window.sunrise || {};

        let env = process.env.NEXT_PUBLIC_ENV;
        let target = null;
        let config = null;

        if(env == "development"){
            target = dev;
        }
        else{
            target = prod;
        }
        
        config = _.extend(common, target);
        sunrise.config = config;
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
