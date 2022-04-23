import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import PRODUCT_LIST from '../product-list.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProductTypeFilter from '@Component/ProductTypeFilter/ProductTypeFilter';
import ProductList from '@Component/ProductList/ProductList';

export default function Index() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    console.log({ PRODUCT_LIST });
  }, []);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ my: 4, pt: 10 }} height={'100vh'}>
      <Box
        borderBottom={1}
        borderColor={'primary.main'}
        display='flex'
        justifyContent={'space-between'}
        width='100%'
      >
        <Box>Filter product search</Box>
        <Box onClick={handleExpand} sx={{ cursor: 'pointer' }}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Box>
      </Box>
      {expanded && (
        <Box bgcolor={'viCafeFilterBg'} p={4}>
          <Box display={'flex'}>
            <Box mr={4}>
              <Typography variant='filterCategory'>
                Select product type
              </Typography>
            </Box>
            <Box>
              <ProductTypeFilter />
            </Box>
          </Box>
        </Box>
      )}
      <ProductList productList={PRODUCT_LIST} />
    </Box>
  );
}
