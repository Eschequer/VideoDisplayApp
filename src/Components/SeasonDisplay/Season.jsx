import React from "react";

const seasonConfig = {
  winter: {
    icon: "snowflake blue",
    text: "Burr, it's chilly!",
  },
  summer: {
    icon: "sun red",
    text: "Let's hit the beach!",
  },
};

function getSeason(latitude, month) {
  if (latitude > 0) {
    return month > 2 && month < 9 ? "summer" : "winter";
  } else {
    return month > 2 && month < 9 ? "winter" : "summer";
  }
}

export default function Season(props) {
  let season = getSeason(props.latitude, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className="container ui" style={{ padding: "10px" }}>
      <i className={`${icon} icon huge iconLeft`} />
      <h1>{text}</h1>
      <i className={`${icon} icon huge iconRight`} />
    </div>
  );
}
