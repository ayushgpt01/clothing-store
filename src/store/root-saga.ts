import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./categories/categoriesSaga";
import { userSagas } from "./user/userSaga";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
