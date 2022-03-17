import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {UpdatetoCart} from '../../redux/actions/cartActions';

export const useUpdateCartHook = () => {
  const dispatch = useDispatch();
  const [updateCartState, setUpdateCartState] = useState(false);

  const updateCartFunc = useCallback(data => {
    console.log(data, 'updateCartState');
    try {
      dispatch(UpdatetoCart(data));
    } catch (e) {
      showToast(e);
    }
  }, []);
  return [updateCartState, updateCartFunc];
};
