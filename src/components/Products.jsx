import React from 'react'
import styled from "styled-components";
import SingleProduct from './SingleProduct';
import { popularProducts } from '../data';

const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justifu-content:space-between;

`;

const Products = () => {
    return (
        <Container>
            {popularProducts.map(item=>(
                <SingleProduct item={item}  key={item.id}/>
            ))}
            
        </Container>
    )
}

export default Products
