import React, { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_datail/video_detail';
import VideoList from './components/video_list/video_list';

// function App() {
//   const [videos, setVideos] = useState([]);
//   const search = (query) => {
//     const requestOptions = {
//       method: 'GET',
//       redirect: 'follow',
//     };
//     // 1.컴포넌트 안에서 네트워크를 처리하는것이 나쁘다, 2.credential 키도 남겨두면 안된다.
//     fetch(
//       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=secret`,
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) =>
//         result.items.map((item) => ({ ...item, id: item.id.videoId }))
//       )
//       .then((items) => setVideos(items))
//       .catch((error) => console.log('error', error));
//   };

//   useEffect(() => {
//     const requestOptions = {
//       method: 'GET',
//       redirect: 'follow',
//     }; // 리퀘스트를 할 때 옵션을 전달하는것!

//     fetch(
//       'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=secret',
//       requestOptions
//     )
//       .then((response) => response.json()) // text => json으로 변경
//       .then((result) => setVideos(result.items))
//       .catch((error) => console.log('error', error));
//     console.log('useEffect!');
//   }, []); // 데이터를 한번만 호출해서 받아올거에요.

//   return (
//     <div className={styles.app}>
//       <SearchHeader onSearch={search} />
//       <VideoList videos={videos} />;
//     </div>
//   );
// }

// export default App;

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <SearchHeader onSearch={search} />
      <div className={styles.body}>
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? 'grid' : 'list'}
            />
            {/* props로 전달이 되어야하는 경우에는 한단계 태그를 묶어서 사용하는 방법 뿐 */}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
