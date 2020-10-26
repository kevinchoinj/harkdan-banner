import styled from 'styled-components';
import {Form} from 'formik';

export const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
export const StyledLeft = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colorBackgroundElevated};
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
export const StyledRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const StyledForm = styled(Form)`
  position: relative;
  z-index: 1;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: left;
  background-color: ${props => props.theme.colorBackgroundElevated};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 12px;
  label {
    font-size: 14px;
  }
  input {
    outline: 0;
    background-color: #393939;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #ddd;
  }
  button {
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    margin-top: 1rem;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background: #43A047;
    }
  }
`;
