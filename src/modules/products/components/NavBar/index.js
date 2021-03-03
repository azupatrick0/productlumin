import React, { useState } from 'react';
import { Flex, Spacer, Text, Image, Select } from "@chakra-ui/react"
import logo from 'assets/logo.png';
import cartIcon from 'assets/cart.png';

const NavBar = ({ setIsCartDrawerOpen, cartQuantity }) => {
	const [ sideBar, setSideBar ] = useState(false);

	const showSideBar = () => {
		setSideBar(!sideBar);
	};

	return (
    <Flex className="navbar" align="center">
      <div className="hamburger" onClick={showSideBar}>
				<span>&#9776;</span>
			</div>
      
			<div className="navbar__logo">
        <img src={logo} className="logo" alt="logo" />
			</div>

      <Flex direction="row" className="navbar__links">
        <div>Shop</div>
        <div>Help</div>
        <div>Blog</div>
      </Flex>

      <Spacer />

      <Flex align="center" direction="row" className="navbar__cart">
        <div>Account</div>
        <Flex direction="row">
          <Image
            boxSize="27px"
            objectFit="cover"
            src={cartIcon}
            alt="Cart Icon"
            className="navbar__cart-icon"
            cursor="pointer"
            onClick={() => setIsCartDrawerOpen(true)}
          />
          <Text className="navbar__cart-quantity">{cartQuantity}</Text>
        </Flex>
        <Select variant="outline" size="sm" defaultValue="en" className="navbar__cart-language">
          <option value="ar">AR</option>
          <option value="fr">FR</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="de">DE</option>
          <option value="he">HE</option>
          <option value="es">ID</option>
          <option value="de">ZH-TW</option>
          <option value="he">PT</option>
        </Select>
			</Flex>
		</Flex>
	);
};

export default NavBar;
