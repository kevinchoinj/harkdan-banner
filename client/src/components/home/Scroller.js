import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import templateOne from 'data/templates/5.jpg';
import preview from 'data/preview.jpg';

const StyledWrapper = styled.div`
  height: 300vh;
  position: relative;
  margin-bottom: 4rem;
`;
const StyledContainer = styled.div`
  perspective: 1000px;
  position: sticky;
  top: 80px;
  @media screen and (max-width: 992px) and (orientation: portrait) {
    top: 25%;
  }
`;
const StyledDiv = styled.div`
  background-color: #fff;
  width: 63.8vw;
  padding-top: 56%;
  position: relative;
  @media screen and (max-width: 992px) {
    width: 90vw;
  }
`;
const StyledInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-weight: 700;
  font-size: 2vw;
  line-height: 2.8vw;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  padding: 5vw;
  background-image: url(${templateOne});
  display: flex;
  align-items: center;
`;
const StyledList = styled.div`
  flex: 1;
`;
const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  background-image: url(${templateOne});
`;
const StyledImage = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;
const Scroller = () => {
  const wrapperRef = useRef(null);
  const [rotation, setRotation] = useState(60);
  const stickyRef = useRef(null);
  const setScroll = () => {
    const viewportHeight = window.innerHeight;
    const heightOfStickyWrapper = viewportHeight * 3;
    const scrolledFromTop = window.pageYOffset - (wrapperRef.current?.offsetTop);
    const percentageScrolled = 50 - (scrolledFromTop/heightOfStickyWrapper * 90);
    if (percentageScrolled < 1) {
      setRotation(1);
    }
    else if (percentageScrolled > 90) {
      setRotation(90);
    }
    else {
      setRotation(percentageScrolled);
    }
  };
  useEffect(() => {
    setScroll();
    window.addEventListener('scroll', setScroll);
    window.addEventListener('resize', setScroll);
    return () => {
      window.removeEventListener('scroll', setScroll);
      window.removeEventListener('resize', setScroll);
    }
  }, [setScroll]);

  return (
    <StyledWrapper ref={wrapperRef}>
      <StyledContainer ref={stickyRef}>
        <StyledDiv
          style={{
            transform: `rotateX(${rotation}deg)`,
          }}
        >
          <StyledInner>
            <StyledList>
            • Live <span style={{color: '#85f'}}>Viewer Count</span><br/>
            • Live <span style={{color: '#85f'}}>Category</span><br/>
            • Stream <span style={{color: '#85f'}}>Uptime</span><br/>
            • Latest <span style={{color: '#85f'}}>Screencap</span><br/>
            • Your <span style={{color: '#85f'}}>Username</span><br/>
            • Profile <span style={{color: '#85f'}}>Picture</span><br/>
            </StyledList>
            <StyledImage>
              <img src={preview} alt="preview"/>
            </StyledImage>
            <StyledOverlay
              style={{
                transform: `translateY(${110 - rotation}%)`,
              }}
            />
          </StyledInner>
        </StyledDiv>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Scroller;