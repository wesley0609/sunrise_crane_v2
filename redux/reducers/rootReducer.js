
import { combineReducers } from "redux";

import resizeReducer from "./resizeReducer.js";
import deviceTypeReducer from "./deviceTypeReducer.js";

const app = combineReducers({
    resize: resizeReducer,
    deviceType: deviceTypeReducer
});

export default app;
