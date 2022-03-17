import React, {useState, useEffect, useCallback} from 'react';
import {userSignUp} from '../../redux/actions/authActions';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';

export const useRegisterHook = () => {
  const dispatch = useDispatch();
  const [signupState, setSignupState] = useState(false);

  const signupFunc = useCallback(data => {
    console.log(data, 'dataSign');
    setSignupState(true);
    if (data?.email === '' || data?.password === '') {
      showToast('Fields are empty');
    }
    if (data?.password === data?.confirmPassword) {
      dispatch(
        userSignUp({
          email: data?.email,
          username: data?.username,
          password: data?.password,
        }),
      );
    } else {
      showToast('Passwords are not matched');
    }
  }, []);

  return [signupState, signupFunc];
};
