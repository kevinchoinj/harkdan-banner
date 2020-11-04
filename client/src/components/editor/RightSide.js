import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import RightSideEditor from 'components/editor/RightSideEditor';

const StyledWrapper = styled.div`
  flex: 0 0 325px;
  height: 100%;
  border-left: 1px solid ${props => props.theme.colorBackgroundElevated};
  background-color: ${props => props.theme.colorBackground};
  user-select: none;
  overflow-y: auto;
  font-size: 14px;
`;

const RightSide = ({formKey}) => {
  return (
    <StyledWrapper>
      {formKey &&
        <RightSideEditor
          value={formKey}
          key={formKey.label}
        />
      }
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    formKey: state.formSettings.formKey,
  };
};

export default connect(mapStateToProps, null)(RightSide);