import withApollo from 'next-with-apollo';
// brings in all the bells and whistles for a modern Apollo client state and link management
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import {TOGGLE_CART_MUTATION, LOCAL_STATE_QUERY} from '../components/Cart';


function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          // sends in all neccessary info about the logged in client
          credentials: 'include',
        },
        headers,
      });
    },
    // local data
    clientState:{
      resolvers:{
        Mutation:{
      toggleCart(_,variables, {cache}){
      //1. read the cartOpen value from the cache
      const {cartOpen} = cache.readQuery({
        query:LOCAL_STATE_QUERY,
      });
      console.log(cartOpen);
      //2. write the opposiste of the cart state
      const data = {
        data: {cartOpen :!cartOpen},
      };
      cache.writeData(data);
      return data;
        },
      },
      },
      defaults:{
        cartOpen:false,
      },
    }
  });
}

export default withApollo(createClient);
