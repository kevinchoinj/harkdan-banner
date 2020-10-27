import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import templateOne from 'data/templates/5.jpg';
import preview from 'data/preview.jpg';

const StyledWrapper = styled.div`
  height: 300vh;
  position: relative;
  margin-top: -6rem;
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
  width: 60vw;
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
  position: absolute;
  right: 5vw;
  top: 5vw;
  width: 25vw;
  img {
    width: 100%;
  }
`;
const Scroller = () => {
  const [rotation, setRotation] = useState(60);
  const stickyRef = useRef(null);
  const setScroll = () => {
    const viewportHeight = window.innerHeight;
    const scrolledFromTop = window.pageYOffset;
    const percentageScrolled = 90 - (scrolledFromTop/(viewportHeight * 3) * 90);
    setRotation(percentageScrolled > 1 ? percentageScrolled : 1);
  };
  useEffect(() => {
    setScroll();
    window.addEventListener('scroll', setScroll);
    window.addEventListener('resize', setScroll);
  }, [setScroll]);

  return (
    <StyledWrapper>
      <StyledContainer ref={stickyRef}>
        <StyledDiv
          style={{
            transform: `rotateX(${rotation}deg)`,
          }}
        >
          <StyledInner>
            • Live Viewer Count<br/>
            • Live Category<br/>
            • Live Stream Uptime<br/>
            • Latest Screencap<br/>
            • Username<br/>
            • Profile Picture<br/>
            • Unique Designs<br/>
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