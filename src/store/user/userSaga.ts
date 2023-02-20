import { all, call, put, takeLatest } from "typed-redux-saga/macro";
import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

import {
  signInSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
} from "./userSlice";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInfo?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    if (userSnapshot) {
      yield* put(signInSuccess({ ...userSnapshot.data() }));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

type PayloadUserSignIn = {
  email: string;
  password: string;
};

export function* signInWithEmail({
  payload: { email, password },
}: PayloadAction<PayloadUserSignIn>) {
  try {
    const userCredential = yield* call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      yield* call(getSnapshotFromUserAuth, userCredential.user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

type PayloadUserSignUp = {
  email: string;
  password: string;
  displayName: string;
};

export function* signUpWithEmail({
  payload: { email, password, displayName },
}: PayloadAction<PayloadUserSignUp>) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      yield* call(getSnapshotFromUserAuth, userCredential.user, {
        displayName,
      });
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onEmailSignInStart() {
  yield* takeLatest("USER/emailSignInStart", signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield* takeLatest("USER/googleSignInStart", signInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest("USER/checkUserSession", isUserAuthenticated);
}

export function* onSignUpUser() {
  yield* takeLatest("USER/signUpUser", signUpWithEmail);
}

export function* onSignOutStart() {
  yield* takeLatest("USER/signOutStart", signOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpUser),
    call(onSignOutStart),
  ]);
}
