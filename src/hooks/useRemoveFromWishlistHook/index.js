import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {useNavigation} from '@react-navigation/native';
import {RemovefromWishlist} from '../../redux/actions/productsActions';

export const useRemoveFromWishlistHook = () => {
  const navgiation = useNavigation();
  const dispatch = useDispatch();
  const [removeWishlistState, setRemoveWishtListState] = useState(false);

  const removeWishListFunc = useCallback(data => {
    console.log(data, 'wishlistDataHook');
    try {
      dispatch(RemovefromWishlist(data)).then(res => {
        setRemoveWishtListState(res);
      });
    } catch (e) {
      showToast(e);
    }
  }, []);
  return [removeWishlistState, removeWishListFunc];
};
