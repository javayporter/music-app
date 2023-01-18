import { Component } from "react";

class MusicRequest extends Component {
  constructor(artistId, artistName) {
    super();
    artistId = artistId;
    artistName = artistName;
  }
  sendRequest(artistId, artistName) {
    const MUSIC_API_URL = "https://itunes.apple.com/search?term=";

    const artistIdEndpoint = "https://itunes.apple.com/lookup?";

    // XHR METHOD
    const updateSuccess = (data) => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      let imgURL = parsedData.results[0].artistViewUrl;
      console.log("image url", imgURL);
    };
    const updateError = (error) => {
      console.log(error);
    };
    const responseMethod = (httpRequest) => {
      const data = httpRequest.responseText;
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          updateSuccess(data);
        } else {
          updateError(`Error: ${httpRequest.status}: ${data}`);
        }
      }
    };
    const createRequest = (url) => {
      const httpRequest = new XMLHttpRequest(url);
      httpRequest.addEventListener("readystatechange", (url) => {
        responseMethod(httpRequest);
      });
      httpRequest.open("GET", url);
      httpRequest.send();
      //   const dataReturned = JSON.parse(httpRequest.responseText);
      //   return dataReturned;
    };
    createRequest(`${MUSIC_API_URL}${artistName}`);
    createRequest(`${artistIdEndpoint}id=${artistId}`);
    console.log(`${artistIdEndpoint}${artistId}`);
  }
}

export default MusicRequest;
