/**
*
* NewNameButton
*
*/

import React from 'react';

import styles from './styles.css';
import {RaisedButton} from 'material-ui';
function NewNameButton(props) {

  let onClick = () => {
    resetName();
  };

  let resetName = () => {
    props.onFetchName();
  };

  return (
    <div className={ styles.newNameButton }>
      <button autoFocus onClick={onClick}>Again !</button>
      <RaisedButton autoFocus={true} label="Encore !" primary={true} style={style} />
    </div>
  );
}

export default NewNameButton;
