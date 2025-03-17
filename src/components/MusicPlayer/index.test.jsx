import { render, screen, fireEvent } from "@testing-library/react";
import MusicPlayer from ".";
import { useMusicPlayer } from "../../contexts/useMusicPlayer";

jest.mock("../../contexts/useMusicPlayer");

describe("MusicPlayer Component", () => {
  const mockPlayNext = jest.fn();
  const mockPlayPrevious = jest.fn();
  const mockTogglePlayPause = jest.fn();

  beforeEach(() => {
    useMusicPlayer.mockReturnValue({
      currentSong: {
        id: 10,
        title: "Senorita",
        artist: "Shawn Mendes & Camila Cabello",
        url: "./songs/lofi.mp3",
        thumbnail: "./thumbnails/Believer.png",
      },
      playNext: mockPlayNext,
      playPrevious: mockPlayPrevious,
      togglePlayPause: mockTogglePlayPause,
      isPlaying: false,
      progress: 50,
    });
  });

  it("renders correctly with song details", () => {
    render(<MusicPlayer />);

    expect(screen.getByText("Senorita")).toBeInTheDocument();
    expect(
      screen.getByText("Shawn Mendes & Camila Cabello")
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Senorita" })).toBeInTheDocument();
  });

  it("calls playPrevious when previous button is clicked", () => {
    render(<MusicPlayer />);
    const prevButton = screen.getAllByRole("button")[0];
    fireEvent.click(prevButton);
    expect(mockPlayPrevious).toHaveBeenCalled();
  });

  it("calls togglePlayPause when play button is clicked", () => {
    render(<MusicPlayer />);
    const playPauseButton = screen.getAllByRole("button")[1];
    fireEvent.click(playPauseButton);
    expect(mockTogglePlayPause).toHaveBeenCalled();
  });

  it("calls togglePlayPause when pause button is clicked", () => {
    useMusicPlayer.mockReturnValue({
      currentSong: {
        id: 10,
        title: "Senorita",
        artist: "Shawn Mendes & Camila Cabello",
        url: "./songs/lofi.mp3",
        thumbnail: "./thumbnails/Believer.png",
      },
      playNext: mockPlayNext,
      playPrevious: mockPlayPrevious,
      togglePlayPause: mockTogglePlayPause,
      isPlaying: true,
      progress: 50,
    });
    render(<MusicPlayer />);
    const playPauseButton = screen.getAllByRole("button")[1];
    fireEvent.click(playPauseButton);
    expect(mockTogglePlayPause).toHaveBeenCalled();
  });

  it("calls playNext when next button is clicked", () => {
    render(<MusicPlayer />);
    const nextButton = screen.getAllByRole("button")[2];
    fireEvent.click(nextButton);
    expect(mockPlayNext).toHaveBeenCalled();
  });

  it("displays correct progress bar width", () => {
    render(<MusicPlayer />);
    const progressBar = screen.getByTestId("progress-bar");
    expect(progressBar).toHaveStyle("width: 50%");
    const progressBarCircle = screen.getByTestId("progress-bar-circle");
    expect(progressBarCircle).toHaveStyle("left: 50%");
  });
});
