import { useMusicPlayer } from "../../contexts/useMusicPlayer";
import LikedSongCard from "../LikedSongCard";
import "./style.css";

const LikedSongsList = () => {
  const { playSong, likedSongs } = useMusicPlayer();

  return (
    <>
      <h1 className="container-title">Liked Songs</h1>
      <div className="liked-songs-list">
        {likedSongs.map((song) => (
          <LikedSongCard key={song.id} song={song} playSong={playSong} />
        ))}
      </div>
    </>
  );
};

export default LikedSongsList;
