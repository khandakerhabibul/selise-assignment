import BarDesign from '@Component/BarDesign/BarDesign';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Product from './Product';

function ProductList({ productList = [] }) {
  return (
    <Box mt={8}>
      <BarDesign />
      <Box mb={4}>
        <Typography variant='h2'>OUR BEST SELLERS</Typography>
      </Box>
      <Box
        display='flex'
        flexWrap='wrap'
        flexBasis='auto'
        justifyContent='space-between'
      >
        {productList &&
          Array.isArray(productList) &&
          productList.map((product) => (
            <Product key={product} product={product} />
          ))}
      </Box>
    </Box>
  );
}

export default ProductList;
