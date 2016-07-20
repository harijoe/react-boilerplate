/**
 *
 * Name
 *
 */

import React from 'react';

import styles from './styles.css';
import ImageLoader from 'react-imageloader';
import { Paper } from 'material-ui';

function Name(props) {
  const imageStyle = {
    height: props.height,
    width: props.width,
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  };
  const paperStyle = {
    height: props.height,
    width: props.width,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

  return (
    <div className={styles.name}>
      <Paper style={paperStyle} zDepth={2} circle>
        <ImageLoader
          src={`https://cf3qb2sn.cloudimg.io/s/crop/300x300/${props.name.picture}`}
          wrapper={React.DOM.div}
          onError={props.onImageFailed}
          onLoad={props.onImageLoaded}
          imgProps={{ className: styles.image, style: imageStyle }}
        />
      </Paper>
    </div>
  );
}

Name.propTypes = {
  name: React.PropTypes.object.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  onImageLoaded: React.PropTypes.func.isRequired,
  onImageFailed: React.PropTypes.func.isRequired,
};

Name.defaultProps = {
  height: 300,
  width: 300,
};

export default Name;
