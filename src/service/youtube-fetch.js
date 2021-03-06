import axios from 'axios';

class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  //   mostPopular() {
  //     return fetch(
  //       `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
  //       this.requestOptions
  //     )
  //       .then((response) => response.json())
  //       .then((result) => result.items);
  //   }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&key=${this.key}`,
      this.requestOptions
    );
    const result = await response.json();
    return result.items;
  }

  //   search(query) {
  //     return fetch(
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
  //       this.requestOptions
  //     )
  //       .then((response) => response.json())
  //       .then((result) =>
  //         result.items.map((item) => ({ ...item, id: item.id.videoId }))
  //       );
  //   }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${query}&type=video&key=${this.key}`,
      this.requestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
