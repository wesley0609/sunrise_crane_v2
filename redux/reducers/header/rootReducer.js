
import { combineReducers } from "redux";

import languagesBalloonTriggerReducer from "./languagesBalloonTriggerReducer.js";

const app = combineReducers({
    languagesBalloonTrigger: languagesBalloonTriggerReducer
});

export default app;
