
import { combineReducers } from "redux";

import focusReducer from "./focusReducer.js";

const app = combineReducers({
    focus: focusReducer
});

export default app;
