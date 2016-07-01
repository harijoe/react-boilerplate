import React from 'react';
import NewNameButton from 'components/NewNameButton';

import styles from './styles.css';

function Answer(props) {
  const label = props.success ? 'Well done!' : 'The right answer was: ';
  const successStyle = props.success ? styles.success : null;

  return (
    <div className={styles.answer}>
      <p className={styles.label}>{label}</p>
      <h2 className={`animated fadeIn ${styles.h2} ${successStyle}`}>{props.answer.name}</h2>
      {!props.success && <NewNameButton onFetchName={props.onFetchName} />}
    </div>
  );
}

Answer.propTypes = {
  answer: React.PropTypes.object.isRequired,
  onFetchName: React.PropTypes.func.isRequired,
  success: React.PropTypes.bool,
};

export default Answer;
