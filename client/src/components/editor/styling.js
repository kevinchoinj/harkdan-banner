import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-top: 6px;
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 12px;
  overflow: visible;
`;
export const StyledHeader = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${props => props.active ? '#090909' : props.theme.colorBackground};
  fill: #ddd;
  font-weight: 500;
  transition: .2s ease;
  background-color: ${props => props.draggableHovered && '#090909'};
  &:hover {
    background-color: #090909;
  }
  svg {
    height: 16px;
  }
`;
export const StyledContent = styled.div`
  border-radius: 6px;
  background-color: ${props => props.theme.colorBackground};
  select {
    padding: 6px;
    cursor: pointer;
    border-radius: 6px;
  }
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
    padding: 6px;
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