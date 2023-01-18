import "../styles/MusicCard.css";
const MusicCard = ({ record }) => {
  //   const allResults = record.results;
  //const test = ((allResults || {})[0] || {}).kind;
  const results = record || {} || {};
  const artistName = results.artistName;
  const imgURL = results.artworkUrl100;

  return (
    <div className="music-card">
      <img src={imgURL} alt="artist image" />{" "}
      <div className="container">
        <h4>{artistName}</h4>
        <p>{results.trackName}</p>
      </div>
    </div>
  );
};

export default MusicCard;
