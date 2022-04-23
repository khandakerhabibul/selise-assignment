import { Box, Typography } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCart from '@Hooks/useCart';

function Product({ product }) {
  const { handleAddToCart, cart } = useCart();
  console.log({ cart });
  return (
    product && (
      <Box width={'234px'} mr={4} my={2}>
        <Box mb={2} display='flex' justifyContent='center'>
          {product.image_url && (
            <img
              src={product.image_url}
              alt={'product image'}
              width={'234px'}
              height={'257px'}
            />
          )}
        </Box>
        {product.title && (
          <Box
            mb={2}
            display='flex'
            width='100%'
            justifyContent='space-between'
          >
            <Typography variant='body1'>{product.title}</Typography>
            <Box>
              <FavoriteBorderIcon sx={{ cursor: 'pointer' }} />
            </Box>
          </Box>
        )}
        {/* {product.description && (
          <Box width='100%' textAlign='justify'>
            <Typography variant='body2'>{product.description}</Typography>
          </Box>
        )} */}
        {product.price && (
          <Box
            display='flex'
            justifyContent='center'
            width='100%'
            py={1}
            sx={{
              borderTop: '1px solid #C1C1C1',
              borderBottom: '1px solid #dfdfdf',
              fontStyle: 'italic',
            }}
          >
            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
              CHF {product.price}
            </Typography>
          </Box>
        )}
        <Box
          sx={{ cursor: 'pointer', '&:hover': { opacity: 0.7 } }}
          display='flex'
          width='100%'
          justifyContent='center'
          mt={2}
          onClick={() => handleAddToCart(product)}
        >
          <ShoppingCartIcon htmlColor={'#C9AC60'} fontSize='medium' />
          <Typography variant='body1' sx={{ ml: 2 }} color={'primary'}>
            Add to Cart
          </Typography>
        </Box>
      </Box>
    )
  );
}

export default Product;
