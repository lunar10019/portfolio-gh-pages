import { createSlice } from "@reduxjs/toolkit";
import { State } from "./types";
import userData from "../user.json";

const initialState: State = userData;

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addName: (state, action) => {
      console.log("1231");
    },
  },
});

export const { addName } = profileSlice.actions;

export default profileSlice.reducer;
