import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Input,
  Button,
  Grid,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";

import { ChevronRightIcon } from '@chakra-ui/icons';

const UserDrawer = ({ isOpen, onClose, productImageSrc, addToCart, productId }) => {
  const [username, setUserName] = useState('');

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent bg="#f2f2ef">
          <DrawerHeader>
            <Grid alignContent="center" templateColumns={["repeat(2, 1fr)"]}>
              <IconButton
                aria-label="Close user drawer"
                size="sm"
                icon={<ChevronRightIcon h="24px" width="18px" />}
                isRound={true}
                variant="outline"
                onClick={onClose}
                borderRadius="100%"
                w="24px"
                mt="10px"
                border="2px"
              />
              <Image
                objectFit="cover"
                src={productImageSrc}
                alt="product"
                h="60px"
              />
            </Grid>
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              <Text fontFamily="Freight-display-pro" color="#2b2e2b" fontSize="28px">First, let's personalize.</Text>
              <Text color="#2b2e2b" fontSize="15px" mb="30px">Products that you receive may vary according to your age bracket & skin type to optimize results.</Text>
            </Stack>
            <form
              id="cart__form"
              onSubmit={(e) => {
                e.preventDefault();
                addToCart(productId, username);
              }}
            >
              <Text mb="10px">Personalization Details</Text>
              <Input onChange={(e) => setUserName(e.target.value)} bg="white" borderRadius="0" outline="none" fontSize="13px" border="0" p={["27px 20px 27px 22px"]} name="name" placeholder="Recipient Name" isRequired />
            </form>
          </DrawerBody>
          <DrawerFooter>
            <Button width="99%" _hover={{ bg: "#4b5548" }} borderRadius="0" border="0" bg="#4b5548" color="white" fontWeight="400" fontSize="12px" p={["28px 20px"]} type="submit" form="cart__form">
              ADD TO CART
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default UserDrawer;
