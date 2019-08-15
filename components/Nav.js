import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';
import {Mutation} from 'react-apollo';
import CartCount from './CartCount';

import {TOGGLE_CART_MUTATION } from './Cart';


const Nav = () => (
    <User>
      {({data:{me}} ) => (
  <NavStyles>
    <Link href="/items">
      <a>Shop</a>
    </Link>
    {me  && (
      <>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
  <Mutation mutation={TOGGLE_CART_MUTATION}>
  {(toggleCart)=>(
  <button onClick={toggleCart}>
     {me.name} Cart
     <CartCount  count={me.cart.reduce((tally, cartItem)=> 
       tally + cartItem.quantity, 0)}>
        </CartCount>
     </button>
  )}
  </Mutation>
    <Link href="/me">
      <a>Account</a>
    </Link>
  <Signout />
    </>
    )}
   {!me && (

    <Link href="/signupPage">
      <a>Sign In</a>
    </Link>
   )}
  </NavStyles>
  )}
    </User>
);

export default Nav;
