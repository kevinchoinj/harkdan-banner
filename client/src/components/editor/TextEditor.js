import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setBorderRadius, setStreamer, setPlatform} from 'actions/form';
import {StyledWrapper, StyledHeader, StyledContent, StyledRow} from 'components/editor/styling';
import ImageChooser from 'components/editor/ImageChooser';

const TextEditor = ({
  borderRadius,
  platform,
  streamer,
  updateBorderRadius,
  updatePlatform,
  updateStreamer,
}) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <StyledWrapper>
      <StyledHeader onClick={() => setExpanded(prev => !prev)}>
        Account
          {expanded ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
          }
      </StyledHeader>
      {expanded &&
        <StyledContent>
          <StyledRow>
            <label>Username</label>
            <input onChange={(e) => updateStreamer(e.target.value)} value={streamer}/>
          </StyledRow>
          <StyledRow>
            <label>Platform</label>
            <select value={platform} onChange={(e) => updatePlatform( e.target.value)}>
              <option value=""></option>
              <option value="twitch">Twitch</option>
              <option value="youtube">Youtube</option>
            </select>
          </StyledRow>
          <StyledRow>
            <label>Background</label>
            <ImageChooser/>
          </StyledRow>
          <StyledRow>
            <label>Border Radius</label>
            <select value={borderRadius} onChange={(e) => updateBorderRadius(e.target.value)}>
              <option value="0px">0px</option>
              <option value="4px">4px</option>
              <option value="8px">8px</option>
              <option value="12px">12px</option>
              <option value="16px">16px</option>
              <option value="20px">20px</option>
              <option value="24px">24px</option>
            </select>
          </StyledRow>
        </StyledContent>
      }
    </StyledWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    borderRadius: state.form.borderRadius,
    platform: state.form.platform,
    streamer: state.form.streamer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateBorderRadius: (value) => dispatch(setBorderRadius(value)),
    updateStreamer: (value) => dispatch(setStreamer(value)),
    updatePlatform: (platform) => dispatch(setPlatform(platform)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);