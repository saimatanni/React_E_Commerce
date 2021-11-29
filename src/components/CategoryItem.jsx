import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position:relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  align-items:center;
  justify-content:center;
  display:flex;
  flex-direction:column;
  
  
`;
const TItle = styled.h1`
  color:white;
//   font-size:20px;
  margin-bottom:20px;
`;
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <TItle>{item.title}</TItle>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
