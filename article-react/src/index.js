import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { store } from "./store/configureStore";
import App from "./components/App";

import registerServiceWorker from "./registerServiceWorker";

import "./styles/App.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
