/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import * as S from './selectors';
import * as A from './actions';
import { createSelector } from 'reselect';
import HomeView from 'components/HomeView';

const mapStateToProps = createSelector(
  S.selectLoading(),
  S.selectName(),
  S.selectSubmission(),
  S.selectResult(),
  S.selectAnswer(),
  S.selectError(),
  (loading, name, submission, result, answer, error) => ({ loading, name, submission, result, answer, error })
);

function mapDispatchToProps(dispatch) {
  return {
    onFetchName: () => dispatch(A.nameFetchRequested()),
    onSubmitAnswer: (nameId, guess) => dispatch(A.nameAnswerSubmitted(nameId, guess)),
    onImageLoaded: () => dispatch(A.nameImageLoaded()),
    onImageFailed: () => dispatch(A.nameImageFailed()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
