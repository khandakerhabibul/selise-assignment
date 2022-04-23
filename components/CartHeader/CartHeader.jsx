import React from 'react';
import BarDesign from '@Component/BarDesign/BarDesign';
import TextField from '@mui/material/TextField';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Typography } from '@mui/material';

function CartHeader() {
  return (
    <Box display='flex' justifyContent='space-between'>
      <Box>
        <BarDesign />
        <Box mb={2}>
          <Typography variant='h2'>Your Cart</Typography>
        </Box>
        <Box mb={4} maxWidth={'486px'}>
          <Typography variant='body2'>
            This is your cart based on your item you want to buy. Please check
            all the item carefully before proceeding.
          </Typography>
        </Box>
      </Box>
      <Box mr={4} pt={4}>
        <Box mb={1}>
          <Typography variant='body1' color='primary'>
            Do you have any coupon code?
          </Typography>
        </Box>
        <Box
          mb={3}
          component='form'
          sx={{
            '& > :not(style)': { m: 0, width: '40ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            sx={{ fontSize: 14, width: 200 }}
            id='standard-basic'
            label='Enter your coupon code'
            variant='standard'
            fullWidth
          />
        </Box>
        <Box display='flex' alignItems='center'>
          <Typography sx={{ cursor: 'pointer', mr: 1 }} variant='body1'>
            Apply coupon
          </Typography>
          <Box pt={0.7}>
            <ArrowRightAltIcon sx={{ cursor: 'pointer' }} fontSize='large' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CartHeader;
