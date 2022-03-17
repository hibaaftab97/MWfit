import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {getSingleProductDetails} from '../../redux/actions/productsActions';

export const useGetProductDetailsHook = () => {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState();
  const productDetailsFunc = useCallback(id => {
    dispatch(getSingleProductDetails(id)).then(res => {
      setProductDetails(res);
    });
  }, []);
  return [productDetails, productDetailsFunc];
};
