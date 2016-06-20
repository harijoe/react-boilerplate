/**
 *
 * HomeView
 *
 */

import React from 'react';

import styles from './styles.css';

import Loading from 'components/Loading';
import Name from 'components/Name';
import SubmissionForm from 'components/SubmissionForm';
import NewNameButton from 'components/NewNameButton';
import Result from 'components/Result';
import Answer from 'components/Answer';
import Title from 'components/Title';
import { Paper } from 'material-ui';

const style = {
  margin: 20,
  textAlign: 'center',
  width: 340,
  height: 525,
  display: 'inline-block',
};

function HomeView(props) {
  let content;

  if (!props.name) {
    content = <Loading />;
  } else if (props.answer) {
    content = (
      <div>
        <Answer answer={props.answer} />
        <NewNameButton onFetchName={props.onFetchName} />
      </div>
    )
  } else {
    content =  (
      <div>
        <Name name={props.name} onImageLoaded={props.onImageLoaded} onImageFailed={props.onImageFailed} />
        <SubmissionForm
          onKeyPress={props.onKeyPress}
          result={props.result}
          disabled={props.loading}
          nameId={props.name.id}
          onSubmitAnswer={props.onSubmitAnswer}
          tries={props.tries}
        />
      </div>
    );
  }

  return (
    <div className={ styles.homeView }>
      <Paper style={style} zDepth={2}>
        <Title>The Name Challenge</Title>
        {content}
      </Paper>
    </div>
  );
}

export default HomeView;
