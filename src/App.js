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

  return (
    <div className="App">
      <h1>Music App</h1>
      <div className="search">
        <input
          placeholder="Search music"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
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
        {music.map((item) => (
          <MusicCard record={item} />
        ))}
      </div>
      <h1>{music.resultCount}</h1>
    </div>
  );
};

export default App;
