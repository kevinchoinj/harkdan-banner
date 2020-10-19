import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {restoreHistory} from 'actions/history';

const StyledWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
`;

const History = ({history, reset}) => {
  return (
    <StyledWrapper>
      <div>
        history beta
      </div>
      {history.map((value, index) => {
        return (
          <div key={value.timestamp} onClick={() => reset(index)}>
            {value.label}
          </div>
        )
      })}
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    history: state.history.history,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    reset: (index) => dispatch(restoreHistory(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
