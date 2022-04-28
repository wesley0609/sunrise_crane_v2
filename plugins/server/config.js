
import _ from "lodash";

import common from "../../assets/json/config/config.common.json";
import dev from "../../assets/json/config/config.dev.json";
import prod from "../../assets/json/config/config.prod.json";

const app = () => {
    try{
        let target = null;

        if(process.env.NEXT_PUBLIC_ENV == "development"){
            target = dev;
        }
        else{
            target = prod;
        }
        
        let config = _.extend(common, target);
        
        return config;
    }
    catch(ex){
        console.log(ex.stack);
    }
};

export default app;
