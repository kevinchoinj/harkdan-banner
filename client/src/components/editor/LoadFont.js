import {useEffect} from 'react';
import {connect} from 'react-redux';
import WebFont from 'webfontloader';
import {uniq} from 'ramda';

const LoadFont = ({formData}) => {
  useEffect(() => {
    if (formData) {
      WebFont.load({
        google: {
          families: uniq([
            formData.valueViewers.fontFamily,
            formData.valueCategory.fontFamily,
            formData.valueUsername.fontFamily,
            formData.valueTimeOnline.fontFamily,
            formData.valueStreamTitle.fontFamily,
          ]).filter(val => val)
        }
      });
    }
  }, [formData]);
  return null;
}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
  };
};

export default connect(mapStateToProps, null)(LoadFont);
