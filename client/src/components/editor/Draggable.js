import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff;
`;
const DraggableObject = () => {
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
      className="container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

const Draggable = () => {
  return (
    <DraggableObject />
  );
};

export default Draggable;