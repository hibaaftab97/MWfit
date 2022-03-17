import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/profileActions';

export const useLogoutHook = () => {
  const dispatch = useDispatch();
  const [logoutState, setLogoutState] = useState();
  const logoutFunc = useCallback(data => {
    dispatch(logout()).then(res => {
      setLogoutState(res);
    });
  }, []);
  return [logoutState, logoutFunc];
};
