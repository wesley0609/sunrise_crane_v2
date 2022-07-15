
import { combineReducers } from "redux";

import readyReducer from "./readyReducer.js";
import resizeReducer from "./resizeReducer.js";
import deviceTypeReducer from "./deviceTypeReducer.js";

const app = combineReducers({
    ready: readyReducer,
    resize: resizeReducer,
    deviceType: deviceTypeReducer
});

export default app;
