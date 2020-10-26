import React, { useState, useContext } from "react";
// import Photos from '../pages/Photos'
import { Context } from "./Context";

function Image({ className, img }) {
  const [hover, setHover] = useState(false);
  const { toggleFavorite } = useContext(Context);

  const handleMouseOver = (e) => {
    setHover(true);
  };

  const handleMouseOut = (e) => {
    setHover(false);
  };

  const heartIcon =
    hover &&
    (img.isFavorite ? (
      <i
        className="ri-heart-fill favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    ) : (
      <i
        className="ri-heart-line favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    ));
  const cartIcon = hover && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <img src={img.url} className="image-grid" alt="photos" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

export default Image;
