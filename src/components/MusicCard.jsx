const MusicCard = ({ record }) => {
  //   const allResults = record.results;
  //const test = ((allResults || {})[0] || {}).kind;
  const results = record || {} || {};
  const artistName = results.artistName;

  //   console.log("test", results, typeof results);

  //console.log("entries:", entries);
  return (
    <div className="music-card">
      <div style={{ border: "solid" }}>
        <h1>{artistName}</h1>
        <h1>{results.trackName}</h1>
      </div>
    </div>
  );
};

export default MusicCard;

// {
//     "wrapperType": "track",
//     "kind": "song",
//     "artistId": 1419227,
//     "collectionId": 780330041,
//     "trackId": 780330308,
//     "artistName": "Beyoncé",
//     "collectionName": "BEYONCÉ",
//     "trackName": "Drunk in Love (feat. Jay Z)",
//     "collectionCensoredName": "BEYONCÉ",
//     "trackCensoredName": "Drunk in Love (feat. Jay Z)",
//     "artistViewUrl": "https://music.apple.com/us/artist/beyonc%C3%A9/1419227?uo=4",
//     "collectionViewUrl": "https://music.apple.com/us/album/drunk-in-love-feat-jay-z/780330041?i=780330308&uo=4",
//     "trackViewUrl": "https://music.apple.com/us/album/drunk-in-love-feat-jay-z/780330041?i=780330308&uo=4",
//     "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/62/b8/3d/62b83d23-76b2-e662-3a05-0e7e9a8c1859/mzaf_17923547908440223776.plus.aac.p.m4a",
//     "artworkUrl30": "https://is4-ssl.mzstatic.com/image/thumb/Features4/v4/dc/ca/29/dcca295f-851e-5faf-a3b4-030965fa80f2/dj.jyrlgxlq.jpg/30x30bb.jpg",
//     "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Features4/v4/dc/ca/29/dcca295f-851e-5faf-a3b4-030965fa80f2/dj.jyrlgxlq.jpg/60x60bb.jpg",
//     "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Features4/v4/dc/ca/29/dcca295f-851e-5faf-a3b4-030965fa80f2/dj.jyrlgxlq.jpg/100x100bb.jpg",
//     "collectionPrice": 15.99,
//     "trackPrice": 1.29,
//     "releaseDate": "2013-12-13T08:00:00Z",
//     "collectionExplicitness": "explicit",
//     "trackExplicitness": "explicit",
//     "discCount": 1,
//     "discNumber": 1,
//     "trackCount": 14,
//     "trackNumber": 3,
//     "trackTimeMillis": 323486,
//     "country": "USA",
//     "currency": "USD",
//     "primaryGenreName": "Pop",
//     "contentAdvisoryRating": "Explicit",
//     "isStreamable": false
// }
