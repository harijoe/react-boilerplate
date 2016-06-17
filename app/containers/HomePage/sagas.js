import { call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Api from 'services/clients/Api';
import * as A from './actions';
import * as C from './constants';
import { selectTries, selectNameId, selectResult } from './selectors';

// Individual exports for testing
export function* fetchName() {
  const response = yield call(Api.fetchName);
  if (!response.error) {
    yield put(A.nameFetchSucceeded(response));
  } else {
    yield put(A.nameFetchFailed(response.error));
  }
}

export function* fetchNameSaga() {
  yield* takeEvery(C.NAME_FETCH_REQUESTED, fetchName);
}

export function* submitNameAnswer(action) {
  const triesNb = yield select(selectTries());
  if (triesNb <= 0) {
    return;
  }
  const response = yield call(Api.submitNameAnswer, action.submission);
  if (!response.error) {
    yield put(A.nameAnswerSucceeded(response.result));
  } else {
    yield put(A.nameAnswerFailed(response.error));
  }
}

export function* submitNameAnswerSaga() {
  yield* takeEvery(C.NAME_ANSWER_SUBMITTED, submitNameAnswer);
}

export function* checkTriesNb() {
  const triesNb = yield select(selectTries());
  if (triesNb === 0) {
    const nameId = yield select(selectNameId());
    const response = yield call(Api.fetchAnswer, nameId);
    if (!response.error) {
      yield put(A.answerFetchSucceeded(response));
    } else {
      yield put(A.answerFetchFailed(response.error));
    }
  }
}

export function* resetOnSuccess() {
  console.log('on Success');
  const result = yield select(selectResult());
  if (result) {
    yield put(A.nameFetchRequested());
  }
}

export function* onAnswerSuccess() {
  console.log('hello');
  yield* resetOnSuccess();
  yield* checkTriesNb();
}

export function* handleAnswerSuccessSaga() {
  yield* takeEvery(C.NAME_ANSWER_SUCCEEDED, onAnswerSuccess);
}

// All sagas to be loaded
export default [
  fetchNameSaga,
  submitNameAnswerSaga,
  handleAnswerSuccessSaga,
];
