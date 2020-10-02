import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #ffffff;
  background-color: ${props => props.inactive ? '#333' : props.theme.colorButton};
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  height: 36px;
  border: none;
  border-radius: 3px;
  margin: 3px 0 3px 0;
  cursor: pointer;
  padding: 0 1rem;
`;