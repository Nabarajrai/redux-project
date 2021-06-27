import React from "react";
import { useSelector } from "react-redux";

function SongDetails() {
  const songs = useSelector((state) => state.selectedSongs);
  return (
    <div>
      {songs === null ? (
        <h2>Please select song</h2>
      ) : (
        <div>
          <h3>{songs.title}</h3>
          <h4>{songs.duration}</h4>
        </div>
      )}
    </div>
  );
}

export default SongDetails;
