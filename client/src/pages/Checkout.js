import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import MyCheckoutForm from 'components/checkout/MyCheckoutForm';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-height: 100vh;
  padding-top: 6rem;
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  max-width: 1245px;
  width: 50%;
  background-color: ${props => props.theme.colorBackgroundElevated};
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const PUBLIC_KEY = 'pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG';

const stripePromise = loadStripe(PUBLIC_KEY);

const Checkout = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Elements stripe={stripePromise}>
          <MyCheckoutForm />
        </Elements>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Checkout;