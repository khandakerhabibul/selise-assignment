import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CartHeader from '@Component/CartHeader/CartHeader';
import useCart from '@Hooks/useCart';
import PRODUCT_LIST from '../product-list.json';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

const ProductCartHeader = () => (
  <Box mb={2} width='100%' display='flex' flex={7}>
    <Box flex={3} display='flex' justifyContent='flex-start' pl={3}>
      <Typography variant='body2'>Product</Typography>
    </Box>
    <Box flex={2} display='flex' justifyContent='center'>
      <Typography variant='body2'>Price</Typography>
    </Box>
    <Box flex={2} display='flex' justifyContent='center'>
      <Typography variant='body2'>Quantity</Typography>
    </Box>
  </Box>
);

function cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const {
    handleAddToCart,
    handleRemoveFromCart,
    cart,
    handleAddToCartFromPage,
  } = useCart();
  useEffect(() => {
    console.log({ cart });
    const occurrences = cart.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    console.log({ occurrences });
    let cartProducts = [];
    PRODUCT_LIST.forEach((item) => {
      Object.keys(occurrences).map((productId) => {
        if (item.product_id === productId) {
          console.log({ item, count: occurrences[productId] });
          cartProducts.push({
            product: item,
            count: occurrences[productId],
            price: item.price * occurrences[productId],
          });
        }
      });
    });
    setCartItems(cartProducts);
  }, [cart]);

  useEffect(() => {
    if (cartItems.length > 0) {
      let cost = 0;
      cartItems.forEach((item) => {
        cost = cost + item.price;
      });
      setTotalCost(cost);
    }
  }, [cartItems]);

  const handleRemoveItems = (index) => {
    let temp = [...cartItems];
    temp.splice(index, 1);
    setCartItems(temp);
  };

  return (
    <Box sx={{ my: 4, pt: 8 }} minWidth='85vw' height={'100vh'}>
      <CartHeader />
      <Box mt={2} display='flex' flex={7}>
        <Box p={2} mr={4} flex={5} border={1} borderColor='primary.main'>
          <ProductCartHeader />
          {cartItems &&
            cartItems.map((item, idx) => (
              <Box key={item} my={2}>
                <Box display='flex' flex={7} width='100%'>
                  <Box
                    flex={3}
                    display='flex'
                    justifyContent='flex-start'
                    pl={3}
                  >
                    <Box mr={1}>
                      <img
                        src={item.product.image_url}
                        width={'64px'}
                        height={'64px'}
                      />
                    </Box>
                    <Box pt={1}>
                      <Typography variant='body2' color='primary'>
                        {item.product.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Box flex={2} display='flex' justifyContent='center'>
                    <Typography variant='body2'>
                      {item.product.price}
                    </Typography>
                  </Box>
                  <Box flex={2} display='flex' justifyContent='center'>
                    <Box mr={2}>
                      <RemoveIcon
                        onClick={() =>
                          handleRemoveFromCart(item.product.product_id)
                        }
                        sx={{ cursor: 'pointer' }}
                        color='primary'
                      />
                    </Box>
                    <Typography sx={{ mr: 2 }} variant='body2'>
                      {item.count}
                    </Typography>
                    <Box mr={4}>
                      <AddIcon
                        onClick={() =>
                          handleAddToCartFromPage(item.product.product_id)
                        }
                        sx={{ cursor: 'pointer' }}
                        color='primary'
                      />
                    </Box>
                    <Box>
                      <CloseIcon
                        onClick={handleRemoveItems}
                        sx={{ cursor: 'pointer' }}
                        color='primary'
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
        <Box p={2} flex={2} border={1} borderColor='primary.main'>
          <Box borderBottom={'1px solid #C9AC60'} pb={2}>
            <Typography variant='body2' color='primary'>
              You may also like
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box mt={2}>Total : {totalCost}</Box>
    </Box>
  );
}

export default cart;
