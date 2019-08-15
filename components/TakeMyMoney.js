import React , {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Mutation }  from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User ,{CURRENT_USER_QUERY} from './User';


const CREATE_ORDER_MUTATION=gql`
mutation CREATE_ORDER_MUTATION($token: String!){
    createOrders(token: $token){
id
charge
total
items{
    id 
    title
}
    }

}
`;

function totalItems(cart){
 return   cart.reduce((tally, cartItem)=> tally + cartItem.quantity, 0);
}

class TakeMyMoney extends Component{
    onTokenReturn =  async  (res, createOrders) =>{
           NProgress.start() ;
        console.log(res.id );
        //   manually call the mutation once we have the stripe token..
      const orders = await  createOrders({
            variables:{  
                token: res.id
            }
        }).catch(err=> {alert(err.message);});
        console.log(orders);
        Router.push({
            pathName: '/orderPage',
            query: {id: orders.data.createOrders.id},

        });
        
     };      
    render() { 
    return (
         <User>
             {({data : {me}})=>(
                 <Mutation mutation={CREATE_ORDER_MUTATION}
                 refetchQueries={[{query:CURRENT_USER_QUERY }]}  >
                      {(createOrders)=>(

                 <StripeCheckout
                 amount={calcTotalPrice(me.cart)*100}
                 name ="Sick Fits"
                 description={`Order of ${totalItems(me.cart)} items`}
                 image={me.cart.length && me.cart[0].item && me.cart[0].item.image}
                 stripeKey="pk_test_f3nffSiYTH4diibBpntXc5us00BmYPsqxc"
                 currency="USD"
                 email={me.email}
                 token={res => this.onTokenReturn(res, createOrders)}
                 >{this.props.children}
                 </StripeCheckout>
                      )} 
                 </Mutation>
             )}
         </User>
    );
}

}
export default TakeMyMoney;