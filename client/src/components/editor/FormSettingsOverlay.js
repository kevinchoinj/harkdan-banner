import React from 'react';
import {connect} from 'react-redux';
import {showHistory, toggleBorders, toggleExamples, toggleGrid} from 'actions/formSettings';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
  left: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
`;
const StyledContent = styled.div`
  display: flex;
  pointer-events: auto;
  background-color: #464646;
  border-radius: 6px;
  svg {
    height: 24px;
    width: 24px;
  }
`;
const StyledRow = styled.div`
  position: relative;
  padding: 12px;
  fill: #ddd;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: ${props => props.active && '#111'};
  label {
    display: none;
    position: absolute;
    bottom: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    white-space: nowrap;
    background-color: #111;
    padding: 6px 12px;
  }
  &:hover {
    background-color: #222;
    background-color: ${props => props.active && '#343434'};
    label {
      display: block;
    }
  }
`;
const FormSettingsOverlay = ({
  showBorders,
  showExamples,
  showGrid,
  historyVisible,
  toggleBorders,
  toggleExamples,
  toggleGrid,
  toggleHistory,
}) => {
  return (
    <StyledWrapper>
      <StyledContent>
          <StyledRow
            active={showBorders}
            onClick={() => toggleBorders(!showBorders)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-2v-7h-7v-2h9v9zm-9 15v-2h7v-7h2v9h-9zm-15-9h2v7h7v2h-9v-9zm9-15v2h-7v7h-2v-9h9z"/></svg>

            <label>Show Borders</label>
          </StyledRow>
          <StyledRow
            active={showGrid}
            onClick={() => toggleGrid(!showGrid)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/></svg>

            <label>Show Grid</label>
          </StyledRow>
          <StyledRow
            active={showExamples}
            onClick={() => toggleExamples(!showExamples)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z"/></svg>

            <label>Show Examples</label>
          </StyledRow>
          <StyledRow
            active={historyVisible}
            onClick={() => toggleHistory(!historyVisible)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12h2c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.777 0-5.287 1.141-7.099 2.977l2.061 2.061-6.962 1.354 1.305-7.013 2.179 2.18c2.172-2.196 5.182-3.559 8.516-3.559 6.627 0 12 5.373 12 12zm-13-6v8h7v-2h-5v-6h-2z"/></svg>

            <label>Show History</label>
          </StyledRow>
        </StyledContent>
    </StyledWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    historyVisible: state.formSettings.historyVisible,
    showBorders: state.formSettings.showBorders,
    showGrid: state.formSettings.showGrid,
    showExamples: state.formSettings.showExamples
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleBorders: (bool) => dispatch(toggleBorders(bool)),
    toggleExamples: (bool) => dispatch(toggleExamples(bool)),
    toggleGrid: (bool) => dispatch(toggleGrid(bool)),
    toggleHistory: (bool) => dispatch(showHistory(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSettingsOverlay);
