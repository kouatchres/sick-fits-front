import React, {Component} from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Error from './ErrorMessage'
import Styled from 'styled-components';
import Head from 'next/head';

const SingleItemStyles = Styled.div `
 max-width:1300px;
 margin:2rem auto;
 box-shadow:${props => props.theme.bs};
 display:grid;
 grid-auto-columns: 1fr;
 grid-auto-flow: column;
 min-height:1000px;

 img{
     /* height:100%;
     width:100%; */
     /* object-fit:contain; */
 } 
 .details{
     margin:2rem;
     font-size: 1.08rem;
 }
`;

const SINGLE_ITEM_QUERY = gql `
query SINGLE_ITEM_QUERY($id:ID!){
item(where:{id:$id }){
    id
    title
    description
    image
    largeImage
}
}
`;

class SingleItem extends Component {
    render() {
        return (
            <Query
                query={SINGLE_ITEM_QUERY}
                variables={{
                id: this.props.id
            }}>

                {({error, loading, data}) => {
                    if (error) 
                        return <Error error={error}/>;
                    if (!data.item) 
                        return <p>No item found for this id: {this.props.id}</p>;
                    if (loading) 
                        return <p>Loading...</p>;
                    console.log(data);
                    const item = data.item;
                    return (
                        <SingleItemStyles>
                            <Head>
                                <title>
                                    Sick Fits | {item.title}
                                </title>
                            </Head>
                            <img src={item.largeImage} alt={item.title}/>
                            <div className="details">
                            <h2>Viewing {item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </SingleItemStyles>
                    );

                }}
            </Query>
        );

    }
}
export default SingleItem;

