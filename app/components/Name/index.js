/**
 *
 * Name
 *
 */

import React from 'react';

import Loading from 'components/Loading';
import styles from './styles.css';
import ImageLoader from 'react-imageloader';
import { Paper } from 'material-ui';

const paper_style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

function Name(props) {
  return (
    <div className={ styles.name }>
      <Paper style={paper_style} zDepth={2} circle={true}>
        <ImageLoader
          src={'https://cf3qb2sn.cloudimg.io/s/crop/300x300/'+props.name.picture}
          wrapper={React.DOM.div}
          onError={props.onImageFailed}
          onLoad={props.onImageLoaded}
          preloader={() => <Loading />}
          imgProps={{className: styles.image}}
        >
          <Loading />
        </ImageLoader>
      </Paper>
    </div>
  );
}

export default Name;
