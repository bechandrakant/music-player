import { useMusicPlayer } from "../../contexts/useMusicPlayer";
import leftArrow from "../../assets/next.png";
import "./style.css";

const MusicPlayer = () => {
  const {
    currentSong,
    playNext,
    playPrevious,
    togglePlayPause,
    isPlaying,
    progress,
  } = useMusicPlayer();

  return (
    <div className="music-player-container">
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ color: "white", width: `${progress}%` }}
        ></div>
        <div
          className="progress-bar-circle"
          style={{ color: "white", left: `${progress}%` }}
        ></div>
      </div>
      <div className="music-player">
        <img src={currentSong.thumbnail} alt={currentSong.title} />
        <p style={{ display: "flex", flexDirection: "column" }}>
          <span>{currentSong.title}</span>
          <span>{currentSong.artist}</span>
        </p>
        <button onClick={playPrevious}>
          <img src={leftArrow} alt="previous icon" />
        </button>
        <button onClick={togglePlayPause}>{isPlaying ? "⏸" : "▶"}</button>
        <button onClick={playNext}>
          <img
            src={leftArrow}
            alt="previous icon"
            style={{ rotate: "180deg" }}
          />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
