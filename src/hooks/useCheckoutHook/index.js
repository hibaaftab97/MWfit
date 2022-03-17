import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {useNavigation} from '@react-navigation/native';
import {createOrder} from '../../redux/actions/checkoutAction';

export const useCheckoutHook = () => {
  const dispatch = useDispatch();
  const [checkoutState, setCheckoutState] = useState(false);

  const checkoutFunc = useCallback(data => {
    console.log(data, 'checkoutData');
    if (
      !data?.billing?.address_1 ||
      // !data?.billing?.address_2 ||
      !data?.billing?.city ||
      !data?.billing?.country ||
      !data?.billing?.state
    ) {
      showToast('Please fill all fields');
    } else {
      try {
        dispatch(createOrder(data)).then(res => {
          setCheckoutState(true);
        });
      } catch (e) {
        showToast(e);
      }
    }
  }, []);
  return [checkoutState, checkoutFunc];
};
