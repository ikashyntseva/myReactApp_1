import React from "react";
import "./App.css";

class View extends React.Component {
  render() {
    return (
      <div>
        <button className="icon-grid"></button>
        <button>List</button>
      </div>
    );
  }
}

// class Photo extends React.Component {
//   render() {
//     return ()
//   }
// }

function App() {
  return (
    <div className="App">
      <View />
    </div>
  );
}

export default App;
