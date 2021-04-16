import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (
  { video: { snippet } } // props.video.snippet.thubnails.medium.url
) => (
  <li className={styles.video}>
    <img src={snippet.thumbnails.medium.url} />
    <div className={styles.metadata}>
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channel}>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
