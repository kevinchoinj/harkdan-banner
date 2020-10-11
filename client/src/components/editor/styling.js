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
  background-color: #202225;
  fill: #ddd;
  font-weight: 500;
  transition: .2s ease;
  background-color: ${props => props.draggableHovered && '#111'};
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
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    color: #ddd;
    font-size: 14px;
  }
`;
