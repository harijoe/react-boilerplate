import expect from 'expect';
import * as A from '../actions';
import * as C from '../constants';

const SOME_NAME = 'some name';
const SOME_MESSAGE = 'some message';
const SOME_ID = 'some id';
const SOME_GUESS = 'some guess';
const SOME_RESULT = 'some result';

describe('HomePage actions', () => {
  describe('Name Fetch Action', () => {
    it('has a type of NAME_FETCH_REQUESTED', () => {
      const expected = {
        type: C.NAME_FETCH_REQUESTED,
      };
      expect(A.nameFetchRequested()).toEqual(expected);
    });
    it('has a type of NAME_FETCH_SUCCEEDED', () => {
      const expected = {
        type: C.NAME_FETCH_SUCCEEDED,
        name: SOME_NAME,
      };
      expect(A.nameFetchSucceeded(SOME_NAME)).toEqual(expected);
    });
    it('has a type of NAME_FETCH_FAILED', () => {
      const expected = {
        type: C.NAME_FETCH_FAILED,
        error: SOME_MESSAGE,
      };
      expect(A.nameFetchFailed(SOME_MESSAGE)).toEqual(expected);
    });
  });

  describe('Name Fetch Action', () => {
    it('has a type of NAME_ANSWER_SUBMITTED', () => {
      const expected = {
        type: C.NAME_ANSWER_SUBMITTED,
        submission: {
          nameId: SOME_ID,
          guess: SOME_GUESS,
        },
      };
      expect(A.nameAnswerSubmitted(SOME_ID, SOME_GUESS)).toEqual(expected);
    });
    it('has a type of NAME_ANSWER_SUCCEEDED', () => {
      const expected = {
        type: C.NAME_ANSWER_SUCCEEDED,
        result: SOME_RESULT
      };
      expect(A.nameAnswerSucceeded(SOME_RESULT)).toEqual(expected);
    });
    it('has a type of NAME_ANSWER_FAILED', () => {
      const expected = {
        type: C.NAME_ANSWER_FAILED,
        error: SOME_MESSAGE,
      };
      expect(A.nameAnswerFailed(SOME_MESSAGE)).toEqual(expected);
    });
  });
});
