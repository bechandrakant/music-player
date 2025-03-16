import "./App.css";
import LikedSongsList from "./components/LikedSongList";
import MusicPlayerProvider from "./contexts/useMusicPlayer";
import arrow from "./assets/arrow-rightA.png";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="app-container">
        <img className="back-arrow" src={arrow} alt="right-arrow icon" />
        <LikedSongsList />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
