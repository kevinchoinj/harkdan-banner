import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {showBackgroundChooser} from 'actions/formSettings';
import {find, propEq} from 'ramda';
import {templatesList} from 'data/templatesList';

const StyledButton = styled.div`
  border: 1px solid #ddd;
  height: 90px;
  width: 160px;
  background-size: cover;
  position: relative;
  cursor: pointer;
`;

const ImageChooser = ({backgroundChooserVisible, formData, toggleWindow}) => {
  const backgroundImage = useMemo(() => {
    const imageObject = find(propEq('keyValue', formData.background))(templatesList);
    return imageObject.image;
  }, [formData]);
  return (
    <StyledButton
      style={{backgroundImage: `url(${backgroundImage})`}}
      onClick={() => toggleWindow(!backgroundChooserVisible)}
    >
    </StyledButton>
  )
}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
    backgroundChooserVisible: state.formSettings.backgroundChooserVisible,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleWindow: (index) => dispatch(showBackgroundChooser(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageChooser);