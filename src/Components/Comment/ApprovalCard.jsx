import React from "react";

export default function AprrovalCard(props) {
  return (
    <div className="ui card container approval-card">
      <div className="content">
        {props.children ? props.children : "Some content"}
      </div>
      <div className="extra content">
        <div className="ui two buttons border">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
}
