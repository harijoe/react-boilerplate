/**
 *
 * Name
 *
 */

import React from 'react';

import styles from './styles.css';
import ImageLoader from 'react-imageloader';
import { Paper } from 'material-ui';
import Loading from 'components/Loading';

function Name(props) {
  return (
    <div className={styles.name} style={{ height: props.height }}>
        <ImageLoader
          src={`https://cf3qb2sn.cloudimg.io/s/crop/500x500/${props.name.picture}`}
          wrapper={React.DOM.div}
          onError={props.onImageFailed}
          onLoad={props.onImageLoaded}
          style={{height: '100%'}}
          imgProps={{ className: styles.image }}
          preloader={() => <Loading />}
        >
        </ImageLoader>
    </div>
  );
}

Name.propTypes = {
  name: React.PropTypes.object.isRequired,
  height: React.PropTypes.string.isRequired,
  onImageLoaded: React.PropTypes.func.isRequired,
  onImageFailed: React.PropTypes.func.isRequired,
};

export default Name;
