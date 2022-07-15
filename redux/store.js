
import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers/rootReducer.js";

const store = configureStore({
    reducer: reducers
});

export default store;
