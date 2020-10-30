import React from 'react';
import styled from 'styled-components';
import Hero from 'components/home/Hero';
import Footer from 'components/general/Footer';
import {StyledHeader} from 'components/general/styling';
import Scroller from 'components/home/Scroller';
import Squares from 'components/home/Squares';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledDescriptionWrapper = styled.div`
  max-width: 1245px;
  margin: 4rem 0;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 2rem;
  @media screen and (max-width: 992px) {
    padding: 0 2rem;
    font-size: 1rem;
  }
`;
const StyledDescriptionContainer = styled.div`
  max-width: 700px;
`;

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const Home = () => {
  return (
    <StyledWrapper>
      <Hero/>
      <StyledDescriptionWrapper>
        <StyledDescriptionContainer>
          <StyledHeader>Twitch Banners that update as you go live</StyledHeader>
          {lipsum}
        </StyledDescriptionContainer>
      </StyledDescriptionWrapper>
      <Squares/>
      <Scroller/>
      <StyledDescriptionWrapper>
        <StyledDescriptionContainer>
          <StyledHeader>Twitch Banners that update as you go live</StyledHeader>
          {lipsum}
        </StyledDescriptionContainer>
      </StyledDescriptionWrapper>
      <Footer/>
    </StyledWrapper>
  )
}

export default Home;