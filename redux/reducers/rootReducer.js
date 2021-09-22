
import { combineReducers } from "redux";

import routerReducer from "./routerReducer.js";
import resizeReducer from "./resizeReducer.js";
import readyReducer from "./readyReducer.js";
import deviceTypeReducer from "./deviceTypeReducer.js";
import headerReducer from "./header/rootReducer.js";

const app = combineReducers({
    router: routerReducer,
    resize: resizeReducer,
    ready: readyReducer,
    deviceType: deviceTypeReducer,
    header: headerReducer
});

export default app;
