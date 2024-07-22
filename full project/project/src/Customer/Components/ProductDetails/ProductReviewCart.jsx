import React from 'react'
import { Grid, Box, Avatar, Rating } from '@mui/material';

const ProductReviewCart = () => {
  return (
    <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Avatar sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>R</Avatar>
        </Grid>
        <Grid item xs={11}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <p className='font-semibold text-lg'>Ram</p>
              <p className='opacity-70 text-sm'>April 5, 2023</p>
            </Box>
            <Rating value={4.4} name='half-rating' readOnly />
          </Box>
          <p>Nice product. I love to buy this product.</p>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductReviewCart;
