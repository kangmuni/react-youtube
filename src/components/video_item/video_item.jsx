import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    // video에 있는 snippet을 받아 올 수 있도록 만들었기 때문에 한번 더 video를 받아와야한다.)
    const displayType = display === 'grid' ? styles.gird : styles.list;
    return (
      <li className={`${styles.container}`} onClick={() => onVideoClick(video)}>
        <div className={`${styles.video} ${displayType}`}>
          <img
            className={`${styles.image} ${displayType}`}
            src={snippet.thumbnails.medium.url}
            alt="thumbnails"
          />
          <div className={`${styles.metadata} ${displayType}`}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);
console.log('item');

export default VideoItem;
