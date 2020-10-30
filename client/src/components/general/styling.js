import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #ffffff;
  background-color: ${props => props.inactive ? '#333' : props.theme.colorButton};
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  height: 36px;
  border: none;
  border-radius: 3px;
  margin: 3px 0 3px 0;
  cursor: pointer;
  padding: 0 1rem;
`;

export const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 4rem 0 4rem 0;
  width: 100%;
  max-width: 1245px;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const StyledWrapperBg = styled(StyledWrapper)`
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 140%;
    top: -20%;
    -webkit-transform: skewY(-12deg);
    transform: skewY(-12deg);
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(1090px + 8rem);
  position: relative;
  padding: 0 4rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 0;
  }
`;
export const StyledHalf = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  img {
    object-fit: contain;
  }
  &:first-child {
    padding-left: 4rem;
  }
  &:last-child {
    padding-right: 4rem;
  }
  @media screen and (max-width: 768px) {
    &:first-child {
      padding-left: 2rem;
    }
    &:last-child {
      padding-right: 2rem;
    }
  }
`;

export const StyledHeader = styled.h2`
  font-size: 4rem;
  text-align: left;
  max-width: 80%;
  @media screen and (max-width: 992px) {
    font-size: 2rem;
    max-width: 100%;
  }
`;