import styled from 'styled-components';

export const StyledWrapper = styled.div`
`;
export const StyledHeader = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  background-color: #121212;
  fill: #ddd;
  text-transform: uppercase;
  font-weight: 500;
  svg {
    height: 16px;
  }
`;
export const StyledContent = styled.div`
`;
export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  &:nth-child(odd) {
    background-color: #222;
  }
  &:nth-child(even) {
    background-color: #333;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    color: #ddd;
    font-size: 14px;
  }
`;
