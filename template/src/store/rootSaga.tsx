import { all } from "redux-saga/effects";
import homeSaga from "../redux/sagas/homeSaga";

export default function* rootSaga() {
  yield all([homeSaga()]);
}
