/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';
import UUIDGenerator from 'services/utils/UUIDGenerator';

const initialState = fromJS({
  loading: true,
  error: null,
  name: null,
  result: null,
  submission: null,
  answer: null,
  streak: 0,
  tries: C.INITIAL_TRIES_NB,
});

const resetState = fromJS({
  loading: true,
  error: null,
  name: null,
  result: null,
  submission: null,
  answer: null,
  tries: C.INITIAL_TRIES_NB,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case C.NAME_FETCH_REQUESTED:
      return state.merge(resetState);
    case C.NAME_FETCH_SUCCEEDED:
      return state
        .set('error', null)
        .set('name', action.name);
    case C.NAME_FETCH_FAILED:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('result', null);
    case C.NAME_IMAGE_LOADED:
      return state
        .set('loading', false);
    case C.NAME_IMAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', action.error);
    case C.NAME_ANSWER_SUBMITTED:
      return state
        .set('error', null)
        .set('submission', fromJS(action.submission));
    case C.NAME_ANSWER_SUCCEEDED:
      return state
        .set('error', null)
        .set('result', action.result)
        .set('answer', action.answer)
        .set('streak', action.streak)
        .update('tries', (value) => value - 1);
    case C.NAME_ANSWER_FAILED:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('result', null);
    case C.ANSWER_FETCH_SUCCEEDED:
      return state
        .set('answer', action.answer)
        .set('error', null)
        .set('loading', false);
    case C.ANSWER_FETCH_FAILED:
      return state
        .set('answer', null)
        .set('error', action.error)
        .set('loading', false);
    case C.KEY_PRESS:
      return state
        .set('result', null);
    case C.RESET_UUID:
      return state
        .set('uuid', UUIDGenerator());
    default:
      return state;
  }
}

export default homePageReducer;
