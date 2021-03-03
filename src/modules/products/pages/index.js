import React, { useState } from 'react';
import { Text, Link, Spacer } from '@chakra-ui/react';
import NavBar from 'modules/products/components/NavBar';
import ProductsFilter from 'modules/products/components/ProductsFilter';
import ProductsListing from 'modules/products/components/ProductsListing';
import ManCareMovement from 'modules/products/components/ManCareMovement';
import Footer from 'modules/products/components/Footer';

function Products() {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showCookiesAlert, setShowCookiesAlert] = useState(true);

  return (
    <div>
      <div className="info">
        <Text fontSize="sm">Due to extremely high demand, orders are taking longer than usual to prepare for shipment. See how your country is affected {" "}
        <Link textDecoration="underline" href="https://store.luminskin.com/pages/covid19-faq">here</Link>
        </Text>
      </div>
      <div className="products">
        <NavBar cartQuantity={cartQuantity} setIsCartDrawerOpen={setIsCartDrawerOpen} />

        <ProductsFilter />

        <ProductsListing
          currency={'SLL'}
          isCartDrawerOpen={isCartDrawerOpen}
          setIsCartDrawerOpen={setIsCartDrawerOpen}
          setCartQuantity={setCartQuantity}
        />

        <ManCareMovement />

        <Footer />

        <div onClick={() => setShowCookiesAlert(false)}  className={showCookiesAlert ? "footer__info": "footer__info-hidden"}>
          <Text fontSize="sm">Lumin uses 3rd-party cookies to ensure you have the best experience on our website. {" "}
          <Link textDecoration="underline" href="https://luminskin.com/pages/privacy-policy">Learn more</Link>
          </Text>
          <Spacer />
          <Link className="footer__info-button">
            Got it!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
