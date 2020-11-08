import React from 'react';
import {connect} from 'react-redux';
import {setDarkBackground, showHistory, toggleExamples, toggleGrid} from 'actions/formSettings';
import styled from 'styled-components';
import SaveButton from 'components/editor/SaveButton';
import Toggle from 'react-toggle';
import ButtonAdvanced from 'components/editor/ButtonAdvanced';

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
  background-color: #333;
  border-radius: 6px;
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
  margin: 2px;
  border-radius: 8px;
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
    background-color: ${props => props.active && '#111'};
    label {
      display: block;
    }
  }
  > svg {
    height: 24px;
    width: 24px;
  }
`;
const StyledToggleRow = styled(StyledRow)`
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;
const StyledToggle = styled.div`
  margin-right: 1rem;
`;

const FormSettingsOverlay = ({
  darkBackground,
  historyVisible,
  isBasic,
  offlineMode,
  setOfflineMode,
  showExamples,
  showGrid,
  toggleDarkBackground,
  toggleExamples,
  toggleGrid,
  toggleHistory,
}) => {
  return (
    <StyledWrapper>
      <StyledContent>
        {isBasic && <ButtonAdvanced/>}
        <StyledToggleRow>
          <StyledToggle>
            Offline Mode
          </StyledToggle>
          <Toggle
            checked={offlineMode}
            onChange={() => setOfflineMode(prev => !prev)}
          />
        </StyledToggleRow>
        <StyledRow
          active={darkBackground}
          onClick={() => toggleDarkBackground(!darkBackground)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"/></svg>

          <label>Dark Mode</label>
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
        <SaveButton/>
      </StyledContent>
    </StyledWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    historyVisible: state.formSettings.historyVisible,
    showGrid: state.formSettings.showGrid,
    showExamples: state.formSettings.showExamples,
    darkBackground: state.formSettings.darkBackground
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleExamples: (bool) => dispatch(toggleExamples(bool)),
    toggleGrid: (bool) => dispatch(toggleGrid(bool)),
    toggleHistory: (bool) => dispatch(showHistory(bool)),
    toggleDarkBackground: (bool) => dispatch(setDarkBackground(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSettingsOverlay);
