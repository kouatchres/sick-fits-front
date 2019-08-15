import React from 'react';
import SickButton from './styles/SickButton.js';
import CartStyles from './styles/CartStyles.js';
import Supreme from './styles/Supreme.js';
import CloseButton from './styles/CloseButton.js';
import {Query, Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
import CartItem from './CartItem';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import TakeMyMoney from './TakeMyMoney';

const LOCAL_STATE_QUERY = gql `
query{
    cartOpen @client
}

`;
const TOGGLE_CART_MUTATION = gql `
mutation{
    toggleCart @client
    # cartOpen: !cartOpen
}
`;

const Cart = () => (
    <User>
        {({data: {
                me
            }}) => {
            if (!me) 
                return null;
                console.log(me);
            return (
                <Mutation mutation={TOGGLE_CART_MUTATION}>
                    {(toggleCart) => (
                        <Query query={LOCAL_STATE_QUERY}>
                            {({data}) => (

                                <CartStyles open={data.cartOpen}>
                                    <header>
                                        <CloseButton onClick={toggleCart} title="close">&times;</CloseButton>
                                        <Supreme >{me.name} Cart</Supreme>
                                        <p>You have {me.cart.length} item{me.cart.length ===1 ? '':'s'} in your cart.</p>
                                    </header>
                                    <ul>
                                        {me.cart.map(cartItem=>
                                        <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)}
                                    </ul>
                                    <footer>
                                        <p> {formatMoney(calcTotalPrice(me.cart))}</p>
                                {me.cart.length && (

                                        <TakeMyMoney>
                                        <SickButton>cheeeckout</SickButton>
                                        </TakeMyMoney>
                                )}  
                                    </footer>
                                </CartStyles>
                            )}
                        </Query>
                    )}
                </Mutation>
            )
        }}
    </User>
);
export default Cart;
export {TOGGLE_CART_MUTATION, LOCAL_STATE_QUERY};