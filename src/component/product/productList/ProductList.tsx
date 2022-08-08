import { Products } from '@/interface';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import ProductItem from '../productItem/ProductItem';
import { motion, AnimatePresence } from 'framer-motion';
interface Props {
  product: Products[];
}
const variants = {
  hidden: { opacity: 0, y: 40},
  enter: {
    opacity: 1,
    y: 0,

    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -0. },
  },
};
const ProductList: React.FC<Props> = ({ product }) => {
  
  return (
    <Box>
      <Container>
        <Box>
          <Typography
            align="center"
            variant="h3"
            sx={{
              fontSize: 20,
              color: '#111',
              fontWeight: 600,
            }}
          >
            BROWSE TOP SELLING PRODUCTS
          </Typography>
        </Box>

        <Stack mt={2} mb={8}>
          <AnimatePresence>
            <Grid
              layout
              layoutId="product-list"
              component={motion.div}
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              container
              spacing={3}
            >
              {product?.map((item) => {
                return (
                  <Grid
                    variants={variants}
                    component={motion.div}
                    key={item.id}
                    item
                    xs={3}
                  >
                    <ProductItem product={item} />
                  </Grid>
                );
              })}
            </Grid>
          </AnimatePresence>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductList;
