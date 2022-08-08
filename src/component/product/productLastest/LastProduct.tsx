import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import ProductItem from '../productItem/ProductItem';
import { Products } from '@/interface';

interface Props {
  LastProduct: Products[];
}

const LastProduct: React.FC<Props> = ({ LastProduct }) => {
  return (
    <Box pt={2.5} pb={2.5}>
      <Container>
        <Box>
          <Typography
            mt={2}
            mb={2}
            variant="h3"
            align="center"
            sx={{
              color: '#111',
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            LATEST PRODUCTS
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {LastProduct.length > 0 &&
            LastProduct.map((item) => {
              return (
                <Grid key={item.id} item xs={3}>
                  <ProductItem product={item} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default LastProduct;
