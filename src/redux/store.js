import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './modeSlice.js';
import timeReducer from './timeSlice.js';
import clockTimeReducer from './clockTimeSlice.js';
import timeStateReducer from './timeStateSlice.js';
import playStateReducer from "./playStateSlice.js";
import actionStateReducer from "./actionStateSlice.js";


export const store = configureStore({
    reducer: {
        mode: modeReducer,
        time: timeReducer,
        clockTime: clockTimeReducer,
        timeState: timeStateReducer,
        playState: playStateReducer,
        actionState: actionStateReducer

    }
})