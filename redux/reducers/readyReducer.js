
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = false;

const ready = createAction("ready");

const app = createReducer(initialState, (builder) => {
    builder.addCase(ready, (state, action) => {
        return action.value;
    }).addDefaultCase((state, action) => {
        return state;
    });
});

export default app;

