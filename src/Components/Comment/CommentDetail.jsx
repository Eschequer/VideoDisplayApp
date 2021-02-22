import React from "react";
/*import faker from "faker";*/

export default function CommentDetail(props) {
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
          <img src={props.avatar} alt="avatar" />
        </a>
        <div className="content">
          <a className="author">{props.author}</a>
          <div className="metadata">
            <div className="date">{props.time}</div>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </div>
  );
}
