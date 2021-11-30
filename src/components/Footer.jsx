// import { Facebook, Instagram, MailOutline, Map, Phone, Room, Twitter, YouTube } from '@material-ui/icons';
// import React from 'react'
// import styled from 'styled-components'

// const Container =styled.div`
// display:flex;
// `;
// const Center =styled.div`
// flex:1;
// padding:20px;
// `;
// const Title=styled.h3`
// margin-bottom:30px;
// `;
// const List=styled.ul`
// margin:0;
// padding:0;
// list-style:none;
// display:flex;
// flex-wrap:wrap;
// `;
// const ListItem=styled.li`
// width:50%;
// margin-left:20px'`;
// const Left =styled.div`
// flex:1;
// display:flex;
// flex-direction:culmn;
// margin-bottom:10px;
// `;
// const Logo =styled.h1`

// `;
// const Desc =styled.p`
// margin:20px 20px;

// `;
// const SocialContainer =styled.div`
// display:flex;
// `;
// const Socialicon =styled.div`
// width:40px;
// height:40px;
// border-radius:50%;
// color:white;
// background-color: #${props=>props.color};
// display:flex;
// align-items:center;
// justify-content:center;
// margin-right:20px;
// `;
// const Right =styled.div`
// flex:1;
// padding:20px;
// `;
// const ContactItems=styled.div`
// margin-bottom:20px;
// display:flex;
// align-items:center;
// `;
// const Payment=styled.img`
// width:50%;
// `;


// const Footer = () => {
//     return (
//         <Container>
//             <Left>
//                 <Logo>TANNI.</Logo>
//                 <Desc>
//                     There are many varition of passage of Lorem Ipsum available, but 
//                     the majority have suffered alteration in soime form, by injected humor, 
//                     or randomised words which dont,
//                     look even slightly believable.
//                 </Desc>
//                 <SocialContainer>
//                     <Socialicon color="3B5999">
//                         <Facebook />
//                     </Socialicon>
//                     <Socialicon color="E4405F">
//                         <Instagram/>
//                     </Socialicon>
//                     <Socialicon color="55ACEE">
//                         <YouTube/>
//                     </Socialicon > 
//                     <Socialicon color="E60023">
//                         <Twitter/>
//                     </Socialicon>
//                 </SocialContainer>
//             </Left>
//             <Center>
//                 <Title>Useful Links</Title>
//                 <List>
//                 <ListItem>Home</ListItem>
//                 <ListItem>Cart</ListItem>
//                 <ListItem>Man Fashion</ListItem>
//                 <ListItem>Women Fashion</ListItem>
//                 <ListItem>Accessories</ListItem>
//                 <ListItem>My Acount</ListItem>
//                 <ListItem>Order Tracking</ListItem>
//                 <ListItem>Wishlist</ListItem>
//                 <ListItem>Terms</ListItem>
//                 </List>
            
//             </Center>
//             <Right>
//                 <Title>Contact</Title>
//                 <ContactItems>
//                    <Room style={{marginRight:"10px"}}/> Gulshan,Vatara 100feet, Dhaka-1212
//                 </ContactItems>
//                 <ContactItems>
//                    <Phone style={{marginRight:"10px"}}/> 01955770873
//                 </ContactItems>
//                 <ContactItems>
//                    <MailOutline style={{marginRight:"10px"}}/> tannigmail.com
//                 </ContactItems>
//                 <Payment src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" />
//             </Right>
            
            
//         </Container>
//     )
// }

// export default Footer
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    YouTube,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from '../Responsive';
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const Socialicon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
    
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
                 <Logo>TANNI.</Logo>
                 <Desc>
                     There are many varition of passage of Lorem Ipsum available, but 
                     the majority have suffered alteration in soime form, by injected humor, 
                     or randomised words which dont,
                     look even slightly believable.
                 </Desc>
                 <SocialContainer>
                    <Socialicon color="3B5999">
                         <Facebook />
                     </Socialicon>
                     <Socialicon color="E4405F">
                         <Instagram/>
                     </Socialicon>
                     <Socialicon color="55ACEE">
                         <YouTube/>
                     </Socialicon > 
                     <Socialicon color="E60023">
                         <Twitter/>
                     </Socialicon>
                 </SocialContainer>
            </Left>
        <Center>
                 <Title>Useful Links</Title>
                 <List>
                 <ListItem>Home</ListItem>
                 <ListItem>Cart</ListItem>
                 <ListItem>Man Fashion</ListItem>
                 <ListItem>Women Fashion</ListItem>
                 <ListItem>Accessories</ListItem>
                 <ListItem>My Acount</ListItem>
                 <ListItem>Order Tracking</ListItem>
                 <ListItem>Wishlist</ListItem>
                 <ListItem>Terms</ListItem>
                 </List>
            
             </Center>
        
        <Right>
                <Title>Contact</Title>
                 <ContactItem>
                    <Room style={{marginRight:"10px"}}/> Gulshan,Vatara 100feet, Dhaka-1212//                 </ContactItem>
               <ContactItem>
                   <Phone style={{marginRight:"10px"}}/> 01955770873
                 </ContactItem>
                 <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> tanni@gmail.com
                 </ContactItem>
                 <Payment src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" />
             </Right>
        
      </Container>
    );
  };
  
  export default Footer;