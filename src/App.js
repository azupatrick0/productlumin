import { ChakraProvider } from "@chakra-ui/react";
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Products from 'modules/products/pages';
import 'styles/index.scss';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: '',
      },
    });
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Products />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
