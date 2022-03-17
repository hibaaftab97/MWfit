import { useState, useCallback } from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { useNavigation } from '@react-navigation/native';

export const useAddToCartHook = () => {
  const navgiation = useNavigation();
  const dispatch = useDispatch();
  const [cartState, setCartState] = useState(null);

  const addToCartFunc = useCallback(data => {
    try {
      dispatch(addToCart(data)).then(res => {
        showToast('Product added successfully')
        setCartState(res);
      });
    } catch (e) {
      showToast(c);
    }
  }, []);
  return [cartState, addToCartFunc];
};
