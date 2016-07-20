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
import Answer from 'components/Answer';
import Streak from 'components/Streak';
import Title from 'components/Title';
import { Paper, IconButton } from 'material-ui';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';

const style = {
  margin: 20,
  textAlign: 'center',
  width: 340,
  height: 525,
  display: 'inline-block',
  position: 'relative',
};

const homeButtonStyle = {
  opacity: 0.7,
  float: 'left',
  position: 'absolute',
  display: 'block',
};

function HomeView(props) {
  let content;

  if (!props.name) {
  } else if (props.answer || props.result) {
    content = (
      <div>
        <Name name={props.name} onImageLoaded={props.onImageLoaded} onImageFailed={props.onImageFailed}
        height={200} width={200} />
        <Answer answer={props.answer} onFetchName={props.onFetchName} success={props.result} />
      </div>
    );
  } else {
    content = (
      <div className={`zoomIn ${styles.content}`}>
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
        <IconButton style={homeButtonStyle}>
          <NavigationMenuIcon />
        </IconButton>
        <Streak streak={props.streak} />
        {content}
      </Paper>
    </div>
  );
}

export default HomeView;
