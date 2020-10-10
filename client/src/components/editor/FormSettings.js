import React, {useState} from 'react';
import {connect} from 'react-redux';
import Toggle from 'react-toggle';
import {showBorders} from 'actions/formSettings';
import {StyledWrapper, StyledHeader, StyledContent, StyledRow} from 'components/editor/styling';

const FormSettings = ({showBorders, toggleBorders}) => {
  const [expanded, setExpanded] = useState(true);
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
            <label>show borders</label>
            <Toggle
              defaultChecked={showBorders}
              onChange={(e) => toggleBorders(e.target.checked)}
            />
          </StyledRow>
        </StyledContent>
      }
    </StyledWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    showBorders: state.formSettings.showBorders,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleBorders: (bool) => dispatch(showBorders(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSettings);
