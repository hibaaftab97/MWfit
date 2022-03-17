import { useState, useCallback } from 'react';
import { userLogin } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { useNavigation } from '@react-navigation/native';
import { forgotPasswordEmail } from '../../redux/actions/authActions';

export const useForgotPasswordHook = () => {
  const dispatch = useDispatch();
  const [forgotPasswordEmailState, setForgotPasswordEmailState] = useState();

  const forgotPasswordEmailFunc = useCallback(data => {
    if (data === '') {
      showToast('Please Enter Email Address');
    } else {
      try {
        dispatch(forgotPasswordEmail(data)).then(res => {
          setForgotPasswordEmailState(res);
        });
      } catch (e) {
        showToast(e);
      }
    }
  }, []);
  return [forgotPasswordEmailState, forgotPasswordEmailFunc];
};
