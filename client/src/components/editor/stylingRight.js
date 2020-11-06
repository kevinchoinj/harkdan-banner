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
  background-color: ${props => props.active ? props.theme.colorPrimary : props.theme.colorBackgroundElevated};
  fill: #ddd;
  font-weight: 500;
  background-color: ${props => props.draggableHovered && props.theme.colorPrimaryHover};
  &:hover {
    background-color: ${props => props.theme.colorPrimary};
  }
  svg {
    height: 16px;
  }
`;
export const StyledContent = styled.div`
  border-radius: 6px;
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
  padding: 5px 10px;
  border-bottom: 1px solid ${props => props.theme.colorBackgroundElevated};
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    color: #ddd;
    font-size: 13px;
    padding: 6px;
  }
  strong {
    padding-bottom: 5px;
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
  fill: ${props => props.visible ? '#fff' : '#bbb'};
`;