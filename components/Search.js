import React from 'react';
import Downshift,{resetIdCounter} from 'downshift';
import Router from 'next/router';
import {ApolloConsumer} from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import {DropDown, DropDownItem, SearchStyles} from './styles/DropDown';

const SEARCH_ITEM_QUERY = gql `
query SEARCH_ITEM_QUERY($searchTerm: String!){
items(
    where:{OR:[{title_contains: $searchTerm},{ description_contains: $searchTerm}]})
{
    id
    image
    title
}
}
`;

function routeToItem(item){
Router.push({
    pathname: '/item',
    query: {
   id: item.id,
    },
});

}
class AutoComplete extends React.Component {

    state = {
        items: [],
        loading: false
    };
    // manually query apollo client
    onChange = debounce(async(e, client) => {
        console.log('Searching');
        // 1. turn loading on
        this.setState({loading: true});
        const res = await client.query({
            query: SEARCH_ITEM_QUERY,
            variables: {
                searchTerm: e.target.value
            }
        });
        this.setState({items: res.data.items, loading: false});

    }, 350);
    render() {

        resetIdCounter();
        return (
            <SearchStyles>
                <Downshift 
                onChange={routeToItem}
                itemToString={item=> (item===null ?  '': item.title )}>
                    {({getInputProps, getItemProps, isOpen, inputValue, highlightedIndex}) => (

                        <div>
                            <ApolloConsumer>
                                {client => (<input
                                    {...getInputProps({
                                    type:"search",
                                    placeholder: "Search for an item!!",
                                    id:'search',
                                    className: this.state.loading ? 'loading': '',
                                         onChange: e => {
                                              e.persist();
                                               this.onChange(e, client); 
                                               }, })}
                                               />
                                               )}
                            </ApolloConsumer>
                            {isOpen && (
                            <DropDown>
                                {this
                                    .state
                                    .items
                                    .map((item, index) => 
                                    <DropDownItem 
                                    {...getItemProps({item})}
                                    key={item.id}
                                    highlighted={index ===highlightedIndex}
                                    >
                                        < img width="30" heieght="30" src={item.image} alt={item.title}/> {item.title}
                                    </DropDownItem>)}
                                    {!this.state.item && !this.state.loading && ( <DropDownItem>
                                        {inputValue} Not found for search results
                                        </DropDownItem>)}
                            </DropDown>
                            )}
                        </div>
                    )}
                </Downshift>
            </SearchStyles>

        );
    }
}

export default AutoComplete;