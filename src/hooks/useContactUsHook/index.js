import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {contactUsAction} from '../../redux/actions/contactUsActions';

export const useContactUsHook = () => {
  const dispatch = useDispatch();
  const [contactUsState, setContactUsState] = useState(null);

  const contactUsFunc = useCallback(data => {
    if (
      data?.fullName === '' ||
      data?.email === '' ||
      data?.message === ''
    ) {
      showToast('Please fill all fields');
    } else {
      try {
        dispatch(contactUsAction(data)).then(res => {
          setContactUsState(res);
        });
      } catch (e) {
        showToast(c);
      }
    }
  }, []);
  return [contactUsState, contactUsFunc];
};
