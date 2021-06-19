// import "./App.css";
// import SongList from "./components/songList";
// import { useState } from "react";
// function App() {
//   const [value, setValue] = useState([]);
//   const [todos, setTodos] = useState([{ task: "hellow" }]);
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   console.log(todos);
//   const addTodo = (newtask) => {
//     setTodos([...todos, { task: newtask, id: "1" }]);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTodo(value);
//   };

//   const handleDelete = (todoid) => {
//     return todos.filter((todo) => todo.id !== todoid);
//     console.log("clicked");
//   };
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={handleChange}
//           placeholder="Please enter a todo"
//         />
//         <button>Add</button>
//       </form>
//       {todos.map((todo, i) => (
//         <div id={i}>
//           <h3>{todo.task}</h3>
//           <button onClick={handleDelete}>x</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const App = () => {
// //   const [state, setState] = useState([]);
// //   useEffect(() => {
// //     async function getDate() {
// //       let url = "https://api.github.com/users";
// //       const data = await axios.get(url);
// //       const res = data.data;
// //       console.log(res);
// //     }
// //     getDate();
// //   });

// //   return (
// //     <div>
// //       {state.map((data) => (
// //         <h2>{data.login}</h2>
// //       ))}
// //     </div>
// //   );
// // };

// // export default App;

import React from "react";
import SongList from "./components/songList";
import SongsDetails from "./components/songsDetails";

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

export default App;
