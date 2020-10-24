import React, {useState} from 'react';
import {connect} from 'react-redux';
import Toggle from 'react-toggle';
import {showHistory, toggleBorders, toggleExamples, toggleGrid} from 'actions/formSettings';
import {StyledWrapper, StyledHeader, StyledContent, StyledRow} from 'components/editor/styling';

const FormSettings = ({
  showBorders,
  showExamples,
  showGrid,
  historyVisible,
  toggleBorders,
  toggleExamples,
  toggleGrid,
  toggleHistory,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledWrapper>
      <StyledHeader onClick={() => setExpanded(prev => !prev)}>
        Form Settings
          {expanded ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
          }
      </StyledHeader>
      {expanded &&
        <StyledContent>
          <StyledRow>
            <label>Show Borders</label>
            <Toggle
              checked={showBorders}
              onChange={(e) => toggleBorders(e.target.checked)}
            />
          </StyledRow>
          <StyledRow>
            <label>Show Grid</label>
            <Toggle
              checked={showGrid}
              onChange={(e) => toggleGrid(e.target.checked)}
            />
          </StyledRow>
          <StyledRow>
            <label>Show Examples</label>
            <Toggle
              checked={showExamples}
              onChange={(e) => toggleExamples(e.target.checked)}
            />
          </StyledRow>
          <StyledRow>
            <label>Show History</label>
            <Toggle
              checked={historyVisible}
              onChange={(e) => toggleHistory(e.target.checked)}
            />
          </StyledRow>
        </StyledContent>
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(FormSettings);
