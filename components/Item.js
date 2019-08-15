import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import DeleteItem from './DeleteItem';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import AddToCart from './AddToCart';


const ButtonStyles = styled.div`
font-size:5rem;
font-weight:700;
`;

class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    render() {
        const {item} = this.props;
        return (
/* //  if  image exists for the  item, show the source otherwise show nothing */
            <ItemStyles>
              {item.image && <img src={item.largeImage} alt={item.title}/>}
                <Title>
                     <Link
                        href={{
                        pathname: '/item',
                        query: {id: item.id},
                        }}>
                        <a>{item.title}</a>
                    </Link>  
                </Title>
                 <PriceTag>
                    {formatMoney(item.price)}
                </PriceTag>
                <p>{item.description}</p>
                 <ButtonStyles className="buttonList">  
                   <Link href={{
                    pathname:"/update",
                    query:{id: item.id },
                  }}> 
                   <a >Edit</a>
                  </Link> 

           <AddToCart id={item.id}/>        
          <DeleteItem id={item.id}>Delete</DeleteItem>
                </ButtonStyles> 
            </ItemStyles>
        )
    }
}
export default Item;