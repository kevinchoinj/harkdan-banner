import React from 'react';
import styled from 'styled-components';
import exampleImage from 'data/example.jpg';
import exampleMenu from 'data/menu.png';

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  width: 100%;
  padding: 4rem;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  h1 {
    margin: 0;
    margin-bottom: 6rem;
    font-size: 5rem;
    @media screen and (max-width: 992px) {
      font-size: 3.5rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 992px) {
    padding: 0 2rem;
  }
`;
const StyledImage = styled.div`
  position: relative;
  right: 0;
  top: 0;
  margin-left: 60%;
  height: 100%;
  padding-right: 4rem;
  display: flex;
  align-items: center;
  > img {
    width: 100%;
    border-radius: 10px;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledMenuImage = styled.div`
  position: absolute;
  left: -5vw;
  bottom: 20%;
  height: 15vw;
  img {
    object-fit: contain;
    height: 100%;
  }
`;
const StyledCircle = styled.div`
  height: 200vh;
  width: 200vh;
  border-radius: 50%;
  position: absolute;
  right: -75vh;
  top: -100vh;
  background-color: ${props => props.theme.colorBackgroundElevated};
`;


const Hero = () => {
  return (
    <StyledWrapper>
      <StyledCircle/>
      <StyledImage>
        <img src={exampleImage} alt="example" />
        <StyledMenuImage>
          <img src={exampleMenu} alt="example menu"/>
        </StyledMenuImage>
      </StyledImage>
      <StyledContent>
        <h1>
          Create dynamic<br/> banners with<br/> <span style={{color:"#09f"}}>live data</span>
        </h1>
      </StyledContent>
    </StyledWrapper>
  )
}

export default Hero;