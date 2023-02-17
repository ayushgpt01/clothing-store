import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "SET_CURRENT_USER",
  initialState: INITIAL_STATE,
  reducers: {
    userReducer: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { userReducer } = userSlice.actions;

export default userSlice.reducer;
