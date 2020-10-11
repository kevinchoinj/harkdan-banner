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
  &:hover {
    background-color: #111;
  }
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
export const StyledHiddenWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledHidden = styled.span`
  font-weight: 400;
  font-size: 12px;
  display: flex;
  fill: ${props => props.visible ? '#fff' : '#666'};
`;