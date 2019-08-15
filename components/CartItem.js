import React from 'react';
import formatMoney from '../lib/formatMoney';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = Styled.li `
padding :  0;
border-bottom: 1px solid ${props => props.theme.lightgrey};
display: grid;
align-items: center;
grid-template-columns: auto  8fr  1fr;
img{
    /* margin-right: 1px; */
}   
.cart-item-details{
    display: grid;
    grid-template-columns:1fr 2fr 2fr;
    align-items: center;

}

`;

const CartItem = ({cartItem}) => { 
    if(!cartItem.item) return <p>Tis item has been removed!!</p>
    return ( <CartItemStyles>
    <> <div>
        <img
            width="60"
            height="60"
            src={cartItem.item.image}
            alt={cartItem.item.title}/>
    </div>
    <div className="cart-item-details">
       <div> <h3>{cartItem.item.title}</h3></div>
        <div >
            {cartItem.quantity}
            &times; {formatMoney(cartItem.item.price)}
        </div>
        <div>
            <p>{'='} {formatMoney(cartItem.item.price * cartItem.quantity)}</p>
        </div>
    </div>
    <RemoveFromCart id={cartItem.id}/>
</>
</CartItemStyles>)};

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired
};
export default CartItem;