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

function Name(props) {
  const image_style = {
    height: props.height,
    width: props.width,
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  };
  const paper_style = {
    height: props.height,
    width: props.width,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

  return (
    <div className={ styles.name }>
      <Paper style={paper_style} zDepth={2} circle={true}>
        <ImageLoader
          src={`https://cf3qb2sn.cloudimg.io/s/crop/300x300/` + props.name.picture}
          wrapper={React.DOM.div}
          onError={props.onImageFailed}
          onLoad={props.onImageLoaded}
          preloader={() => <Loading />}
          imgProps={{ className: styles.image, style: image_style }}
        >
          <Loading />
        </ImageLoader>
      </Paper>
    </div>
  );
}

Name.propTypes = {
  name: React.PropTypes.object.isRequired,
  height: React.PropTypes.number,
  width: React.PropTypes.number,
};

Name.defaultProps = {
  height: 300,
  width: 300,
};

export default Name;
