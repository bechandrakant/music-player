import { render, screen } from "@testing-library/react";
import LikedSongsList from ".";
import MusicPlayerProvider from "../../contexts/useMusicPlayer";

describe("LikedSongList", () => {
  test("Should dispaly liked song header", () => {
    render(<LikedSongsList />, { wrapper: MusicPlayerProvider });
    let heading = screen.getByRole("heading", {
      level: 1,
      name: "Liked Songs",
    });
    expect(heading).toBeInTheDocument();
  });
  test("Should dispaly list of songs", () => {
    render(<LikedSongsList />, { wrapper: MusicPlayerProvider });
    let musicTitles = screen.getAllByRole("heading", {
      level: 2,
    });
    expect(musicTitles).toHaveLength(20);
  });
});
