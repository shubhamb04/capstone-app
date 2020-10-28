import React, { useState, useContext } from "react";
// import Photos from '../pages/Photos'
import { Context } from "./Context";

function Image({ className, img }) {
  const [hover, setHover] = useState(false);
  const { toggleFavorite, addImage, cartItems, removeItem } = useContext(
    Context
  );

  const handleMouseOver = (e) => {
    setHover(true);
  };

  const handleMouseOut = (e) => {
    setHover(false);
  };

  const heartIcon = () =>
    img.isFavorite ? (
      <i
        className="ri-heart-fill favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    ) : (
      hover && (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )
    );

  function cartIcon() {
    const itemExist = cartItems.some((item) => item.id === img.id);
    if (itemExist) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeItem(img.id)}
        ></i>
      );
    } else if (hover) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addImage(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <img src={img.url} className="image-grid" alt="photos" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

export default Image;
