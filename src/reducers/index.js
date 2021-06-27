import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "mero maya", duration: "1:24" },
    { title: "mero mayako", duration: "4:24" },
    { title: "halla chalexa", duration: "5:24" },
    { title: "ya you gotaa yummy", duration: "3:24" },
  ];
};

const seletedReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "FETCH_SONG":
      return action.payload;
    default:
      return selectedSong;
  }
};
export default combineReducers({
  song: songsReducer,
  selectedSongs: seletedReducer,
});
