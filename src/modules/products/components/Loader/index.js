import React from 'react';
import { Skeleton, Box, Stack, Grid } from "@chakra-ui/react"

const Loader = () => {
	return (
    <Box className="products__listings">
      <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} columnGap={2} rowGap={20}>
        {
          ['skeleton-1','skeleton-2','skeleton-3'].map(skeletonId => <Stack alignItems={["center"]} key={skeletonId}>
          <Skeleton height="150px" width={["100px", "230px", "250px", "300px", "300px", "300px"]}/>
          <Skeleton height="30px" width={["100px", "230px", "250px", "300px", "300px", "300px"]}/>
          <Skeleton height="20px" width={["100px", "230px", "250px", "300px", "300px", "300px"]} />
          <Skeleton height="50px" width={["100px", "230px", "250px", "300px", "300px", "300px"]} />
        </Stack>)
        }
      </Grid>
    </Box>
	);
};

export default Loader;


