import React from 'react';
import { Select, Box, Stack, Flex, Heading, Text } from "@chakra-ui/react"

const ProductsFilter = () => {
	return (
    <Box bgColor="#f5f5f4">
      <Flex 
        direction={["column", "column", "column", "row", "row", "row"]}
        className="products_filter" 
        align={["flex-start", "flex-start", "flex-start", "center", "center", "center"]}
        justifyContent={["space-around", "space-around", "space-around", "space-between", "space-between", "space-between"]}
      >
        <Stack>
          <Heading fontWeight="600" fontSize={["1.5rem", "1.5rem", "2rem", "3rem", "3rem", "3rem"]} className="all_products">All Products</Heading>
          <Text fontSize={[".8125rem", ".8125rem", "1rem", "1rem", "1rem", "1rem"]}>A 360° look at Lumin</Text>
        </Stack>
        
        <Select variant="outline" size="lg" w={["98%", "98%", "98%", "30%", "30%", "30%"]} defaultValue="filter-by" cursor="pointer" bgColor="white">
          <option value="filter-by" disabled>Filter By</option>
          <option value="all-products">All Products</option>
          <option value="new-products">New Products</option>
          <option value="sets">Sets</option>
          <option value="skincare">Skincare</option>
          <option value="hair-and-body">Hair & Body Care</option>
          <option value="accesories">Accessories</option>
        </Select>
      </Flex>
    </Box>
	);
};

export default ProductsFilter;
