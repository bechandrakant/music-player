import "./style.css";

const LikedSongCard = ({ song, playSong }) => {
  return (
    <div
      className="liked-song-card"
      onClick={() => playSong(song)}
      data-testid="song-container"
    >
      <img src={song.thumbnail} alt={song.title} />
      <h2>{song.title}</h2>
      <p>{song.artist}</p>
    </div>
  );
};
export default LikedSongCard;
