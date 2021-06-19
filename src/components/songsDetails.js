import React from "react";
import { connect } from "react-redux";
const SongsDetails = ({ song }) => {
  if (!song) {
    return <div>Please select the song</div>;
  }

  //   console.log(props);
  return (
    <div className="song_details">
      <h3>Title:{song.title}</h3>
      <h4> Duration:{song.duration}</h4>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.selectedSong);
  return {
    song: state.selectedSong,
  };
};
export default connect(mapStateToProps)(SongsDetails);
