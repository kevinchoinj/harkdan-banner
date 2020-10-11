import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setStreamer, setPlatform} from 'actions/form';
import {StyledWrapper, StyledHeader, StyledContent, StyledRow} from 'components/editor/styling';

const TextEditor = ({platform, streamer, updateStreamer, updatePlatform}) => {
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
        </StyledContent>
      }
    </StyledWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    platform: state.form.platform,
    streamer: state.form.streamer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateStreamer: (value) => dispatch(setStreamer(value)),
    updatePlatform: (platform) => dispatch(setPlatform(platform)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);