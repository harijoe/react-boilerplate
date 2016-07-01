/**
*
* Streak
*
*/

import React from 'react';

import styles from './styles.css';

function Streak(props) {
  return (
    <div className={styles.streak}>
      {props.streak}
    </div>
  );
}

export default Streak;
