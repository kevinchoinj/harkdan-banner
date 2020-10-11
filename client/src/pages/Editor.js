import React from 'react';
import styled from 'styled-components';
import DraggableRnd from 'components/editor/DraggableRnd';
import AdvancedEditor from 'components/editor/AdvancedEditor';
import {connect} from 'react-redux';
import FormSettings from 'components/editor/FormSettings';
import TextEditor from 'components/editor/TextEditor';
import FontSizeEditor from 'components/editor/FontSizeEditor';
import SectionEditor from 'components/editor/SectionEditor';
import xqc from 'data/xqc.jpeg';

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
  > div {
    border: ${props => props.showBorders ? '1px solid rgba(255, 255, 255, .2)' : '1px solid transparent'};
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    pointer-events: none;
  }
`;
const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 80px;
  background-color: #3b3b3b;
`;
const StyledDraggableContent = styled.div`
  display: flex;
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

const Editor = ({formData, hoveredItem, showBorders}) => {
  return (
    <StyledWrapper>
      <StyledMenu>
        <TextEditor/>
        <FormSettings/>
        {keyValues.map((value) => {
          return (
            <SectionEditor value={value} key={value.keyValue}/>
          )
        })}
      </StyledMenu>
      <StyledCanvasWrapper>
        <StyledCanvas showBorders={showBorders}>

          <DraggableRnd
            keyValue="valueViewers"
            data={formData.valueViewers}
            fontSize={formData.valueViewers?.fontSize}
            hovered={hoveredItem==="valueViewers"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user"
            width="44" height="44"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ddd"
            fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg> 3.7k viewers
          </DraggableRnd>

          <DraggableRnd
            keyValue="valueAvatar"
            data={formData.valueAvatar}
            hovered={hoveredItem==="valueAvatar"}
          >
            <img src={xqc} alt="avatar"/>
          </DraggableRnd>

          <DraggableRnd
            keyValue="valueSnapshot"
            data={formData.valueSnapshot}
            hovered={hoveredItem==="valueSnapshot"}
          >
            screenshot
          </DraggableRnd>

          <DraggableRnd
            keyValue="valueCategory"
            data={formData.valueCategory}
            fontSize={formData.valueCategory?.fontSize}
            hovered={hoveredItem==="valueCategory"}
          >
            Category
          </DraggableRnd>

          <DraggableRnd
            keyValue="valueUsername"
            data={formData.valueUsername}
            fontSize={formData.valueUsername?.fontSize}
            hovered={hoveredItem==="valueUsername"}
          >
            {formData.streamer ? <div>{formData.streamer}</div> : 'Username'}
          </DraggableRnd>

          <DraggableRnd
            keyValue="valueGame"
            data={formData.valueGame}
            fontSize={formData.valueGame?.fontSize}
            hovered={hoveredItem==="valueGame"}
          >
            Current Game
          </DraggableRnd>

          <DraggableRnd
            keyValue="valueTimeOnline"
            data={formData.valueTimeOnline}
            fontSize={formData.valueStreamTitle?.fontSize}
            hovered={hoveredItem==="valueTimeOnline"}
          >
            Time Online
          </DraggableRnd>

          <DraggableRnd
            keyValue="valueStreamTitle"
            data={formData.valueStreamTitle}
            fontSize={formData.valueStreamTitle?.fontSize}
            hovered={hoveredItem==="valueStreamTitle"}
          >
              Stream Title
          </DraggableRnd>

        </StyledCanvas>
      </StyledCanvasWrapper>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    hoveredItem: state.mouse.hoveredItem,
    formData: state.form,
    showBorders: state.formSettings.showBorders,
  };
};

export default connect(mapStateToProps, null)(Editor);
