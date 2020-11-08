import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {restoreHistory} from 'actions/history';
import {showHistory} from 'actions/formSettings';

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  right: 160px;
  width: 225px;
  font-size: 12px;
  color: #ddd;
  min-height: 300px;
  border: 1px solid #aaa;
  border-radius: 6px 6px 0 0;
  background-color: #222;
`;
const StyledOption = styled.div`
  cursor: ${props => props.active ? 'default' : 'pointer'};
  pointer-events: ${props => props.active && 'none'};
  border-bottom: 1px solid #aaa;
  padding: 6px;
  background-color: ${props => props.active && props.theme.colorPrimary};
  color: ${props => props.inactive && '#aaa'};
  font-style: ${props => props.inactive && 'italic'};
  &:hover {
    background-color: #000;
  }
`;
const StyledTitle = styled.div`
  font-weight: 500;
  cursor: move;
  font-size: 13px;
  border: 1px
  margin-bottom: 6px;
  padding: 6px;
  border-bottom: 1px solid #aaa;
  display: flex;
  justify-content: space-between;
  >div {
    cursor: pointer;
  }
`;

const History = ({
  history,
  historyIndex,
  historyVisible,
  reset,
  toggleWindow,
}) => {
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
    coords: {},
  });

  const handleMouseMove = useRef(e => {
    setPosition(position => {
      const xDiff = position.coords.x - e.pageX;
      const yDiff = position.coords.y - e.pageY;
      return {
        x: position.x - xDiff,
        y: position.y - yDiff,
        coords: {
          x: e.pageX,
          y: e.pageY,
        },
      };
    });
  });

  const handleMouseDown = e => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    setPosition(position => Object.assign({}, position, {
      coords: {
        x: pageX,
        y: pageY,
      },
    }));
    document.addEventListener('mousemove', handleMouseMove.current);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove.current);
    setPosition(position =>
      Object.assign({}, position, {
        coords: {},
      })
    );
  };

  return historyVisible ? (
    <StyledWrapper
      style={{transform: `translateX(${position.x}px) translateY(${position.y}px)`}}
    >
      <StyledTitle
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={() => handleMouseUp()}
      >
        History
        <div onClick={() => toggleWindow(false)}>
          X
        </div>
      </StyledTitle>
      {history.map((value, index) => {
        return (
          <StyledOption
            key={value.timestamp || index}
            onClick={() => reset(index)}
            inactive={historyIndex < index}
            active={historyIndex === index}
          >
            {value.label}
          </StyledOption>
        )
      })}
    </StyledWrapper>
  ) : null;
}

const mapStateToProps = (state) => {
  return {
    history: state.history.history,
    historyVisible: state.formSettings.historyVisible,
    historyIndex: state.history.historyIndex,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    reset: (index) => dispatch(restoreHistory(index)),
    toggleWindow: (index) => dispatch(showHistory(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
