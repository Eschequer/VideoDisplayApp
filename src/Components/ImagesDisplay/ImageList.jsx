import React from "react";
import style from "./ImageList.module.css";

const ImageList = (props) => {
  const images = props.images.map(({ urls, description, id }) => (
    <img src={urls.small} alt={description} key={id} />
  ));

  return <div className={style.imageList}>{images}</div>;
};

export default ImageList;
