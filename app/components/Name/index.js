/**
 *
 * Name
 *
 */

import React from 'react';

import styles from './styles.css';
import ImageLoader from 'react-imageloader';

function Name(props) {
  return (
    <div className={ styles.name }>
      <ImageLoader
        src={'https://cf3qb2sn.cloudimg.io/s/crop/300x300/'+props.name.picture}
        wrapper={React.DOM.div}
        onError={props.onImageFailed}
        onLoad={props.onImageLoaded}>
        Image load failed!
      </ImageLoader>
    </div>
  );
}

export default Name;
