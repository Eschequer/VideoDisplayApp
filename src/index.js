import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Item from "./Components/Item";

// eslint-disable-next-line no-unused-vars
const propsValues = {
  title: "List of Smartphones",
  items: [
    "HTC U Ultra",
    "iPhone 7",
    "Google Pixel",
    "Huawei P9",
    "Meizu Pro 6",
    "Asus Zenfone 3",
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Item name={"Max"} />
  </React.StrictMode>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.dir(Item);
