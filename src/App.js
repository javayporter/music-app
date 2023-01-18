import { useEffect, useState } from "react";

import "./App.css";
import MusicCard from "./components/MusicCard";
import AddressCard from "./components/AddressCard";
import AlbumCard from "./components/AlbumCard";

const App = () => {
  const API_URL = "https://itunes.apple.com/search?term=";
  // const runRequest = new MusicRequest();
  // runRequest.sendRequest();

  // FETCH METHOD
  const [music, setMusic] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMusic = async (term) => {
    const response = await fetch(`${API_URL}${term}`);
    const data = await response.json();
    setMusic(data.results);
  };

  useEffect(() => {
    searchMusic();
  }, []);

  //console.log(music);

  return (
    <div className="App">
      <h1>Music App</h1>
      <div className="container">
        <AddressCard />
        <AlbumCard />
      </div>
      <div className="search" style={{ marginBottom: 50 }}>
        <input
          placeholder="Search music"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            searchMusic(searchTerm);
          }}
        />
        <button
          onClick={() => {
            searchMusic(searchTerm);
          }}
        >
          Search
        </button>
      </div>
      <div
      // style={{ border: "solid", borderColor: "red" }}
      // className="container"
      >
        {music?.length > 0 && searchTerm !== "" ? (
          <div
          // style={{ border: "solid", borderColor: "red" }}
          // className="container"
          >
            {music.map((item) => (
              <MusicCard record={item} />
            ))}
          </div>
        ) : (
          <div
          // style={{ border: "solid", borderColor: "red" }}
          // className="container"
          >
            Hi, Code God!
          </div>
        )}
      </div>
      <h1>{music.resultCount}</h1>
    </div>
  );
};

export default App;
//export { createRequest };

// next steps

/* 
-watch video on API apps using GET and POST requests
-load search results as user types in input field
-load next set of data results returned on scroll
-display specific records/content on page load then 
display searched results (do not display results before user interacts with input field)
-create button component 
*/
