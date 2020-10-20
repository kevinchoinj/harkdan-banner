import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {restoreHistory} from 'actions/history';

const StyledWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  width: 200px;
  font-size: 11px;
`;
const StyledOption = styled.div`
  cursor: pointer;
  border: 1px solid #ddd;
  padding: 3px 6px;
  background-color: ${props => props.active && '#000'};
  &:hover {
    background-color: #000;
  }
`;

const History = ({history, historyIndex, reset}) => {
  return (
    <StyledWrapper>
      <div>
        history beta
      </div>
      {history.map((value, index) => {
        return (
          <StyledOption key={value.timestamp} onClick={() => reset(index)} active={historyIndex === index}>
            {value.label}
          </StyledOption>
        )
      })}
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    history: state.history.history,
    historyIndex: state.history.historyIndex,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    reset: (index) => dispatch(restoreHistory(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
