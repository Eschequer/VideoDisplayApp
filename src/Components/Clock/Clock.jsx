import React from "react";
import style from "./Clock.module.css";
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  #timerId;

  componentDidMount() {
    const hourHand = document.querySelector(`.${style.hourHand}`);
    const minuteHand = document.querySelector(`.${style.minHand}`);
    const secondHand = document.querySelector(`.${style.secondHand}`);

    this.#timerId = setInterval(
      () => this.setDate(hourHand, minuteHand, secondHand),
      1000
    );
  }

  setDate(hs, mins, secs) {
    const now = new Date();

    const hours = now.getHours();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();

    const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    console.log(hoursDegree);
    const minsDegree = (minutes / 60) * 360 + 90;
    const secondsDegree = (seconds / 60) * 360 + 90;

    hs.style.transform = `rotate(${hoursDegree}deg)`;
    mins.style.transform = `rotate(${minsDegree}deg)`;

    !hours ? (hs.style.transition = "none") : (hs.style.transition = "");
    !minutes ? (mins.style.transition = "none") : (mins.style.transition = "");
    !seconds ? (secs.style.transition = "none") : (secs.style.transition = "");

    secs.style.transform = `rotate(${secondsDegree}deg)`;
  }

  render() {
    return (
      <div className={style.clock}>
        <div className={style.clockFace}>
          <div className={style.hand + " " + style.hourHand}></div>
          <div className={style.hand + " " + style.minHand}></div>
          <div className={style.hand + " " + style.secondHand}></div>
        </div>
      </div>
    );
  }
}
