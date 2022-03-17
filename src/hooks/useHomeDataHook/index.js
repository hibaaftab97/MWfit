import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {getHomeBanner} from '../../redux/actions/productsActions';

export const useHomeDataHook = () => {
  const dispatch = useDispatch();
  const [homeDataState, setHomeDataSet] = useState();
  const homeDataFunc = useCallback(data => {
    dispatch(getHomeBanner()).then(res => {
      setHomeDataSet(res);
    });
  }, []);
  return [homeDataState, homeDataFunc];
};
