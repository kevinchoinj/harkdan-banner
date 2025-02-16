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
  padding: 2rem;
  text-align: left;
  background-color: ${props => props.theme.colorBackgroundElevated};
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
    border-radius: 12px;
  }
  button {
    outline: 0;
    background: ${props => props.theme.colorConfirm};
    width: 100%;
    border-radius: 8px;
    border: 0;
    font-weight: 700;
    margin-top: 1rem;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    &:hover {
      background: #43A047;
    }
  }
`;
export const StyledCircle = styled.div`
  height: 200vh;
  width: 200vh;
  border-radius: 50%;
  position: absolute;
  left: -100vh;
  top: -100vh;
  background-color: ${props => props.theme.colorBackgroundElevated};
`;

