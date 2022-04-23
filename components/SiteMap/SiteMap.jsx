import React from 'react';
import { Box, Typography, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/router';
import useCart from '@Hooks/useCart';

function SiteMap() {
  const router = useRouter();
  const { cart } = useCart();
  return (
    <Box width={30} mt={8}>
      <Box mb={1} sx={{ cursor: 'pointer' }}>
        <SearchIcon />
      </Box>
      <Box
        mb={1}
        sx={{ cursor: 'pointer' }}
        onClick={() => router.push('/cart')}
      >
        <Badge badgeContent={cart && cart.length} color='primary'>
          <ShoppingCartIcon />
        </Badge>
      </Box>
      <Box mb={1} sx={{ cursor: 'pointer' }}>
        <PermIdentityIcon />
      </Box>
      <Box mb={1} sx={{ cursor: 'pointer' }}>
        <FavoriteBorderIcon />
      </Box>
      <Box mb={1}>
        <Typography
          variant='body1'
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
          color='primary'
        >
          E N
        </Typography>
      </Box>
      <Box>
        <Typography
          variant='body1'
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
        >
          D E
        </Typography>
      </Box>
    </Box>
  );
}

export default SiteMap;
