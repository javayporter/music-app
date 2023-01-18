import { useState } from "react";
import * as App from "../App.js";
import MusicRequest from "../data/MusicRequest.js";

const AddressCard = () => {
  //   const artistName = document.querySelector("#artist-name");
  //   const trackName = document.querySelector("#artist-name");
  //const artistIdVal = document.querySelector("#artist-name");
  //   const trackId = document.querySelector("#artist-name");
  const request = new MusicRequest();
  const [artistName, setArtistName] = useState("");
  const [trackName, setTrackName] = useState("");
  const [artistId, setArtistId] = useState("");
  const [trackId, setTrackId] = useState("");

  return (
    <div>
      <div className="form-div" style={{ marginBottom: 50 }}>
        <form>
          <input
            type="text"
            id="artist-name"
            placeholder="Artist Name"
            value={artistName}
            onChange={(e) => {
              setArtistName(e.target.value);
            }}
          />
          <input
            id="track-name"
            placeholder="Track Name"
            value={trackName}
            onChange={(e) => {
              setTrackName(e.target.value);
            }}
          />
          <input
            id="artist-id"
            placeholder="Artist ID"
            value={artistId}
            onChange={(e) => {
              setArtistId(e.target.value);
            }}
          />
          <input
            id="track-id"
            placeholder="Track ID"
            value={trackId}
            onChange={(e) => {
              setTrackId(e.target.value);
            }}
          />
          <input
            type="submit"
            value="submit"
            onClick={() => {
              request.sendRequest();
              console.log("clicked.");
            }}
          />
          <button
            id="testing"
            onClick={(e) => {
              e.preventDefault();
              request.sendRequest(artistId, artistName);
            }}
          >
            G0
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressCard;
