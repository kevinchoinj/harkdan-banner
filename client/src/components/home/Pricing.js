import React from 'react';
import Column from 'components/home/Column';
import {pricingColumnData} from 'data/pricing';
import {StyledWrapper, StyledContainer} from 'components/general/styling';
import styled from 'styled-components';
import {StyledHeader} from 'components/general/styling';

const StyledTable = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;
const StyledPricingWrapper = styled(StyledWrapper)`
  display: flex;
  margin-top: 4rem;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;
const StyledPricingContainer = styled(StyledContainer)`
  padding: 0 2rem;
`;
const Pricing = () => {
  return (
    <StyledPricingWrapper>
      <StyledHeader>
        Advanced <span style={{color: "#0cf"}}>Features</span>
      </StyledHeader>
      <StyledPricingContainer>
        <StyledTable>
          {pricingColumnData.map(value => {
            return (
              <Column
                key={value.title}
                buttonPrimary={value.buttonPrimary}
                buttonLabel={value.buttonLabel}
                details={value.details}
                price={value.price}
                title={value.title}
              />
            )
          })}
        </StyledTable>
      </StyledPricingContainer>
    </StyledPricingWrapper>
  )
}

export default Pricing;