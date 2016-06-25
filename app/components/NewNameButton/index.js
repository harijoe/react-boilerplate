/**
*
* NewNameButton
*
*/

import React from 'react';
import reactTimeout from 'react-timeout';

import styles from './styles.css';
import { RaisedButton } from 'material-ui';

class NewNameButton extends React.Component {
  constructor(props) {
    super(props);
    props.setTimeout(() => {
      this.setState({ disabled: false, autofocus: true });
    }, 1000);
  }

  state = {
    disabled: true,
    autofocus: true,
  };

  onClick = () => {
    this.resetName();
  };

  resetName = () => {
    this.props.onFetchName();
  };

  render() {
    return (
      <div className={`animated fadeIn ${styles.newNameButton}`}>
        <RaisedButton disabled={this.state.disabled} onClick={this.onClick} autoFocus={this.state.autofocus} label="Again !" primary />
      </div>
    );
  }
}

NewNameButton.propTypes = {
  onFetchName: React.PropTypes.func.isRequired,
  setTimeout: React.PropTypes.func.isRequired,
};

export default reactTimeout(NewNameButton);
