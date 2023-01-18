const AlbumCard = (imgURL) => {
  return (
    <div className="album-card hidden">
      <img src={imgURL} alt="artist image" />
    </div>
  );
};

export default AlbumCard;
