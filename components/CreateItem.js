import React, {Component} from 'react'
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Router from  'next/router';
import formatMoney from '../lib/formatMoney';
import ErrorMessages from './ErrorMessage'
import styled from 'styled-components';


const CREATE_ITEM_MUTATION = gql `
mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String

) {
    createItem(
        title: $title
        description: $description
        price: $price
        image: $image
        largeImage: $largeImage
        # user: $user

    ){
        id
        description
        price
    }


}
`;
const PageView = styled.div `
display:grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
text-align: center;
grid-gap:10px;
justify-items:stretch;
`;
  const ButtonDisplay = styled.button `
  /* grid-template-columns:-1; */
  height:40px;
  align-items: stretch;
  align-self:center;
  `;

const InputDisplay = styled.input `
height:40px;
align-self:center;
`;

const TextAreaDisplay = styled.textarea `
height:40px;
align-self:center;
`;


class CreateItem extends Component {
    state = {
        title: "",
        description: "",
        image: "",
        largeImage: "",
        price: 0,
        user: ""
    };
    handleChange = (e) => {
        const {name, type, value} = e.target
        // if any of the input is a number parse them before anything else
        const val = type === 'number'? parseFloat(value): value;
        this.setState({[name]: val})
    };
    //uploading images
    uploadFile = async e =>{
        console.log('uploading file...');
        //pull file from the list of files
        const files = e.target.files;
        const data= new FormData();
        data.append('file',files[0]);
        data.append('upload_preset','inexezy');
//hit cloudinary api
 const  response = await fetch('https://api.cloudinary.com/v1_1/inex/image/upload',
 {
     method:'POST',
     body:data,
 });
 const file = await response.json();
    console.log(file);
this.setState({
    image: file.secure_url,
    largeImage: file.eager[0].secure_url,
});
    };

    render() {
        return (
            <Mutation mutation={CREATE_ITEM_MUTATION}
             variables={this.state}
             >
                {(createItem, {loading, error}) => (
                    <Form  disabled={loading} onSubmit={ async e =>{
                        e.preventDefault();
                        const res= await createItem();
                        // go to the single item page
                        console.log(res);
                        Router.push({
                            pathname: '/item',
                            query:{id: res.data.createItem.id}
                        })
 // if there is an error this component will show up if not then nothing willbe seen
                         }}>
                        <ErrorMessages error={error}/>
                        <fieldset  disabled={loading} aria-busy={loading}>
                           <PageView>
                           <label htmlFor="file">Image
                                <InputDisplay
                                    type="file"
                                    name="file"
                                    id="file"
                                    placeholder="Upload an image"
                                    required
                                    onChange={this.uploadFile}/>
                            </label>

                            <label htmlFor="title">Title
                                <InputDisplay
                                    type="text" 
                                    name="title"
                                    id="title"
                                    placeholder="Title"
                                    required
                                    value={this.state.title}
                                    onChange={this.handleChange}/>
                            </label>
                            <label htmlFor="price">Price
                                <InputDisplay
                                    type="number"
                                    name="price"
                                    id="price"
                                    placeholder="Price"
                                    required
                                    value={this.state.price}
                                    onChange={this.handleChange}/>
                            </label>

                            <label htmlFor="description">Description
                                <TextAreaDisplay
                                    name="description"
                                    id="description"
                                    placeholder="Description"
                                    required
                                    value={this.state.description}
                                    onChange={this.handleChange}/>
                            </label>

   <ButtonDisplay disabled={loading} type="submit">Sav{loading ? 'ing' : 'e'}</ButtonDisplay>
                           </PageView>
                        </fieldset>
                    </Form>
                )}
            </Mutation >

        );
    }
}
export default CreateItem;
export {CREATE_ITEM_MUTATION};