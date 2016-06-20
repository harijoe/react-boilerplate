/*
 *
 * HomePage
 *
 */

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
  S.selectTries(),
  S.selectError(),
  (loading, name, submission, result, answer, tries, error) =>
    ({ loading, name, submission, result, answer, tries, error })
);

function mapDispatchToProps(dispatch) {
  return {
    onFetchName: () => dispatch(A.nameFetchRequested()),
    onSubmitAnswer: (nameId, guess) => dispatch(A.nameAnswerSubmitted(nameId, guess)),
    onImageLoaded: () => dispatch(A.nameImageLoaded()),
    onImageFailed: () => dispatch(A.nameImageFailed()),
    onKeyPress: () => dispatch(A.keyPress()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
