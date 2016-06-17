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

function HomeView(props) {
  //
  //let onKeyDown = (e) => {
  //  if (e.code === 'Enter' && props.answer) {
  //    console.log(props.answer);
  //    props.onFetchName();
  //  }
  //};
  //window.addEventListener('keydown', onKeyDown);

  if (!props.name) {
    return <Loading />
  }

  if (props.answer) {
    return (
      <div>
        <Answer answer={props.answer} />
        <NewNameButton onFetchName={props.onFetchName} />
      </div>
    )
  }

  return (
    <div className={ styles.homeView }>
      <Name name={props.name} onImageLoaded={props.onImageLoaded} onImageFailed={props.onImageFailed} />
      <Result result={props.result}/>
      <SubmissionForm disabled={props.loading} nameId={props.name.id} onSubmitAnswer={props.onSubmitAnswer}/>
    </div>
  );
}

export default HomeView;
