import { CartContext } from '@Context/CartProvider';
import { useContext } from 'react';

const useCart = () => {
  const {
    handleAddToCart,
    handleRemoveFromCart,
    cart,
    handleAddToCartFromPage,
  } = useContext(CartContext);
  return {
    handleAddToCart,
    handleRemoveFromCart,
    cart,
    handleAddToCartFromPage,
  };
};

export default useCart;
