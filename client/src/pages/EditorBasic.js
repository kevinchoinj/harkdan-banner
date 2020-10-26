import React, {useMemo} from 'react';
import styled from 'styled-components';
import DraggableRnd from 'components/editor/DraggableRnd';
import {connect} from 'react-redux';
import TextEditor from 'components/editor/TextEditor';
import SectionEditor from 'components/editor/SectionEditor';
import xqc from 'data/xqc.jpeg';
import LoadFont from 'components/editor/LoadFont';
import History from 'components/editor/History';
import {templatesList} from 'data/templatesList';
import {find, propEq} from 'ramda';
import ImageChooserWindow from 'components/editor/ImageChooserWindow';
import FormSettingsOverlay from 'components/editor/FormSettingsOverlay';

const StyledCanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: #262626;
  overflow: hidden;
  position: relative;
`;
const StyledCanvas = styled.div`
  position: relative;
  width: 480px;
  height: 270px;
  background-size: cover;
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
  padding-top: ${props => props.theme.heightNavbar};
  background-color: #3b3b3b;
`;
const StyledMenu = styled.div`
  flex: 0 0 325px;
  height: 100%;
  border-right: 2px solid #111;
  background-color: #464646;
  user-select: none;
  overflow-y: auto;
  font-size: 14px;
  padding-bottom: 20rem;
`;
const StyledGrid = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 1fr);
  pointer-events: none;
  z-index: 0;
  >div {
    border-top: 1px solid #222;
    border-left: 1px solid #222;
  }
`;
const StyledBackdrop = styled.div`
  height: 100%;
  width: 100%;
`;

const keyValues = [
  {keyValue: 'valueViewers', label: 'Current View Count'},
  {keyValue: 'valueAvatar', label: 'Profile Picture'},
  {keyValue: 'valueSnapshot', label: 'Current Screencap'},
  {keyValue: 'valueCategory', label: 'Category'},
  {keyValue: 'valueUsername', label: 'Username'},
  {keyValue: 'valueTimeOnline', label: 'Time Live'},
  {keyValue: 'valueStreamTitle', label: 'Stream Title'},
  {keyValue: 'valueBackgroundShape', label: 'Backdrop Shape'},
];

const EditorBasic = ({
  formData,
  hoveredItem,
  showBorders,
  showExamples,
  showGrid,
}) => {
  const backgroundImage = useMemo(() => {
    const imageObject = find(propEq('keyValue', formData.background))(templatesList);
    return imageObject.image;
  }, [formData]);
  return (
    <StyledWrapper>
      <LoadFont/>
      <StyledMenu>
        <TextEditor/>
        {keyValues.map((value) => {
          return (
            <SectionEditor
              value={value}
              key={value.keyValue}
            />
          )
        })}
      </StyledMenu>
      <StyledCanvasWrapper>
        <StyledCanvas
          showBorders={showBorders}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            borderRadius: formData.borderRadius,
          }}
        >

          {showGrid &&
            <StyledGrid>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
              <div/><div/><div/><div/><div/>
            </StyledGrid>
          }

          <DraggableRnd
            label="Backdrop Shape"
            keyValue="valueBackgroundShape"
            data={formData.valueBackgroundShape}
            hovered={hoveredItem==="valueBackgroundShape"}
          >
            <StyledBackdrop
              style={{
                backgroundColor: formData.valueBackgroundShape?.color,
                opacity: formData.valueBackgroundShape?.opacity,
              }}
            />
          </DraggableRnd>

          <DraggableRnd
            label="Current View Count"
            keyValue="valueViewers"
            data={formData.valueViewers}
            hovered={hoveredItem==="valueViewers"}
          >
            {showExamples ?
              '3.7k viewers'
              :
              'Viewer Count'
            }
          </DraggableRnd>

          <DraggableRnd
            label="Profile Picture"
            keyValue="valueAvatar"
            data={formData.valueAvatar}
            hovered={hoveredItem==="valueAvatar"}
          >
            {showExamples ?
              <img src={xqc} alt="avatar"/>
              :
              'Avatar'
            }
          </DraggableRnd>

          <DraggableRnd
            label="Current Screencap"
            keyValue="valueSnapshot"
            data={formData.valueSnapshot}
            hovered={hoveredItem==="valueSnapshot"}
          >
            {showExamples ?
              <img
                src="https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/65b9b6ad277fb42af75e_novaruu_39778524174_1600559337//thumb/thumb0-640x360.jpg"
                alt="screencap"
              />
              :
              'screenshot'
            }
          </DraggableRnd>

          <DraggableRnd
            label="Category"
            keyValue="valueCategory"
            data={formData.valueCategory}
            hovered={hoveredItem==="valueCategory"}
          >
            {showExamples ?
              'Category: Just Chatting'
              :
              'Category'
            }
          </DraggableRnd>

          <DraggableRnd
            label="Username"
            keyValue="valueUsername"
            data={formData.valueUsername}
            hovered={hoveredItem==="valueUsername"}
          >
            {formData.streamer ? <div>{formData.streamer}</div> : 'Username'}
          </DraggableRnd>

          <DraggableRnd
            label="Time Live"
            keyValue="valueTimeOnline"
            data={formData.valueTimeOnline}
            hovered={hoveredItem==="valueTimeOnline"}
          >
            {showExamples ?
              'Online: 4h 20m'
              :
              'Time Online'
            }
          </DraggableRnd>

          <DraggableRnd
            label="Stream Title"
            keyValue="valueStreamTitle"
            data={formData.valueStreamTitle}
            hovered={hoveredItem==="valueStreamTitle"}
          >
            {showExamples ?
              'Trying to get 10 wins in this game'
              :
              'Stream Title'
            }
          </DraggableRnd>
        </StyledCanvas>
      <FormSettingsOverlay/>
      </StyledCanvasWrapper>
      <History/>
      <ImageChooserWindow/>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    hoveredItem: state.mouse.hoveredItem,
    formData: state.form,
    showBorders: state.formSettings.showBorders,
    showExamples: state.formSettings.showExamples,
    showGrid: state.formSettings.showGrid,
  };
};

export default connect(mapStateToProps, null)(EditorBasic);