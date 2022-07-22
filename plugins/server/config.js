
import _ from "lodash";

import common from "../../assets/json/config/common.json";
import dev from "../../assets/json/config/dev.json";
import prod from "../../assets/json/config/prod.json";

const app = () => {
    try{
        global.sunrise = global.sunrise || {};

        let target = null;

        if(process.env.NEXT_PUBLIC_ENV == "development"){
            target = dev;
        }
        else{
            target = prod;
        }
        
        let config = _.extend(common, target);
        
        sunrise.config = config;

        return config;
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
