import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, stopWatchReducer, TodoReducer } from "../features";

export const store = configureStore({
    reducer : {
        todo : TodoReducer,
        counter : counterReducer,
        stopWatch : stopWatchReducer
    }
})