// import { combineReducers } from "redux";
// // const songReducer = () => {
// //   return [
// //     { title: "mero maya", duration: "1:24" },
// //     { title: "mero mayako", duration: "4:24" },
// //     { title: "halla chalexa", duration: "5:24" },
// //     { title: "ya you gotaa yummy", duration: "3:24" },
// //   ];
// // };

// const songs = [
//   { title: "mero maya", duration: "1:24" },
//   { title: "mero mayako", duration: "4:24" },
//   { title: "halla chalexa", duration: "5:24" },
//   { title: "ya you gotaa yummy", duration: "3:24" },
// ];
// const selectedSongReducer = (selectedSongs = null, action) => {
//   switch (action.type) {
//     case "SELECTED_SONG":
//       return action.payload;
//     default:
//       return selectedSongs;
//   }
// };

// export default combineReducers({
//   song: songs,
//   selectedSong: selectedSongReducer,
// });

import React from "react";
let intital = { count: 0 };
const addReducer = (state = intital, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
export default addReducer;
