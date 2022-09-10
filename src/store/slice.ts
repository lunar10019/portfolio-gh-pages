import { createSlice } from "@reduxjs/toolkit";
import { State } from "./types";
import userData from "../user.json";

const initialState: State = userData;

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editName: (state, action) => {
      state.fullName = action.payload.fullName;
    },

    editAddress: (state, action) => {
      state.address = action.payload.address;
    },

    addSkill: (state, action) => {
      const newSkill = {
        id: state.skills.length + 1,
        name: action.payload.skill,
        years: null,
      };
      state.skills.push(newSkill);
    },

    deleteSkill: (state, action) => {
      state.skills = state.skills.filter((item) => item.id !== action.payload);
    },

    editExperience: (state, action) => {
      const objIndex = state.skills.findIndex(
        (obj) => obj.id === action.payload.id
      );
      const newYears = +action.payload.data.year;

      state.skills[objIndex].years = newYears;
    },
  },
});

export const { editName, editAddress, addSkill, deleteSkill, editExperience } =
  profileSlice.actions;

export default profileSlice.reducer;
