import React from 'react';
import styled from 'styled-components';
import Hero from 'components/home/Hero';
import Footer from 'components/general/Footer';
import {StyledHeader} from 'components/general/styling';
import Scroller from 'components/home/Scroller';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledDescription = styled.div`
  max-width: 800px;
  margin: 2rem 0;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  @media screen and (max-width: 992px) {
    padding: 0 2rem;
    font-size: 1rem;
  }
`;

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const Home = () => {
  return (
    <StyledWrapper>
      <Hero/>
      <StyledDescription>
        <StyledHeader>Twitch Banners that update as you go live</StyledHeader>
        {lipsum}
      </StyledDescription>
      <Scroller/>
      <StyledDescription>
        <StyledHeader>Twitch Banners that update as you go live</StyledHeader>
        {lipsum}
      </StyledDescription>
      <Footer/>
    </StyledWrapper>
  )
}

export default Home;