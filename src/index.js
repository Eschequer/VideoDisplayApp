import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
/*import AprrovalCard from "./Components/Comment/ApprovalCard";
import faker from "faker";
import CommentDetail from "./Components/Comment/CommentDetail";*/

ReactDOM.render(
  <React.StrictMode>
    {/*<AprrovalCard>
      <CommentDetail
        author="Samantha Abrique"
        time="today at 2 p.m"
        text="Hey there"
        avatar={`${faker.image.people()}?random=${Math.round(
          Math.random() * 1000
        )}`}
      />
    </AprrovalCard>*/}
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
