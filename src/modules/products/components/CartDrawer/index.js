import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Flex,
  Spacer,
  Button,
  Grid,
  Text,
  Select,
  Stack
} from "@chakra-ui/react";

import { ChevronRightIcon } from '@chakra-ui/icons';
import CartItem from 'modules/products/components/CartItem';

const CartDrawer = ({ isCartDrawerOpen, onCloseCartDrawer, cart, currency, setCurrency, subTotal, username, removeFromCart, currencies, getProducts, decrementProduct, incrementProduct }) => {
  return (
    <>
      <Drawer isOpen={isCartDrawerOpen} onClose={() => onCloseCartDrawer(false)} size={"md"}>
        <DrawerOverlay />
        <DrawerContent bg="#f2f2ef">
          <DrawerHeader>
            <Grid alignContent="center" templateColumns={["repeat(2, 1fr)"]} mb="10px">
              <IconButton
                aria-label="Close cart drawer"
                size="sm"
                icon={<ChevronRightIcon h="24px" width="18px" />}
                isRound={true}
                variant="outline"
                onClick={() => onCloseCartDrawer(false)}
                borderRadius="100%"
                w="24px"
                border="2px"
              />
              <Text mt="10px" color="#696969" fontWeight="400" fontSize="9px">YOUR CART</Text>
            </Grid>
            <Select variant="outline" size="sm" defaultValue="SLL" w="80px" bg="white" onChange={(e) => {
              setCurrency(e.target.value);
              getProducts({ variables: { currency: e.target.value } });
            }}>
              {
                currencies && currencies.length && currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)
              }
            </Select>
          </DrawerHeader>
          <DrawerBody overflowY="scroll" h="80%">
            {
              cart && cart.length ? cart.map(product => {
                return <CartItem
                  product={product}
                  key={product.id}
                  currency={currency}
                  username={username}
                  removeFromCart={removeFromCart}
                  increment={incrementProduct}
                  decrement={decrementProduct}
                  id={product.id}
                />
              }) : 'There are no items in your cart.'
            }
          </DrawerBody>
          {cart && cart.length ? <DrawerFooter justifyContent="flex-start" borderTopColor="#d0d0d0" borderTopWidth="1px" boxShadow="0 -4px 12px rgb(0 0 0 / 15%)">
            <Stack width="100%">
              <Flex>
                <Text>SubTotal</Text>
                <Spacer />
                <Text>{currency} {subTotal.toLocaleString()}.00</Text>
              </Flex>
              <Stack>
                <Button fontSize={["10px", "10px", "12px", "12px", "12px", "12px"]} fontWeight="400" borderRadius="0" padding={["25px 20px"]} bg="white" borderColor="#2b2e2b" borderWidth="1px" color="#2b2e2b" textAlign="center">MAKE THIS A SUBSCRIPTION (SAVE UP TO 20%)</Button>
                <Button fontSize={["10px", "10px", "12px", "12px", "12px", "12px"]} _hover={{ bg: "#4b5548" }} borderRadius="0" border="0" bg="#4b5548" color="white" fontWeight="400" p={["25px 20px"]}>PROCEED TO CHECKOUT</Button>
              </Stack>
            </Stack>

          </DrawerFooter> : ''}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CartDrawer;
