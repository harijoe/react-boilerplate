import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => state => state.get('home');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePage
 */

const selectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
);

const selectName = () => createSelector(
  selectHomePage(),
  (substate) => substate.name
);

const selectSubmission = () => createSelector(
  selectHomePage(),
  (substate) => substate.submission
);

const selectLoading = () => createSelector(
  selectHomePage(),
  (substate) => substate.loading
);

const selectResult = () => createSelector(
  selectHomePage(),
  (substate) => substate.result
);

const selectStreak = () => createSelector(
  selectHomePage(),
  (substate) => substate.streak
);

const selectError = () => createSelector(
  selectHomePage(),
  (substate) => substate.error
);

const selectUUID = () => createSelector(
  selectHomePage(),
  (substate) => substate.uuid
);

const selectTries = () => createSelector(
  selectHomePage(),
  (substate) => {
    return substate.tries;
  }
);

const selectNameId = () => createSelector(
  selectName(),
  (name) => {
    return name.id;
  }
);

const selectAnswer = () => createSelector(
  selectHomePage(),
  (substate) => substate.answer
);

export default selectHomePage;
export {
  selectHomePageDomain,
  selectName,
  selectSubmission,
  selectLoading,
  selectResult,
  selectError,
  selectTries,
  selectStreak,
  selectNameId,
  selectUUID,
  selectAnswer,
};
