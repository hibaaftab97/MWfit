import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {useNavigation} from '@react-navigation/native';
import {removeFromCart} from '../../redux/actions/cartActions';
export const useDeleteFromCartHook = () => {
  const navgiation = useNavigation();
  const dispatch = useDispatch();
  const [removeCartItemState, setRemoveCartItemState] = useState(null);

  const removeFromCartFunc = useCallback(id => {
    try {
      dispatch(removeFromCart(id));
    } catch (e) {
      showToast(e);
    }
  }, []);
  return [removeCartItemState, removeFromCartFunc];
};
