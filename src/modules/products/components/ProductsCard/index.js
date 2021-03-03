import React from 'react';
import { Stack, Text, Image, Button, ScaleFade } from "@chakra-ui/react";

const ProductsCard = ({ imgSrc, productPrice, productTitle, addToCart, productId, currency }) => {
	return (
    <ScaleFade initialScale={0.9} in={true}>
      <Stack alignItems={["center"]}>
        <Image
          objectFit="contain"
          src={imgSrc}
          alt="Product Image"
          h={["100px", "150px", "150px", "150px", "150px", "150px"]}
          w={["100px", "150px", "150px", "150px", "150px", "150px"]}
        />
        <Text fontSize={["0.6125rem", "0.8125rem", "0.8125rem", "1rem", "1rem",  "1rem"]}>{productTitle}</Text>
        <Text fontSize={["0.6125rem", "0.8125rem", "0.8125rem", "1rem", "1rem",  "1rem"]}>From: {currency} <span className="product_card_price">{productPrice.toLocaleString()}.00</span></Text>
        <Button minWidth={["90%", "90%", "190px", "190px", "190px", "190px"]} fontSize="0.82rem" onClick={() => addToCart(productId)} className="product_card_button">Add to Cart</Button>
      </Stack>
    </ScaleFade>
	);
};

export default ProductsCard;
