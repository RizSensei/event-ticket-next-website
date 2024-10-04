import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@@/redux/slice/auth";

export const rootReducer = combineReducers({
    user: authReducer,
})