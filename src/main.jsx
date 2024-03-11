import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css/bundle";
import App from "./App.jsx";

const root = document.getElementById("app");
const rootElement = React.createElement(App);
ReactDOM.createRoot(root).render(rootElement);


/*import React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line
import "swiper/css/bundle";
//import "./styles.css";

import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("app"));*/
    