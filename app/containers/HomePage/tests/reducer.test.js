import expect from 'expect';
import homePageReducer from '../reducer';
import { fromJS } from 'immutable';
import * as A from '../actions'

describe('homePageReducer', () => {
  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(fromJS({
      loading: false,
      error: null,
      name: null,
      result: null,
      submission: null,
    }));
  });

  it('handles name request', () => {
    expect(homePageReducer(undefined, A.nameFetchRequested())).toEqual(fromJS({
      loading: true,
      error: null,
      name: null,
      result: null,
      submission: null,
    }));
  });

  it('handles name request success', () => {
    const name = fromJS({
      some: 'properties',
    });
    expect(homePageReducer(undefined, A.nameFetchSucceeded(name))).toEqual(fromJS({
      loading: false,
      error: null,
      name,
      result: null,
      submission: null,
    }));
  });

  it('handles name request failure', () => {
    const error = 'Some error';
    expect(homePageReducer(undefined, A.nameFetchFailed(error))).toEqual(fromJS({
      loading: false,
      error: error,
      name: null,
      result: null,
      submission: null,
    }));
  });

  it('handles name answer submission', () => {
    const nameId = 'Some id';
    const guess = 'Some guess';
    expect(homePageReducer(undefined, A.nameAnswerSubmitted(nameId, guess))).toEqual(fromJS({
      loading: true,
      error: null,
      name: null,
      result: null,
      submission: {
        nameId, guess
      },
    }));
  });

  it('handles name answer submission success', () => {
    const result = 'some result';
    expect(homePageReducer(undefined, A.nameAnswerSucceeded(result))).toEqual(fromJS({
      loading: false,
      error: null,
      name: null,
      result,
      submission: null,
    }));
  });

  it('handles name answer submission failure', () => {
    const error = 'Some error';
    expect(homePageReducer(undefined, A.nameAnswerFailed(error))).toEqual(fromJS({
      loading: false,
      error: error,
      name: null,
      result: null,
      submission: null,
    }));
  });
});
