import React from 'react';
import styled from 'styled-components';
import BannerForm from 'components/home/BannerForm';
import logo from 'data/edc.webp';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledContainer = styled.div`
  flex: 1;
  max-width: ${props => props.theme.widthContent};
  position: relative;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
  img {
    height: 30px;
    object-fit: contain;
  }
`;
const StyledSeparater = styled.div`
  background-color: ${props => props.theme.colorBackgroundElevated};
  width: 6.666666666666667%;
  height: 5px;
  margin: 40px auto;
`;
const StyledDescription = styled.div`
  margin-bottom: 8rem;
  background-color: ${props => props.theme.colorBackgroundElevated};
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 12px;
  h1 {
    text-align: center;
    font-weight: 500;
  }
`;

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Home = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledHeader>
          <img src={logo} alt="microdan"/>
        </StyledHeader>
        <BannerForm/>
        <StyledSeparater/>
        <StyledDescription>
          <h1>Twitch Banners</h1>
          {lipsum}
          <br/><br/>
          {lipsum}
          <br/><br/>
          {lipsum}
        </StyledDescription>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Home;