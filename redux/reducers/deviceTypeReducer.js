
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = "pc";

const deviceType = createAction("deviceType");

const app = createReducer(initialState, (builder) => {
    builder.addCase(deviceType, (state, action) => {
        return action.value;
    }).addDefaultCase((state, action) => {
        return state;
    });
});

export default app;


