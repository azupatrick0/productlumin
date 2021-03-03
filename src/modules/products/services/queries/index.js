import gql from 'graphql-tag';

const fetchProducts = gql`
  query products($currency: Currency) {
    products {
      id
      title
      image_url
      price(currency:$currency)
    }
  }
`;

const fetchCurrency = gql`
  query currency {
    currency
  }
`;

export {
  fetchProducts,
  fetchCurrency
};
