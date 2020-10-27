import React, { useState, useContext } from "react";
// import Photos from '../pages/Photos'
import PropTypes from "prop-types";
import { Context } from "./Context";

function Image({ className, img }) {
  const [hover, setHover] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeItem } = useContext(
    Context
  );

  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hover) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  };
  const cartIcon = () => {
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
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  };

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img.url} className="image-grid" alt="photos" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
