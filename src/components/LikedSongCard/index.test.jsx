import { fireEvent, render, screen } from "@testing-library/react";
import LikedSongCard from ".";

describe("LikedSongCard", () => {
  test("Should display liked song", () => {
    let song = {
      id: 10,
      title: "Senorita",
      artist: "Shawn Mendes & Camila Cabello",
      url: "./songs/lofi.mp3",
      thumbnail: "./thumbnails/Believer.png",
    };
    render(<LikedSongCard song={song} />);
    let title = screen.getByRole("heading", {
      level: 2,
      name: "Senorita",
    });
    expect(title).toBeInTheDocument();
    let artist = screen.getByText("Shawn Mendes & Camila Cabello");
    expect(artist).toBeInTheDocument();
  });
  test("Card should be clickabale", () => {
    let song = {
      id: 10,
      title: "Senorita",
      artist: "Shawn Mendes & Camila Cabello",
      url: "./songs/lofi.mp3",
      thumbnail: "./thumbnails/Believer.png",
    };
    let mockFn = jest.fn();
    render(<LikedSongCard song={song} playSong={mockFn} />);
    let songContainer = screen.getByTestId("song-container");
    fireEvent.click(songContainer);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
