import {useEffect} from 'react';
import {connect} from 'react-redux';
import {findPassport} from 'actions/auth';

const CheckLogin = ({checkLogin}) => {
  useEffect(() => {
    checkLogin();
  }, [checkLogin])
  return null;
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: (values) => dispatch(findPassport(values)),
  };
};

export default connect(null, mapDispatchToProps)(CheckLogin);
