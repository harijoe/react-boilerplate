/**
*
* NewNameButton
*
*/

import React from 'react';

import styles from './styles.css';

function NewNameButton(props) {

  let onClick = () => {
    resetName();
  };

  let resetName = () => {
    props.onFetchName();
  };

  return (
    <div className={ styles.newNameButton }>
      <button onClick={onClick}>Again !</button>
    </div>
  );
}

export default NewNameButton;
