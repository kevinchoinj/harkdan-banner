import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import DraggableRnd from 'components/editor/DraggableRnd';
import {connect} from 'react-redux';
import TextEditor from 'components/editor/TextEditor';
import Selector from 'components/editor/Selector';
import xqc from 'data/xqc.jpeg';
import LoadFont from 'components/editor/LoadFont';
import History from 'components/editor/History';
import {templatesList} from 'data/templatesList';
import {find, propEq} from 'ramda';
import ImageChooserWindow from 'components/editor/ImageChooserWindow';
import FormSettingsOverlay from 'components/editor/FormSettingsOverlay';
import screencap from 'data/preview.jpg';
import RightSide from 'components/editor/RightSide';

const StyledCanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.colorBackground};
  overflow: hidden;
  position: relative;
`;
const StyledCanvas = styled.div`
  position: relative;
  width: 480px;
  height: 270px;
  background-size: cover;
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
  border-right: 1px solid ${props => props.theme.colorBackgroundElevated};
  background-color: ${props => props.theme.colorBackground};
  user-select: none;
  overflow-y: auto;
  font-size: 14px;
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
  {keyValue: 'valueUsername', label: 'Username'},
  {keyValue: 'valueAvatar', label: 'Profile Picture'},
  {keyValue: 'valueStreamTitle', label: 'Stream Title'},
  {keyValue: 'valueCategory', label: 'Category'},
  {keyValue: 'valueTimeOnline', label: 'Time Live'},
  {keyValue: 'valueViewers', label: 'Current View Count'},
  {keyValue: 'valueSnapshot', label: 'Current Screencap'},
  {keyValue: 'valueBackgroundShape', label: 'Backdrop Shape'},
  {keyValue: 'valueOfflineMessage', label: 'Offline - Message'},
  {keyValue: 'valueOfflineLastOnline', label: 'Offline - Last Online'},
  {keyValue: 'valueOfflineBackgroundShape', label: 'Offline - Backdrop Shape'},
];

const Editor = ({
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
  const [offlineMode, setOfflineMode] = useState(false);
  return (
    <StyledWrapper>
      <LoadFont/>
      <StyledMenu>
        <TextEditor/>
        {keyValues.map((value) => {
          return (
            <Selector
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

          {offlineMode ?
          <>
            <DraggableRnd
              label="Offline - Backdrop Shape"
              keyValue="valueOfflineBackgroundShape"
              data={formData.valueOfflineBackgroundShape}
              key="valueOfflineBackgroundShape"
              hovered={hoveredItem==="valueOfflineBackgroundShape"}
            >
              <StyledBackdrop
                style={{
                  backgroundColor: formData.valueOfflineBackgroundShape?.color,
                  opacity: formData.valueOfflineBackgroundShape?.opacity,
                }}
              />
            </DraggableRnd>
            <DraggableRnd
              label="Offline - Message"
              keyValue="valueOfflineMessage"
              data={formData.valueOfflineMessage}
              key="valueOfflineMessage"
              hovered={hoveredItem==="valueOfflineMessage"}
            >
              {showExamples ?
                'Offline'
                :
                'Offline'
              }
            </DraggableRnd>
            <DraggableRnd
              label="Offline - Last Stream"
              keyValue="valueOfflineLastOnline"
              data={formData.valueOfflineLastOnline}
              hovered={hoveredItem==="valueOfflineLastOnline"}
            >
              {showExamples ?
                'Last Online: 23h 6m'
                :
                'Last Online Time'
              }
            </DraggableRnd>
          </>
          :
          <>
            <DraggableRnd
              label="Backdrop Shape"
              keyValue="valueBackgroundShape"
              data={formData.valueBackgroundShape}
              key="valueBackgroundShape"
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
              key="valueViewers"
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
              key="valueAvatar"
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
              key="valueSnapshot"
              hovered={hoveredItem==="valueSnapshot"}
            >
              {showExamples ?
                <img
                  src={screencap}
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
              key="valueCategory"
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
              key="valueUsername"
              hovered={hoveredItem==="valueUsername"}
            >
              {formData.streamer ? <div>{formData.streamer}</div> : 'Username'}
            </DraggableRnd>

            <DraggableRnd
              label="Time Live"
              keyValue="valueTimeOnline"
              data={formData.valueTimeOnline}
              key="valueTimeOnline"
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
              key="valueStreamTitle"
              hovered={hoveredItem==="valueStreamTitle"}
            >
              {showExamples ?
                'Trying to get 10 wins in this game'
                :
                'Stream Title'
              }
            </DraggableRnd>
          </>
        }
        </StyledCanvas>
      <FormSettingsOverlay
        offlineMode={offlineMode}
        setOfflineMode={setOfflineMode}
      />
      </StyledCanvasWrapper>
        <RightSide/>
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

export default connect(mapStateToProps, null)(Editor);
