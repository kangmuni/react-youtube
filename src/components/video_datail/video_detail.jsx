import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      title="youtube video player"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <div className={styles.titleAndBtn}>
      <h3 className={styles.title}>{snippet.title}</h3>
      <div className={styles.button}>
        <button>
          <i className="fas fa-thumbs-up"></i>
        </button>
        <button>
          <i className="fas fa-thumbs-down"></i>
        </button>
        <button>
          <i className="fas fa-share"></i>
        </button>
      </div>
    </div>
    <div className={styles.channelTitle}>{snippet.channelTitle}</div>
    <div className={styles.description}>{snippet.description}</div>
  </section>
);

export default VideoDetail;
