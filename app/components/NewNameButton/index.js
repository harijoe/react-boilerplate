/**
*
* NewNameButton
*
*/

import React from 'react';

import styles from './styles.css';
import {RaisedButton} from 'material-ui';

function NewNameButton(props) {

  const resetName = () => {
    props.onFetchName();
  };

  let onClick = () => {
    resetName();
  };

  return (
    <div className={`animated fadeIn ${styles.newNameButton}`}>
      <RaisedButton onClick={onClick} autoFocus label="Again !" primary />
    </div>
  );
}

NewNameButton.propTypes = {
  onFetchName: React.PropTypes.func.isRequired,
};

export default NewNameButton;
