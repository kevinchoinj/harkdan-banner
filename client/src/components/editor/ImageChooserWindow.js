import React, {useMemo, useRef, useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {showBackgroundChooser} from 'actions/formSettings';
import {setBackground} from 'actions/form';
import {templatesList} from 'data/templatesList';
import {actionTaken} from 'actions/history';

const StyledWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 200px;
  width: 225px;
  font-size: 12px;
  color: #ddd;
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
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 117px;
    width: 208px;
  }
`;
const StyledTitle = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  cursor: move;
  font-size: 13px;
  border: 1px
  margin-bottom: 6px;
  padding: 6px;
  border-bottom: 1px solid #aaa;
  >div {
    cursor: pointer;
  }
`;
const StyledPagination = styled.div`
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 6px;
  padding: 6px;
  border-bottom: 1px solid #aaa;
  display: flex;
  justify-content: space-between;
`;
const StyledPaginationButtons = styled.div`
  display: flex;
`;
const StyledPaginationButtonsButton = styled.div`
  color: ${props => props.disabled && '#555'};
  pointer-events: ${props => props.disabled && 'none'};
  cursor: pointer;
  &:first-child {
    margin-right: 1rem;
  }
`;

const PAGE_SIZE = 4;
const paginate = (array, page_number) => {
  --page_number;
  return array.slice(page_number * PAGE_SIZE, (page_number + 1) * PAGE_SIZE);
};

const ImageChooserWindow = ({
  background,
  backgroundChooserVisible,
  saveHistory,
  setBackground,
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


  const [currentPage, setCurrentPage] = useState(1);
  const paginatedTemplatesList = useMemo(() => paginate(templatesList, currentPage), [currentPage]);
  return backgroundChooserVisible ? (
    <StyledWrapper
      style={{transform: `translateX(${position.x}px) translateY(${position.y}px)`}}
      onWheel={(e) => {
        if (e.deltaY < 0  && !(currentPage < 2)) {
          setCurrentPage(prev => prev >= 2 && prev - 1)
        }
        else if (e.deltaY > 0 && !(templatesList.length/(currentPage*4) <= 1)) {
          setCurrentPage(prev => templatesList.length/(currentPage*4) >= 1 && prev + 1)
        }
      }}
    >
      <StyledTitle
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={() => handleMouseUp()}
      >
        Background Chooser
        <div onClick={() => toggleWindow(false)}>
          X
        </div>
      </StyledTitle>
      <StyledPagination>
        Page: {currentPage}
        <StyledPaginationButtons>
          <StyledPaginationButtonsButton
            disabled={currentPage < 2}
            onClick={() => setCurrentPage(prev => prev >= 2 && prev - 1)}
          >
            {`<`}
          </StyledPaginationButtonsButton>
          <StyledPaginationButtonsButton
            disabled={templatesList.length/(currentPage*4) <= 1}
            onClick={() => setCurrentPage(prev => templatesList.length/(currentPage*4) >= 1 && prev + 1)}
          >
            {`>`}
          </StyledPaginationButtonsButton>
        </StyledPaginationButtons>
      </StyledPagination>
      {paginatedTemplatesList.map((value) => {
        return (
          <StyledOption
            active={background === value.keyValue}
            onClick={() => {
              setBackground(value.keyValue);
              saveHistory(`Background changed`);
            }}
            key={value.keyValue}
          >
            <img src={value.image} alt={value.keyValue}/>
          </StyledOption>
        )
      })}
    </StyledWrapper>
  ) : null
}

const mapStateToProps = (state) => {
  return {
    background: state.form.background,
    backgroundChooserVisible: state.formSettings.backgroundChooserVisible,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveHistory: (actionName) => dispatch(actionTaken(actionName)),
    setBackground: (background) => dispatch(setBackground(background)),
    toggleWindow: (index) => dispatch(showBackgroundChooser(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageChooserWindow);
