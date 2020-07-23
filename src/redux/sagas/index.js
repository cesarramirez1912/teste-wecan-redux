import { put, takeLatest, call, all } from "redux-saga/effects";

function* fetchData() {
  const response = yield fetch("https://randomuser.me/api");
  const json = yield response.json();
  yield put({ type: "RECEIVE_API_DATA", data: json.info });
}

function* actionWatcher() {
  yield takeLatest("REQUEST_API_DATA", fetchData);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
