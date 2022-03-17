import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {getWishlist} from '../../redux/actions/productsActions';

export const useListWishlistHook = () => {
  const dispatch = useDispatch();
  const [wishlistProductsState, setWishlistProductsState] = useState();
  const listWishlistProductFunc = useCallback(id => {
    console.log(id[0], 'wishlisttlidhook');
    if (id[0]) {
      dispatch(getWishlist(id)).then(res => {
        console.log(res, 'wishlistres');
        setWishlistProductsState(res);
      });
    } else {
      setWishlistProductsState([]);
    }

    console.log(wishlistProductsState, 'wishlistProductsState');
  }, []);
  return [wishlistProductsState, listWishlistProductFunc];
};
