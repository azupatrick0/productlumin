import React, { useState } from 'react';
import { Grid, useToast  } from "@chakra-ui/react";
import { fetchProducts, fetchCurrency } from 'modules/products/services/queries';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import ProductsCard from 'modules/products/components/ProductsCard';
import Loader from 'modules/products/components/Loader';
import UserDrawer from 'modules/products/components/UserDrawer';
import CartDrawer from 'modules/products/components/CartDrawer';

const ProductsListing = ({ currency, isCartDrawerOpen, setIsCartDrawerOpen, setCartQuantity }) => {
  const toast = useToast();
  const [products, setProducts] = useState();
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [productImageSrc, setProductImageSrc] = useState('');
  const [subTotal, setSubTotal] = useState(0);
  const [productId, setProductId] = useState();
  const [username, setUserName] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [productCurrency, setCurrency] = useState(currency);

  const onOpenUserDrawer = () => {
    setIsUserDrawerOpen(true);
  }

  const onCloseUserDrawer = () => {
    setIsUserDrawerOpen(false);
  }

  const { data, loading } = useQuery(fetchProducts, {
    variables: {
      currency
    },
    onError() {
      toast({
        position: "top-right",
        title: "Something went wrong, please try again",
        description: "Failed to load products",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    },
    onCompleted() {
      setProducts(data.products);
    },
    fetchPolicy: 'no-cache',
  });

  const { data: currencyData } = useQuery(fetchCurrency, {
    onError() {
      toast({
        position: "top-right",
        title: "Something went wrong,  please try again",
        description: "Failed to fetch currency",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    },
    onCompleted() {
      setCurrencies(currencyData.currency);
    },
    fetchPolicy: 'no-cache',
  });

  const [getProducts,
    { data: getProductsAfterRefetching }] = useLazyQuery(fetchProducts, {
    onError() {
      toast({
        position: "top-right",
        title: "Something went wrong, please try again",
        description: "Failed to load products",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    },
    onCompleted() {
      const products = getProductsAfterRefetching.products;
      let subtotal = 0;

      const newCart = cart.map((product) => {
        const reloadedProduct = products.filter(prod => prod.id === product.id);
        product.price = reloadedProduct[0].price;
        product.totalPrice = reloadedProduct[0].price * product.quantity;
        subtotal = subtotal + product.totalPrice;
        return product;
      })

      setCart(newCart);
      setSubTotal(subtotal);
      setProducts(products);
    },
    fetchPolicy: 'no-cache',
  });

  const preAddToCart = (productId) => {
    onOpenUserDrawer();
    const productToAddToCart = products.filter((product) => product.id === productId);
    setProductImageSrc(productToAddToCart && productToAddToCart[0] && productToAddToCart[0].image_url);
    setProductId(productToAddToCart && productToAddToCart[0] && productToAddToCart[0].id);
  }

  const addToCart = (productId, username) => {
    onCloseUserDrawer();
    setIsCartDrawerOpen(true);
    setUserName(username);
    const productToAddToCart = products.filter((product) => product.id === productId);
    setProductImageSrc(productToAddToCart && productToAddToCart[0] && productToAddToCart[0].image_url);

    if (cart.length) {
      const isProductInCart = cart.filter(product => {
        return product.id === productId;
      });

      if (isProductInCart.length) {
        isProductInCart[0].quantity +=  1;
        isProductInCart[0].totalPrice = isProductInCart[0].price * isProductInCart[0].quantity;
        setCartQuantity((cartQuantity) => cartQuantity + 1);
        setSubTotal((subTotal) => subTotal + isProductInCart[0].price);
      } else {
        productToAddToCart[0].quantity = 1;
        productToAddToCart[0].totalPrice = productToAddToCart[0].price;
        setCart([...cart, productToAddToCart[0]]);
        setCartQuantity((cartQuantity) => cartQuantity + 1);
        setSubTotal((subTotal) => subTotal + productToAddToCart[0].price * productToAddToCart[0].quantity);
      }
    } else {
      productToAddToCart[0].quantity = 1;
      productToAddToCart[0].totalPrice = productToAddToCart[0].price * productToAddToCart[0].quantity;

      setCart([...cart, productToAddToCart[0]]);
      setCartQuantity((cartQuantity) => cartQuantity + 1);
      setSubTotal((subTotal) => subTotal + productToAddToCart[0].price * productToAddToCart[0].quantity);
    }
  }

  const removeFromCart = (productId) => {
    const productToRemoveFromCart = cart.filter((product) => product.id === productId);
    const productToRemainInCart = cart.filter((product) => product.id !== productId);
    setSubTotal(subTotal => subTotal - (productToRemoveFromCart[0].totalPrice));
    setCartQuantity((cartQuantity) => cartQuantity - 1);
    setCart(productToRemainInCart);
  }

  const incrementProduct = (productId) => {
    const productToIncrement = cart.filter(product => {
      return product.id === productId;
    });

    productToIncrement[0].quantity += 1;
    productToIncrement[0].totalPrice = productToIncrement[0].price * productToIncrement[0].quantity;

    setCart((cart) => [...cart]);
    setCartQuantity((cartQuantity) => cartQuantity + 1);
    setSubTotal((subTotal) => subTotal + productToIncrement[0].price);
  }

  const decrementProduct = (productId) => {
    const productToDecrement = cart.filter(product => {
      return product.id === productId
    });

    productToDecrement[0].quantity -= 1;
    if (productToDecrement[0].quantity < 1) {
      removeFromCart(productId);
    } else {
      productToDecrement[0].totalPrice = productToDecrement[0].price * productToDecrement[0].quantity;

      setCart((cart) => [...cart]);
      setCartQuantity((cartQuantity) => cartQuantity - 1);
      setSubTotal((subTotal) => subTotal - productToDecrement[0].price);
    }
  }

	return (
    <div>
      <UserDrawer 
        isOpen={isUserDrawerOpen}
        onClose={onCloseUserDrawer}
        onOpen={onOpenUserDrawer}
        productImageSrc={productImageSrc}
        addToCart={addToCart}
        productId={productId}
      />
      <CartDrawer
        isCartDrawerOpen={isCartDrawerOpen}
        onCloseCartDrawer={setIsCartDrawerOpen}
        cart={cart}
        currency={productCurrency}
        subTotal={subTotal}
        username={username}
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
        removeFromCart={removeFromCart}
        currencies={currencies}
        getProducts={getProducts}
        setCurrency={setCurrency}
      />
      {
        loading ? <Loader /> : <div className="products__listings">
          <Grid alignContent="center" templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} columnGap="1%" rowGap={20}>
            {
              products && products.length ? products.map(product =>
                <ProductsCard
                  key={product.id}
                  addToCart={preAddToCart}
                  productId={product.id}
                  imgSrc={product.image_url}
                  productTitle={product.title}
                  productPrice={product.price}
                  currency={productCurrency}
                />
              ) : 'Sorry, no products found'
            }
          </Grid>
        </div>
      }
    </div>
	);
};

export default ProductsListing;
