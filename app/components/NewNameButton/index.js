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
      this.setState({ disabled: false });
    }, 3000);
    const interval = props.setInterval(() => {
      this.setState({ seconds: this.state.seconds - 1 });
      if (this.state.seconds <= 0) {
        props.clearInterval(interval);
        this.refs.inputToFocus.refs.container.refs.enhancedButton.focus();
      }
    }, 1000);
  }

  state = {
    disabled: true,
    seconds: 3,
  };

  onClick = () => {
    this.resetName();
  };

  resetName = () => {
    this.props.onFetchName();
  };

  render() {
    const label = this.state.seconds ? `Again ${this.state.seconds}` : 'Again!';
    return (
      <div className={`animated fadeIn ${styles.newNameButton}`}>
        <RaisedButton
          disabled={this.state.disabled}
          onClick={this.onClick}
          label={label}
          primary
          ref="inputToFocus"
        />
      </div>
    );
  }
}

NewNameButton.propTypes = {
  onFetchName: React.PropTypes.func.isRequired,
  setTimeout: React.PropTypes.func.isRequired,
  setInterval: React.PropTypes.func.isRequired,
  clearInterval: React.PropTypes.func.isRequired,
};

export default reactTimeout(NewNameButton);
