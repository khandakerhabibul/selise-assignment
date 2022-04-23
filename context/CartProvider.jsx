import React, { useState } from 'react';

export const CartContext = React.createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    console.log({ itemAdd: item });
    let prevItems = [...cart];
    prevItems.push(item.product_id);
    setCart(prevItems);
  };
  const handleAddToCartFromPage = (itemId) => {
    let prevItems = [...cart];
    prevItems.push(itemId);
    setCart(prevItems);
  };

  const handleRemoveFromCart = (item) => {
    let currentItems = [...cart];
    let index = currentItems.indexOf(item);
    if (index > -1) {
      currentItems.splice(index, 1);
    }
    setCart(currentItems);
  };

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        handleRemoveFromCart,
        cart,
        handleAddToCartFromPage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
