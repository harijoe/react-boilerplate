/**
 * Test  sagas
 */

import expect from 'expect';
import { take, call, put, select, fork } from 'redux-saga/effects';
import { fetchNameSaga, fetchName, submitNameAnswer, submitNameAnswerSaga } from '../sagas';
import Api from 'services/clients/Api';
import {nameFetchSucceeded, nameFetchFailed, nameAnswerSucceeded, nameAnswerFailed} from '../actions';
import { NAME_FETCH_REQUESTED, NAME_ANSWER_SUBMITTED } from '../constants';

const fetchNameGeneratorSaga = fetchNameSaga();
let fetchNameGenerator = fetchName();
let submitNameAnswerGeneratorSaga = submitNameAnswerSaga();
let submitNameAnswerGenerator = submitNameAnswer();

describe('fetchNameSaga', () => {
  it('should call fetchName on each NAME_FETCH_REQUESTED action', () => {

    expect(fetchNameGeneratorSaga.next(take(NAME_FETCH_REQUESTED)).value).toEqual(take(NAME_FETCH_REQUESTED));
    expect(fetchNameGeneratorSaga.next().value).toEqual(fork(fetchName, undefined));
  });
});

describe('fetchName', () => {
  beforeEach(() => {
    fetchNameGenerator = fetchName();
  });

  it('should dispatch the nameFetchSucceeded action if it requests the data successfully', () => {
    const response = {
      label: 'some name',
      imageURI: 'some image url'
    };

    expect(fetchNameGenerator.next().value).toEqual(call(Api.fetchName));
    expect(fetchNameGenerator.next(response).value).toEqual(put(nameFetchSucceeded(response)));
  });

  it('should dispatch the nameFetchFailed action if an error occured', () => {
    const response = {
      error: 'Some error',
    };
    expect(fetchNameGenerator.next().value).toEqual(call(Api.fetchName));
    expect(fetchNameGenerator.next(response).value).toEqual(put(nameFetchFailed(response.error)));
  });
});

describe('submitNameAnswer', () => {
  it('should call nameAnswerSubmitted on each NAME_ANSWER_SUBMITTED action', () => {

    expect(submitNameAnswerGeneratorSaga.next(take(NAME_ANSWER_SUBMITTED)).value).toEqual(take(NAME_ANSWER_SUBMITTED));
    expect(submitNameAnswerGeneratorSaga.next().value).toEqual(fork(submitNameAnswer, undefined));
  });
});

describe('fetchName', () => {
  const submission = {
    id: 'some id',
    guess: 'some guess'
  };
  const action = {
    type: 'some type',
    submission
  };

  beforeEach(() => {
    submitNameAnswerGenerator = submitNameAnswer(action);
  });

  it('should dispatch the nameAnswerSucceeded action if it requests the data successfully', () => {
    const response = {
      result: true,
    };

    expect(submitNameAnswerGenerator.next().value).toEqual(call(Api.submitNameAnswer, submission));
    expect(submitNameAnswerGenerator.next(response).value).toEqual(put(nameAnswerSucceeded(response)));
  });

  it('should dispatch the nameAnswerFailed action if an error occured', () => {
    const response = {
      error: 'Some error',
    };
    expect(submitNameAnswerGenerator.next().value).toEqual(call(Api.submitNameAnswer, submission));
    expect(submitNameAnswerGenerator.next(response).value).toEqual(put(nameAnswerFailed(response.error)));
  });
});