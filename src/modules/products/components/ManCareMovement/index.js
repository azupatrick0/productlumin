import React from 'react';
import { Box, Grid, Heading, Image, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import manCareImage1 from 'assets/man_care_1.png';
import manCareImage2 from 'assets/man_care_2.png';
import manCareImage3 from 'assets/man_care_3.png';
import manCareImage4 from 'assets/man_care_4.png';
import manCareImage5 from 'assets/man_care_5.jpeg';

const ManCareMovement = () => {
	return (
    <Box className="man__care-movement" bgColor="#ffffff">
      <Heading fontSize={["1.4rem", "1.4rem", "1.4rem", "2.25rem", "2.25rem", "2.25rem"]} className="man__care-movement-heading"><Link className="man__care-movement-heading" href="https://instagram.com/lumin.skin">Join the #ManCareMovement</Link> <ArrowForwardIcon fontSize="1.25rem" /></Heading>
      
      <Grid rowGap={["10px", "10px", "10px", "0px", "0px", "0px"]} pl={["0px", "0px", "0px", "20px", "20px", "20px"]} templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)", "repeat(5, 1fr)", "repeat(5, 1fr)"]}>
        <Image
          objectFit="cover"
          src={manCareImage1}
          alt="Man Care"
          h="98%"
          w="98%"
        />
        <Image
          objectFit="cover"
          src={manCareImage2}
          alt="Man Care"
          h="98%"
          w="98%"
        />
        <Image
          objectFit="cover"
          src={manCareImage3}
          alt="Man Care"
          h="98%"
          w="98%"
        />
        <Image
          objectFit="cover"
          src={manCareImage4}
          alt="Man Care"
          h="98%"
          w="98%"
        />
        <Image
          objectFit="cover"
          src={manCareImage5}
          alt="Man Care"
          h="98%"
          w="98%"
          className="man__care-movement-image"
        />
      </Grid>
    </Box>
	);
};

export default ManCareMovement;
