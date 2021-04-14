import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }; // 리퀘스트를 할 때 옵션을 전달하는것!

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAK2hSS0tlo_MVwXA3R9q6zVgxr4FGLUUQ',
      requestOptions
    )
      .then((response) => response.json()) // text => json으로 변경
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
    console.log('useEffect!');
  }, []); // 데이터를 한번만 호출해서 받아올거에요.

  return <VideoList videos={videos} />;
}

export default App;
