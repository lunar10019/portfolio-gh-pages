import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slice";

const store = configureStore({
  reducer: profileReducer,
});

export default store;
