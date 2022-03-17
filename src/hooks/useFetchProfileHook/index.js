import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {getProfileDetails} from '../../redux/actions/profileActions';

export const useFetchProfileHook = () => {
  const dispatch = useDispatch();
  const [profileState, setProfileState] = useState();
  const profileFunc = useCallback(id => {
    dispatch(getProfileDetails(id)).then(res => {
      setProfileState(res);
    });
  }, []);
  return [profileState, profileFunc];
};
