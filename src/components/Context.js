import React, { useState, useEffect } from "react";
const Context = React.createContext();
function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  const toggleFavorite = (id) => {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  };

  const addToCart = (newItme) => {
    setCartItems((prevState) => [...prevState, newItme]);
  };

  function removeItem(id) {
    setCartItems((prevItem) => prevItem.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeItem,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
