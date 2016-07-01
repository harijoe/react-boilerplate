/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';

const initialState = fromJS({
  loading: true,
  error: null,
  name: null,
  result: null,
  submission: null,
  answer: null,
  tries: C.INITIAL_TRIES_NB
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case C.NAME_FETCH_REQUESTED:
      return state.merge(initialState)
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
        .update('tries', (value) => --value);
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
    default:
      return state;
  }
}

export default homePageReducer;
