/**
*
* SubmissionForm
*
*/

import React from 'react';

import styles from './styles.css';
import { TextField } from 'material-ui';

class SubmissionForm extends React.Component {
  state = {
    input: '',
  };

  onChange = (e) => {
    this.setState({ input: e.target.value });
    this.props.onKeyPress();
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.input !== '') {
      this.props.onSubmitAnswer(this.props.nameId, this.state.input);
      this.setState({ input: '' });
    }
  };


  render() {
    if (this.props.disabled) {
      return false;
    }

    const errorText = this.props.result !== false && this.props.tries > 0 ? '' : `Try again! ( ${this.props.tries} try left)`;

    return (
      <div className={styles.submissionForm}>
        <form onSubmit={this.onSubmit}>
          <TextField
            hintText="Answer"
            floatingLabelText="Who is it ?"
            floatingLabelFixed
            errorText={errorText}
            onChange={this.onChange}
            value={this.state.input}
            autoComplete="off"
            autoFocus="autofocus"
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SubmissionForm;
