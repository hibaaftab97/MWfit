import { useState, useCallback } from 'react';
import { userLogin, userSignUp } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { useNavigation } from '@react-navigation/native';

export const useLoginHook = () => {
  const navgiation = useNavigation();
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(null);

  const loginFunc = useCallback(data => {
    if (data?.username == '' || data?.password == '') {
      showToast('Please fill all fields');
    } else {
      try {
        dispatch(userLogin(data)).then(res => {
          setLoginState(res);
        });
      } catch (e) {
        showToast(c);
      }
    }
  }, []);
  return [loginState, loginFunc];
};
