/**
*
* Answer
*
*/

import React from 'react';

import styles from './styles.css';

function Answer(props) {
  return (
    <div className={ styles.answer }>
      La bonne réponse était: {props.answer.name}
    </div>
  );
}

export default Answer;
