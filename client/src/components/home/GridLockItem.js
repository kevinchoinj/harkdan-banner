import React, {
  useState,
  useRef,
  useMemo,
  useLayoutEffect,
} from 'react';
import {connect} from 'react-redux';
import {selectCurrentMousePosition} from 'reducers';
import styled from 'styled-components';

const StyledGridItem = styled.div`
  position: relative;
`;
const StyledGridItemImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const useAnimationFrame = callback => {
  const callbackRef = useRef(callback);
  useLayoutEffect(
    () => {
      callbackRef.current = callback;
    },
    [callback]
  );

  const loop = () => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    const cb = callbackRef.current;
    cb();
  };

  const frameRef = useRef();
  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    return () =>
      cancelAnimationFrame(frameRef.current);
  });
};

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min)/100000;
}

const CursorCircle = ({image, gridArea, mousePosition}) => {
  const [imageValues, setImageValues] = useState({x: window.innerWidth/2, y: window.innerHeight/2});
  const randomNumber = useMemo(() => getRandomArbitrary(8, 75), [])
  const animate = () => {
    const distX = (mousePosition.xValue - imageValues.x) * randomNumber;
    const distY = (mousePosition.yValue - imageValues.y) * randomNumber;
    setImageValues({
      x: imageValues.x + distX,
      y: imageValues.y + distY
    });

  };

  useAnimationFrame(() => {
    animate();
  });

  return(
    <StyledGridItem style={{
      gridArea: gridArea,
      transform: `translate(${imageValues.x}px, ${imageValues.y}px)`
      }}>
      <StyledGridItemImage style={{backgroundImage: image}}/>
    </StyledGridItem>
  );
};

const mapStateToProps = (state) => {
  return {
    mousePosition: selectCurrentMousePosition(state),
  };
};

export default connect(mapStateToProps, null)(CursorCircle);
