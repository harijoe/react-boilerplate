/**
*
* SubmissionForm
*
*/

import React from 'react';

import styles from './styles.css';

class SubmissionForm extends React.Component {
  state = {
    input: ''
  };

  onChange = (e) => {
    this.setState({input: e.target.value})
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.input != '') {
      this.props.onSubmitAnswer(this.props.nameId, this.state.input);
      this.setState({input: ''})
    }
  };


  render() {
    if (this.props.disabled) {
      return false;
    }

    return (
      <div className={ styles.submissionForm }>
        <form onSubmit={this.onSubmit}>
          Réponse : <input autoFocus={true} type='text' onChange={this.onChange} value={this.state.input} />
        </form>
      </div>
    );
  }
}

export default SubmissionForm;
