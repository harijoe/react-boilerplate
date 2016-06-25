/**
*
* Answer
*
*/

import React from 'react';
import NewNameButton from 'components/NewNameButton';

import styles from './styles.css';

function Answer(props) {
  return (
    <div className={ styles.answer }>
      <p className={styles.label}>The right answer was: </p>
      <h2 className={`animated fadeIn ${styles.h2}`}>{props.answer.name}</h2>
      <NewNameButton onFetchName={props.onFetchName} />
    </div>
  );
}

export default Answer;
