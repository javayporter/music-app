import { useEffect, useState } from "react";

import "./App.css";
import MusicCard from "./components/MusicCard";

const App = () => {
  const API_URL = "https://itunes.apple.com/search?term=";

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

  console.log(music);
  console.log("searchterm", searchTerm);

  return (
    <div className="App">
      <h1>Music App</h1>
      <div className="search">
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
        style={{ border: "solid", borderColor: "red" }}
        className="container"
      >
        {music?.length > 0 && searchTerm !== "" ? (
          <div
            style={{ border: "solid", borderColor: "red" }}
            className="container"
          >
            {music.map((item) => (
              <MusicCard record={item} />
            ))}
          </div>
        ) : (
          <div
            style={{ border: "solid", borderColor: "red" }}
            className="container"
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

// next steps

/* 
-load search results as user types in input field
-load next set of data results returned on scroll
-display specific records/content on page load then 
display searched results (do not display results before user interacts with input field)
-create button component 
*/
