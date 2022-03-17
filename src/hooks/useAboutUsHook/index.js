import {useState, useCallback} from 'react';
import {aboutAction} from '../../redux/actions/authActions';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';

export const useAboutUsHook = () => {
  const dispatch = useDispatch();
  const [aboutUsState, setAboutUsState] = useState(null);

  const aboutUsFunc = useCallback(data => {
    try {
      dispatch(aboutAction(data)).then(res => {
        console.log(res, 'hookResponse');
        setAboutUsState(res);
      });
    } catch (e) {
      showToast(e);
    }
  }, []);
  return [aboutUsState, aboutUsFunc];
};
