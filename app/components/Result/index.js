/**
*
* Result
*
*/

import React from 'react';

import styles from './styles.css';

function Result(props) {
  if (props.result === null) {
    return false;
  }

  let view = props.result ? 'Right !' : 'Wrong !'; //To componentize

  return (
    <div className={ styles.result }>
      {view}
    </div>
  );
}

export default Result;
