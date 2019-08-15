import React, {Component} from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './Items';
import { PAGINATION_QUERY } from './Pagination';


const DELETE_ITEM_MUTATION = gql`
mutation DELETE_ITEM_MUTATION($id: ID!){
    deleteItem(id: $id){
        id
}}
`;


class DeleteItem extends Component {
  
  update =(cache, payload)=>{
// 1. reach cache for all the items present
const data = cache.readQuery({query:ALL_ITEMS_QUERY});
console.log(data, payload);

// 2. filter the deleted item out of the page
data.items= data.items.filter(item=> (
    item.id !== payload.data.deleteItem.id 
));
//3. put back the remaining items not deleted
 cache.writeQuery({ query: ALL_ITEMS_QUERY , data });
 console.log(data, payload);

  };
    render() {
        return (
        <Mutation 
        mutation={DELETE_ITEM_MUTATION}
         variables={{id: this.props.id}}
         update={this.update}
         refetchQueries={[{ query: ALL_ITEMS_QUERY },{ query: PAGINATION_QUERY }]}

         >
                {(deleteItem, {error}) => (
                    <button
                        onClick={() => {
                        if (confirm('Are you sure you want to delete this Item?')) {
                            deleteItem().catch(error=>{

                                alert.error.ALL_ITEMS_QUERY
                            });
                            {/* catch(err=> {alert(err.message);}) */}
                        }
                    }}>{this.props.children}</button>
                )}
            </Mutation>
        );
    }
}
export default DeleteItem;


