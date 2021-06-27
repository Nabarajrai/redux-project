import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { SelectedSong } from "../actions";
import SongsDetails from "../components/songsDetails";

const SongList = () => {
  const song = useSelector((state) => state.song);
  const dispatch = useDispatch();
  const songList = song.map((songs) => (
    <Container key={songs.title}>
      <Row>
        <Col>{songs.title}</Col>
        <Col>
          <Button onClick={() => dispatch(SelectedSong(songs))} color="primary">
            Select
          </Button>
        </Col>
      </Row>
      <hr></hr>
    </Container>
  ));
  return (
    <div>
      <div>{songList}</div>
      <div>
        <SongsDetails />
      </div>
    </div>
  );
};

export default SongList;
