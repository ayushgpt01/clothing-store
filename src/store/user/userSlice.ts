import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserData } from "../../utils/firebase/firebase.utils";
import type { UserState } from "./userTypes";
import type { PayloadUserSignIn, PayloadUserSignUp } from "./userSaga";
const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "USER",
  initialState: INITIAL_STATE,
  reducers: {
    signInSuccess: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    signInFailed: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    checkUserSession: (state) => {
      state.isLoading = true;
    },
    googleSignInStart: (state) => {
      state.isLoading = true;
    },
    emailSignInStart: (state, action: PayloadAction<PayloadUserSignIn>) => {
      state.isLoading = true;
    },
    signUpUser: (state, action: PayloadAction<PayloadUserSignUp>) => {
      state.isLoading = true;
    },
    signUpFailed: (state, action: PayloadAction<Error>) => {
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
    signOutFailed: (state, action: PayloadAction<Error>) => {
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
