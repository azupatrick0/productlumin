import React from 'react';
import { Box, Grid, Image, Link, Text, Stack, FormControl, Heading, Input } from "@chakra-ui/react";
import cards from 'assets/cards.png';
import instagram from 'assets/instagram.png';
import facebook from 'assets/facebook.png';
import twitter from 'assets/twitter.png';

const Footer = () => {
	return (
    <Box className="products__footer">
      <Grid rowGap={["10px", "10px", "10px", "0px", "0px", "0px"]} templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}>
        <Stack>
          <Heading fontFamily="Freight-display-pro">Let's stay in touch</Heading>
          <Text fontSize="1rem" mb="0.75rem" w={["250px", "300px", "300px", "300px", "300px", "300px"]}>
            We’ll give you a heads up on new Lumin products, deals, and events, plus tips & tricks on how to keep your skin looking its damned finest.
          </Text>
          <FormControl id="email">
            <Input bg="transparent" focusBorderColor="white" w={["250px", "300px", "300px", "300px", "300px", "300px"]} variant="flushed" type="email" size="sm" />
          </FormControl>
        </Stack>

        <Grid alignContent="center" rowGap={["10px", "10px", "10px", "0px", "0px", "0px"]} templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"]}>
          <Stack>
            <Heading fontSize="1rem">Shop</Heading>
            <Text>Skin</Text>
            <Text>Hair</Text>
            <Text>Body</Text>
          </Stack>

          <Stack>
            <Heading fontSize="1rem">About</Heading>
            <Text>Blog</Text>
            <Text>How To</Text>
            <Text>Ingredients</Text>
            <Text>Reviews</Text>
            <Text>Support</Text>
          </Stack>

          <Stack>
            <Heading fontSize="1rem">More</Heading>
            <Text>Jobs</Text>
            <Text>Affliate</Text>
            <Text>Wholesale</Text>
            <Text>Free Trial FAQ</Text>
            <Text>Heroes Program</Text>
            <Text>Request Personal Data</Text>
          </Stack>

          <Grid templateColumns={["repeat(3, 1fr)"]}>
            <Link href="https://www.instagram.com/lumin.skin/"><Image 
              objectFit="cover"
              src={instagram}
              alt="instagram"
              height="30px"
            />
            </Link>
            <Link href="https://facebook.com/lumin.skincare/"><Image 
              objectFit="cover"
              src={facebook}
              alt="facebook"
              height="30px"
            />
            </Link>
            <Link href="https://twitter.com/lumin_skin"><Image 
              objectFit="cover"
              src={twitter}
              alt="twitter"
              height="30px"
            />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Stack>
        <Heading fontSize="1rem" mt="2.5rem" mb="0.5rem">Need help?</Heading>
        <Text fontSize="1rem" mb="0.1rem">Contact us through our <Link>Support Concierge</Link></Text>
        <Text fontSize="1rem" mb="2.5rem">Or email us at <Link>support@luminskin.com</Link></Text>
      </Stack>
      <Stack mb="1rem" direction={["row"]}>
        <Text fontSize="1rem">&copy; 2021, Lumin</Text>
        <Image 
          objectFit="cover"
          src={cards}
          alt="Cards"
          h={["50%","50%","20%","10%","10%","10%"]}
          w={["50%","50%","20%","10%","10%","10%"]}
          mb="2rem"
        />
      </Stack>
      <Stack mb="1rem" direction={["row"]}>
        <Link textDecoration="underline">Privacy Policy</Link>
        <Link textDecoration="underline">Return Policy</Link>
        <Link textDecoration="underline">Terms of Service</Link>
      </Stack>
      <Text fontSize="1rem" mb="2rem">3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010</Text>
    </Box>
	);
};

export default Footer;
