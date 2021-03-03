import React from 'react';
import { Stack, Text, Image, Box, Grid, ScaleFade } from "@chakra-ui/react";

const CartItem = ({ product, username, currency, removeFromCart, increment, decrement, id }) => {
	return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box bg="white" p={["10px 21px"]} mb="20px">
        <Text ml="99%" fontSize="17px" color="#000" cursor="pointer" onClick={() => removeFromCart(id)}>x</Text>
        <Grid alignContent="center" templateColumns={["repeat(2, 1fr)"]}>
          <Stack>
            <Text color="#1e2d2b" fontSize={["9px", "13px", "13px", "13px", "13px", "13px"]} lineHeight="0.5">{product && product.title}</Text>
            <Text color="#1e2d2b" fontSize={["7px", "9px", "9px", "9px", "9px", "9px"]}>MADE FOR: {username}</Text>
            <Grid  alignContent="center" templateColumns={["repeat(2, 1fr)"]} rowGap={2}>
              <Stack direction={["row"]} borderColor="#bcbcbc" borderWidth="0.5px" width="76px" height="35px"  alignItems="center" justifyContent="center">
                <Text fontSize="15px" mr="8px" cursor="pointer"><span onClick={() => decrement(id)}>-</span></Text>
                <Text fontSize="19px" mr="8px">{product && product.quantity}</Text>
                <Text fontSize="15px" cursor="pointer"><span onClick={() => increment(id)}>+</span></Text>
              </Stack>
              <Stack ml="4px" mt="5px" direction={["row"]}>
                <Text>{currency}</Text>
                <Text>{product.totalPrice.toLocaleString()}.00</Text>
              </Stack>
            </Grid>
          </Stack>

          <Image 
            objectFit="contain"
            src={product && product.image_url}
            alt="product"
            h="80px"
            w={["50px", "50px", "80px", "80px", "80px", "80px"]}
            ml={["30%"]}
          />
        </Grid>
      </Box>
    </ScaleFade>
	);
};

export default CartItem;
