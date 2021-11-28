import { Search } from "@material-ui/icons";
import Icon from "@mui/material/Icon";
import { textAlign } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

const Container = styled.div({
  height: "60px",
});
const Wrapper = styled.div({
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const Left = styled.div({
  flex: "1",
  display: "flex",
  alignItems: "center",
});
const Language = styled.span({
  fontSize: "14px",
  cursor: "pointer",
});
const SearchContainer = styled.div({
  border: "0.5px solid lightgray",
  marginLeft: "25px",
  padding: "5px",
  display: "flex",
  alignItems: "center",
});
const Input = styled.div({
  border: "none",
});
const Center = styled.div({
  flex: "1",
  textAlign: "center",
});
const Logo = styled.h1({
  fontWeight: "bold",
});
const Right = styled.div({
  flex: "1",
  display:'flex',
  alignItems:'center',
  justifyContent:'flex-end'
});
const MenuItem = styled.div({
  fontSize: "14px",
  marginLeft:"25px"
});

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>english</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:'gray', fontSize:'16px'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>TANNI.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge color="secondary" badgeContent={4}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
