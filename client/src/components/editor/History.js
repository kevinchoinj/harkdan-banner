import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {restoreHistory} from 'actions/history';

const StyledWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 200px;
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
  background-color: ${props => props.active && '#6d7d92'};
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
`;

const History = ({history, historyIndex, reset}) => {
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

  return (
    <StyledWrapper
      style={{transform: `translateX(${position.x}px) translateY(${position.y}px)`}}
    >
      <StyledTitle
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={() => handleMouseUp()}
      >
        History
      </StyledTitle>
      {history.map((value, index) => {
        return (
          <StyledOption
            key={value.timestamp}
            onClick={() => reset(index)}
            inactive={historyIndex < index}
            active={historyIndex === index}
          >
            {value.label}
          </StyledOption>
        )
      })}
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    history: state.history.history,
    historyIndex: state.history.historyIndex,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    reset: (index) => dispatch(restoreHistory(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
