
import { combineReducers } from "redux";

import readyReducer from "./readyReducer.js";
import resizeReducer from "./resizeReducer.js";
import deviceTypeReducer from "./deviceTypeReducer.js";
import headerReducer from "./header/rootReducer.js";

const app = combineReducers({
    ready: readyReducer,
    resize: resizeReducer,
    deviceType: deviceTypeReducer,
    header: headerReducer
});

export default app;
