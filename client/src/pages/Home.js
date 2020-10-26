import React from 'react';
import styled from 'styled-components';
import Hero from 'components/home/Hero';
import Footer from 'components/general/Footer';
import Pricing from 'components/home/Pricing';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledDescription = styled.div`
  margin-bottom: 8rem;
  max-width: 800px;
  margin-top: 8rem;
  padding: 1rem 2rem 2rem 2rem;
  h1 {
    text-align: center;
    font-weight: 500;
  }
`;

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Home = () => {
  return (
    <StyledWrapper>
      <Hero/>
      <StyledDescription>
        <h1>Twitch Banners</h1>
        {lipsum}
        <br/><br/>
        {lipsum}
        <br/><br/>
        {lipsum}
      </StyledDescription>
      <Pricing/>
      <Footer/>
    </StyledWrapper>
  )
}

export default Home;