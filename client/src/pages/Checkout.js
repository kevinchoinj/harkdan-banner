import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import MyCheckoutForm from 'components/checkout/MyCheckoutForm';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-height: 100vh;
  padding-top: 6rem;
`;
const PUBLIC_KEY = 'pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG';

const stripePromise = loadStripe(PUBLIC_KEY);

const Checkout = () => {
  return (
    <StyledWrapper>
      <Elements stripe={stripePromise}>
        <MyCheckoutForm />
      </Elements>
    </StyledWrapper>
  )
}

export default Checkout;