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
            `${formData.valueViewers.fontFamily}:bold`,
            formData.valueCategory.fontFamily,
            `${formData.valueCategory.fontFamily}:bold`,
            formData.valueUsername.fontFamily,
            `${formData.valueUsername.fontFamily}:bold`,
            formData.valueTimeOnline.fontFamily,
            `${formData.valueTimeOnline.fontFamily}:bold`,
            formData.valueStreamTitle.fontFamily,
            `${formData.valueStreamTitle.fontFamily}:bold`,
            formData.valueOfflineMessage.fontFamily,
            `${formData.valueOfflineMessage.fontFamily}:bold`,
            formData.valueOfflineLastOnline.fontFamily,
            `${formData.valueOfflineLastOnline.fontFamily}:bold`,
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
