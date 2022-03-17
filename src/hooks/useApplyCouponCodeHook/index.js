import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {getCouponCode} from '../../redux/actions/productsActions';

export const useApplyCouponCodeHook = () => {
  const dispatch = useDispatch();
  const [couponState, setCouponState] = useState(null);

  const applyCouponFunc = useCallback(coupon => {
    console.log(coupon);
    if (coupon === '') {
      showToast('Enter Coupon Code');
    } else {
      try {
        dispatch(getCouponCode(coupon)).then(res => {
          console.log(res, 'couponResponse');
          if (res[0] == null) {
            showToast('Invalid Coupon');
          } else {
            setCouponState(res[0]);
          }
        });
      } catch (e) {
        showToast(e);
      }
    }
  }, []);
  return [couponState, applyCouponFunc];
};
