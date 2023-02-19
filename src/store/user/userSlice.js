import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "USER",
  initialState: INITIAL_STATE,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    checkUserSession: (state) => {
      state.isLoading = true;
    },
    googleSignInStart: (state) => {
      state.isLoading = true;
    },
    emailSignInStart: (state) => {
      state.isLoading = true;
    },
    signUpUser: (state) => {
      state.isLoading = true;
    },
    signUpFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    signOutStart: (state) => {
      state.isLoading = true;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.isLoading = false;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  signInSuccess,
  signInFailed,
  googleSignInStart,
  checkUserSession,
  emailSignInStart,
  signUpUser,
  signOutStart,
  signOutSuccess,
  signOutFailed,
  signUpFailed,
} = userSlice.actions;

export default userSlice.reducer;
