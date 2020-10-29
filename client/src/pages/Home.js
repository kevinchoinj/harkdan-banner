import React from 'react';
import styled from 'styled-components';
import Hero from 'components/home/Hero';
import Footer from 'components/general/Footer';
import Pricing from 'components/home/Pricing';
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
  @media screen and (max-width: 992px) {
    padding: 0 2rem;
  }
`;

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Home = () => {
  return (
    <StyledWrapper>
      <Hero/>
      <Scroller/>
      <Pricing/>
      <StyledDescription>
        <StyledHeader>Twitch Banners</StyledHeader>
        {lipsum}
        <br/><br/>
        {lipsum}
        <br/><br/>
        {lipsum}
      </StyledDescription>
      <Footer/>
    </StyledWrapper>
  )
}

export default Home;