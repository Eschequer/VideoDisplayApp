import React from "react";
import style from "./Season.module.css";

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
    <div className={`${style[season]} ${style.season}`}>
      <i className={`${icon} icon huge ${style.iconLeft}`} />
      <h1>{text}</h1>
      <i className={`${icon} icon huge ${style.iconRight}`} />
    </div>
  );
}
