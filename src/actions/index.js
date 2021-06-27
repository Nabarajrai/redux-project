export const SelectedSong = (song) => {
  return {
    type: "FETCH_SONG",
    payload: song,
  };
};
