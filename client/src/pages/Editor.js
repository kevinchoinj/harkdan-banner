import React from 'react';
import styled from 'styled-components';
import DraggableRnd from 'components/editor/DraggableRnd';
import AdvancedEditor from 'components/editor/AdvancedEditor';
import {connect} from 'react-redux';
import FormSettings from 'components/editor/FormSettings';

const StyledCanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  flex: 1;

`;
const StyledCanvas = styled.div`
  position: relative;
  border: 1px solid #ddd;
  width: 500px;
  height: 300px;
  background-color: #111;
  overflow: hidden;
  > div {
    border: ${props => props.showBorders ? '1px solid rgba(255, 255, 255, .2)' : '1px solid transparent'};
  }
`;
const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 80px;
  background-color: #3b3b3b;
`;
const StyledViewerCount = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  height: 100%;
  svg {
    height: 24px;
  }
`;

const StyledMenu = styled.div`
  flex: 0 0 300px;
  height: 100%;
  border-right: 2px solid #666;
  user-select: none;
  overflow-y: auto;
  font-size: 14px;
`;

const keyValues = [
  {keyValue: 'valueViewers', label: 'Current View Count'},
  {keyValue: 'valueAvatar', label: 'Profile Picture'},
  {keyValue: 'valueSnapshot', label: 'Current Screencap'},
  {keyValue: 'valueCategory', label: 'Category'},
  {keyValue: 'valueUsername', label: 'Username'},
  {keyValue: 'valueGame', label: 'Current Game'},
  {keyValue: 'valueTimeOnline', label: 'Time Live'},
  {keyValue: 'valueStreamTitle', label: 'Stream Title'},
];

const Editor = ({formData, showBorders}) => {
  return (
    <StyledWrapper>
      <StyledMenu>
        <FormSettings/>
        <AdvancedEditor keyValues={keyValues}/>
      </StyledMenu>
      <StyledCanvasWrapper>
        <StyledCanvas showBorders={showBorders}>
          <DraggableRnd keyValue="valueViewers" data={formData.valueViewers}>
            <StyledViewerCount>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user"
              width="44" height="44"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ddd"
              fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg> 3.7k viewers
            </StyledViewerCount>
          </DraggableRnd>
          <DraggableRnd keyValue="valueAvatar" data={formData.valueAvatar}>
            Avatar
          </DraggableRnd>
          <DraggableRnd keyValue="valueSnapshot" data={formData.valueSnapshot}>
            screenshot
          </DraggableRnd>
          <DraggableRnd keyValue="valueCategory" data={formData.valueCategory}>
            Category
          </DraggableRnd>
          <DraggableRnd keyValue="valueUsername" data={formData.valueUsername}>
            Username
          </DraggableRnd>
          <DraggableRnd keyValue="valueGame" data={formData.valueGame}>
            Current Game
          </DraggableRnd>
          <DraggableRnd keyValue="valueTimeOnline" data={formData.valueTimeOnline}>
            Time Online
          </DraggableRnd>
          <DraggableRnd keyValue="valueStreamTitle" data={formData.valueStreamTitle}>
            Stream Title
          </DraggableRnd>
        </StyledCanvas>
      </StyledCanvasWrapper>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
    showBorders: state.formSettings.showBorders,
  };
};

export default connect(mapStateToProps, null)(Editor);
