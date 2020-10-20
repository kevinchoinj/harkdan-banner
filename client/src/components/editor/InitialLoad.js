import {useEffect} from 'react';
import {connect} from 'react-redux';
import {actionTaken} from 'actions/history';

const InitialLoad = ({setInitialState}) => {
  useEffect(() => {
    setInitialState('Initial Settings');
  }, [])
  return null;
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialState: (actionName) => dispatch(actionTaken(actionName)),
  };
};

export default connect(null, mapDispatchToProps)(InitialLoad);
