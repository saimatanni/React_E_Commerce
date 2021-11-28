// import { ArrowRightOutlined, ArrowLeftOutlined, Translate } from "@material-ui/icons";
// import { fontSize } from "@mui/system";
// import React from "react";
// import { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div({
//   width: "100%",
//   height: "100vh",
//   display: "flex",
//   // backgroundColor: "coral",
//   position: "relative",
//   overflow:"hidden"
// });

// // const Arrow = styled.div({
// //   width: "50px",
// //   height: "50px",
// //   display: "flex",
// //   borderRadius: "50%",
// //   backgroundColor: "#FFF7F7",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   position: "absolute",
// //   top: "0",
// //   bottom: "0",
// //   margin: "auto",
// //   cursor: "pointer",
// //   opacity: "0.5",
// //   right: `${(props) => props.direction === "right " && "10px"}`,
// //   left: `${(props) => props.direction === "left" && "10px"}`,
// //   zIndex:"2"
// // });
// const Arrow = styled.div`
//  width: 50px;
//  height: 50px;
//  border-radius: 50%;
//  display:flex;
//  background-color:#fff7f7;
//  justify-content:center;
//  align-items:center;
//  position: absolute;
// cursor:pointer;
// opacity:0.5;
// top:0;
// bottom:0;
// margin:auto
// right: ${props => props.direction === "right " && "10px"};
// left: ${props => props.direction === "left" && "10px"};
// `;

// const Wrapper =styled.div({
//   height:'100%',
//   display:"flex",
//   transform:"translateX(-100px)"
// })

// const Slide=styled.div({
//   width:'100vw',
// height:'100vh',
// display:'flex',
// alignItems:'center'
// })


// const ImageContainer=styled.div
// ({height:'100%',
// flex:'1'
// })
// const Image =styled.img({
// height:'80%'})

// const InfoContainer=styled.div({
//   flex:"1",
//   padding:"50px"
// })

// const Title=styled.h1({
//   fontSize:"70px"

// })
// const DESC=styled.p({
//   margin:' 50px 0px',
//   fontSize:"20px",
//   fontWeight:"500",
//   letterSpacing:"3px"
// })



// const Button=styled.button({
//   padding:"10px",
//   fontSize:"20px",
//   backgroundColor:"transparent",
//   cursor:"pointer"

// })




// const Slider = () => {
//   const [slideIndex, setSlideIndes]= useState(0)
//   const handleClick=(direction)=>{

//   }
//   return (
//     <Container>
//       <Arrow direction="left" onClick={()=>handleClick("left")}>
//         <ArrowLeftOutlined />
//       </Arrow>
//       <Wrapper>
//         <Slide bg="fcf1ed">
//         <ImageContainer>
//            <Image src="https://previews.123rf.com/images/f8studio/f8studio1704/f8studio170402070/77152799-full-length-side-view-of-young-woman-walking-with-shopping-bag-isolated-over-white.jpg"/>
//          </ImageContainer>
//          <InfoContainer>
//            <Title>SUMMER SALE</Title>
//            <DESC>DON'T COMPROMISE ON STYLE! GET FLAT 50 OFF FOR NEW ARRIVALS</DESC>
//            <Button>SHOW NOW</Button>
//          </InfoContainer>
//         </Slide>

//         <Slide bg="fbf0f4">
//         <ImageContainer>
//            <Image src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"/>
//          </ImageContainer>
//          <InfoContainer>
//            <Title>POPULAR SELE</Title>
//            <DESC>DON'T COMPROMISE ON STYLE! GET FLAT 50 OFF FOR NEW ARRIVALS</DESC>
//            <Button>SHOW NOW</Button>
//          </InfoContainer>
//         </Slide>
         
//       </Wrapper>
//       <Arrow direction="right" theme="pink" onClick={()=>handleClick("right")}>
//         <ArrowRightOutlined />
//       </Arrow>
//     </Container>
//   );
// };

// export default Slider;

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
