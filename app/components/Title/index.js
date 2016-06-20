/**
*
* Title
*
*/

import React from 'react';

import styles from './styles.css';

function Title(props) {
  return (
    <div className={styles.title}>
      <h1 className={styles.h1}>{props.children}</h1>
    </div>
  );
}

export default Title;
