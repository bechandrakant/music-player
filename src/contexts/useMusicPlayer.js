import { createContext, useContext, useEffect, useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import { likedSongs } from "../constants/likedSongData";

const MusicPlayerContext = createContext();

export const useMusicPlayer = () => useContext(MusicPlayerContext);

const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audio) {
      const updateProgress = () => {
        setProgress((audio.currentTime / audio.duration) * 100);
      };

      audio.addEventListener("timeupdate", updateProgress);
      return () => audio.removeEventListener("timeupdate", updateProgress);
    }
  }, [audio]);

  const playSong = (song) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(song.url);
    newAudio.play();
    setAudio(newAudio);
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    if (!currentSong) return;
    const currentIndex = likedSongs.findIndex((s) => s.id === currentSong.id);
    const nextSong = likedSongs[(currentIndex + 1) % likedSongs.length];
    playSong(nextSong);
  };

  const playPrevious = () => {
    if (!currentSong) return;
    const currentIndex = likedSongs.findIndex((s) => s.id === currentSong.id);
    const prevSong =
      likedSongs[(currentIndex - 1 + likedSongs.length) % likedSongs.length];
    playSong(prevSong);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        likedSongs,
        playSong,
        playNext,
        playPrevious,
        togglePlayPause,
        isPlaying,
        progress,
      }}
    >
      {children}
      {currentSong && <MusicPlayer />}
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayerProvider;
