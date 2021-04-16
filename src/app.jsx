import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
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
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
