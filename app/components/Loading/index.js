/**
*
* Loading
*
*/

import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './styles.css';

function Loading() {
  return (
    <div className={ styles.loading }>
      <CircularProgress />
    </div>
  );
}

export default Loading;
