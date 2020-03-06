import React from "react";
import ReactDom from 'react-dom';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDom.render(<App />, document.getElementById("react-app"));
registerServiceWorker();
