
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    width: 1024,
    height: 768
};

const resize = createAction("resize");

const app = createReducer(initialState, (builder) => {
    builder.addCase(resize, (state, action) => {
        return action.value;
    }).addDefaultCase((state, action) => {
        return state;
    });
});

export default app;


