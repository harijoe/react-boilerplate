/*
 *
 * HomePage actions
 *
 */

import * as C from './constants';

export function nameFetchRequested() {
  return {
    type: C.NAME_FETCH_REQUESTED,
  };
}

export function nameFetchSucceeded(name) {
  return {
    type: C.NAME_FETCH_SUCCEEDED,
    name: name,
  };
}

export function nameFetchFailed(error) {
  return {
    type: C.NAME_FETCH_FAILED,
    error: error,
  };
}

export function nameImageLoaded() {
  return {
    type: C.NAME_IMAGE_LOADED,
  };
}

export function nameImageFailed() {
  return {
    type: C.NAME_IMAGE_FAILED,
    error: {
      name: 'ExceptionImageLoad',
      message: 'The image loading failed',
    },
  };
}

export function nameAnswerSubmitted(nameId, guess) {
  return {
    type: C.NAME_ANSWER_SUBMITTED,
    submission: {
      nameId,
      guess
    },
  };
}

export function nameAnswerSucceeded(result) {
  return {
    type: C.NAME_ANSWER_SUCCEEDED,
    result
  };
}

export function nameAnswerFailed(error) {
  return {
    type: C.NAME_ANSWER_FAILED,
    error,
  };
}

export function answerFetchSucceeded(answer) {
  return {
    type: C.ANSWER_FETCH_SUCCEEDED,
    answer,
  };
}

export function answerFetchFailed(error) {
  return {
    type: C.ANSWER_FETCH_FAILED,
    error,
  };
}
