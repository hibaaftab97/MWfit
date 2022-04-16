import { useState, useCallback } from 'react';
import { userLogin } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { useNavigation } from '@react-navigation/native';
import { forgotPasswordEmail,validateCode } from '../../redux/actions/authActions';

export const useForgotPasswordHook = () => {
  const dispatch = useDispatch();
  const [forgotPasswordEmailState, setForgotPasswordEmailState] = useState();

  const forgotPasswordEmailFunc = useCallback(data => {
    if (data === '') {
      showToast('Please Enter Email Address');
    } else {
      
      try {
        dispatch(forgotPasswordEmail(data)).then(res => {
          console.log('forggg responsee',res);
          setForgotPasswordEmailState(res);
        });
      } catch (e) {
        showToast(e);
      }
    }
  }, []);
  return [forgotPasswordEmailState, forgotPasswordEmailFunc];
};

export const validateCodeHook = () => {
  const dispatch = useDispatch();
  const [validateCodeState, setvalidateCodeState] = useState();

  const validateCodeFunc = useCallback(data => {
    if (data === '') {
      showToast('Please Enter Code');
    } else {
      try {
        dispatch(validateCode(data)).then(res => {
          setvalidateCodeState(res);
        });
      } catch (e) {
        showToast(e);
      }
    }
  }, []);
  return [validateCodeState, validateCodeFunc];
};
