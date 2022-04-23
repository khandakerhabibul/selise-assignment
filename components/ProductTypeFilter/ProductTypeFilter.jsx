import { Box, Typography } from '@mui/material';
import React from 'react';
import { PRODUCT_TYPE } from 'data/filterList';

function ProductTypeFilter() {
  return (
    <Box display='flex' justifyContent='space-around'>
      {PRODUCT_TYPE &&
        PRODUCT_TYPE.map((item, idx) => (
          <Box
            key={`${item}${idx}`}
            mx={1}
            py={0.5}
            px={2}
            borderRadius={8}
            border={1}
            borderColor={'primary.main'}
            sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'primary.main' } }}
          >
            <Typography variant='body2'>{item.type}</Typography>
          </Box>
        ))}
    </Box>
  );
}

export default ProductTypeFilter;
