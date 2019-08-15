import React, {Component} from 'react'
import {Mutation, Query} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Router from 'next/router';
import formatMoney from '../lib/formatMoney';
import ErrorMessages from './ErrorMessage'
import styled from 'styled-components';

// single item query
const SINGLE_ITEM_QUERY = gql `
query SINGLE_ITEM_QUERY( $id:ID!){
  item(where:{id:$id}){
        id
        title
        description
        price
  }  
}
`;

const UPDATE_ITEM_MUTATION = gql `
mutation UPDATE_ITEM_MUTATION( $id: ID!,
        $title: String,
        $description: String,
        $price: Int
        # $image: String
        # $largeImage: String

) {
    updateItem(
        id:$id,
        title: $title,
        description: $description,
        price: $price
        # image: $image
        # largeImage: $largeImage
    ){
        id
        title
        description
        price
    }


}
`;
const PageView = styled.div `
display:grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
text-align: center;
grid-gap:10px;
justify-items:stretch;
`;
const ButtonDisplay = styled.button `
  grid-template-columns:-1;
  height:50px;
  align-self:center;
  `;
class UpdateItem extends Component {
    state = {};
    handleChange = (e) => {
        const {name, type, value} = e.target
        // if any of the input is a number parse them before anything else
        const val = type === 'number'
            ? parseFloat(value)
            : value;
        this.setState({[name]: val})
    };
    //updatading items
    updateItem = async (e, updateItemMutation) => {
        e.preventDefault();
        console.log('Updatting Item!!!');
        console.log(this.state);
        const res = await updateItemMutation({
            variables: {
                id: this.props.id,
                ...this.state
            }
        });
        console.log('Updated!!!');
    }
    render() {
        return (
            <Query
                query={SINGLE_ITEM_QUERY}
                variables={{
                id: this.props.id
            }}>
                {({data, loading}) => {
                    if (loading) 
                        return <p>Loading...</p>;
                    if (!data.item) 
                        return <p>No Item Found for id: {this.props.id}.</p>;
                    
                    return (
                        <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
                            {(updateItem, {loading, error}) => (
                                <Form onSubmit={e => this.updateItem(e, updateItem)}>
                                    <ErrorMessages error={error}/>
                                    <fieldset disabled={loading} aria-busy={loading}>
                                        <PageView>
                                            <label htmlFor="title">Title
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    placeholder="Title"
                                                    required
                                                    defaultValue={data.item.title}
                                                    onChange={this.handleChange}/>
                                            </label>
                                            <label htmlFor="price">Price
                                                <input
                                                    type="number"
                                                    name="price"
                                                    id="price"
                                                    placeholder="Price"
                                                    required
                                                    defaultValue={data.item.price}
                                                    onChange={this.handleChange}/>
                                            </label>

                                            <label htmlFor="description">Description
                                                <textarea
                                                    name="description"
                                                    id="description"
                                                    placeholder="Description"
                                                    required
                                                    defaultValue={data.item.description}
                                                    onChange={this.handleChange}/>
                                            </label>

                                            <ButtonDisplay type="submit">Sav{loading ? 'ing':'e'} Changes</ButtonDisplay>
                                        </PageView>
                                    </fieldset>
                                </Form>
                            )}
                        </Mutation >

                    );
                }}
            </Query>

        );
    }
}
export default UpdateItem;
export {UPDATE_ITEM_MUTATION};