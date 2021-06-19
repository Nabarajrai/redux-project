// import React from "react";
// import { connect } from "react-redux";
// import { Container, Row, Col, Button } from "reactstrap";
// import { selectSong } from "../actions";
// import SongsDetails from "./songsDetails";

// const songList = (props) => {
//   const listsSongs = props.songs.map((item, i) => (
//     <Container key={i}>
//       <Row>
//         <Col>
//           <h6>{item.title}</h6>
//         </Col>
//         <Col>
//           <Button onClick={() => props.selectSong(item)} color="primary">
//             Select
//           </Button>
//         </Col>
//         <hr />
//       </Row>
//     </Container>
//   ));
//   console.log("render from songList");
//   return (
//     <>
//       <Row>
//         <Col md="8" sm="7">
//           <h3>Song List</h3>
//           <div>{listsSongs}</div>
//         </Col>
//         <Col md="4" sm="5">
//           <h4>Song Details</h4>
//           <SongsDetails />
//         </Col>
//       </Row>
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     songs: state.song,
//   };
// };

// export default connect(mapStateToProps, { selectSong })(songList);

import React from "react";
import { connect } from "react-redux";

function songList(props) {
  console.log(props);
  const Increment = () => {
    props.dispatch({ type: "add" });
  };
  const Decrement = () => {
    props.dispatch({ type: "sub" });
  };
  return (
    <div>
      <button onClick={Increment}>add</button>
      <button onClick={Decrement}>sub</button>
      <span>count:{props.count}</span>
    </div>
  );
}
const mapToDispatchToProps = (dispatch) => {
  return dispatch;
};

export default connect(mapToDispatchToProps)(songList);
