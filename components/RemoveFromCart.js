import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import Styled from 'styled-components';
import gql from 'graphql-tag';
import {CURRENT_USER_QUERY} from './User';
import PropTypes from 'prop-types';

const REMOVE_FROM_CART_MUTATION = gql `
 mutation removeCartItem($id: ID!){
    removeCartItem(id: $id){
        id
    }

 }

`;
const BigButton = Styled.button `
 font-size: 3rem;
 background: white;
 border: 0;
  &:hover{
      color:  ${props => props.theme.red};
      cursor: pointer;

  } 
 `;

class RemoveFromCart extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired
    }
    // *****************************************************
    //  manually deleting item from the cart
    // ********************************************
// gets called immediately a response comes from the server after a mutation
    update =(cache, payload)=>{
        console.log('running remove from cart update function');
    // 1. read cache
    const data= cache.readQuery({query: CURRENT_USER_QUERY});
        console.log(data);
    // 2.remove item from the cart
    const cartItemToRemove= payload.data.removeCartItem.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemToRemove);
    // 3. update the cache by writing back to it
    cache.writeQuery({query: CURRENT_USER_QUERY, data});

    }
    render() {
        return (
            <Mutation mutation={REMOVE_FROM_CART_MUTATION}
            variables={{id: this.props.id}}
            update={this.update}
            optimisticResponse={{
            __typename: 'Mutation',
            removeCartItem:{
                __typename: 'cartItem',
                id: this.props.id,
            }
            }}
            >
                {(removeCartItem, {loading, error}) => (

                    <BigButton 
                    disabled={loading}
                    onClick={()=>{removeCartItem(this.props.id).catch(err=> alert(err.message));}} 
                    title="Delete Item">
                        &times;
                    </BigButton>
                )}
            </Mutation>

        );
    }

}
export default RemoveFromCart;