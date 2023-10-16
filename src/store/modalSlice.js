import { createSlice } from "@reduxjs/toolkit";

const modalReducer = createSlice({
  name: "modalReducer",
  initialState: {
    openModal: false,
    profileModal: false,
  },
  reducers: {
    openModalFunc: (state, action) => {
      state.openModal = action.payload;
    },
    openProfileModal: (state, action) => {
      state.profileModal = action.payload;
    },
  },
});

export const { openModalFunc, openProfileModal } = modalReducer.actions;
export default modalReducer;
