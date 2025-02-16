import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledContainer = styled.div`
  flex: 1;
  margin-top: calc(${props => props.theme.heightNavbar} + 2rem);
  max-width: ${props => props.theme.widthContent};
  position: relative;
  margin-bottom: 8rem;

`;
const StyledContent = styled.section`
  padding: 1rem 2rem 2rem 2rem;
  background-color: ${props => props.theme.colorBackgroundElevated};
  border-radius: 1rem;
  h1 {
    text-align: center;
    font-weight: 500;
  }
`;
const StyledItem = styled.div`
  line-height: 1.4;
  margin-bottom: 2rem;
  > div {
    font-weight: 500;
  }
`;

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Faq = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledContent>
          <h1>FAQ</h1>
          <StyledItem>
            <div>Some question here?</div>
            {lipsum}
          </StyledItem>
          <StyledItem>
            <div>Some question here?</div>
            {lipsum}
          </StyledItem>
          <StyledItem>
            <div>Some question here?</div>
            {lipsum}
          </StyledItem>
          <StyledItem>
            <div>Some question here?</div>
            {lipsum}
          </StyledItem>
          <StyledItem>
            <div>Some question here?</div>
            {lipsum}
          </StyledItem>
          <StyledItem>
            <div>Some question here?</div>
            {lipsum}
          </StyledItem>
        </StyledContent>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Faq;