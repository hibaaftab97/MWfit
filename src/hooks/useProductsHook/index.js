import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { getProducts } from '../../redux/actions/productsActions';

export const useProductsHook = () => {
  const dispatch = useDispatch();
  const [listProductsState, setListProductsState] = useState();
  const listProductsFunc = useCallback(data => {
    dispatch(getProducts(1)).then(res => {
      setListProductsState(res);
    });
  }, []);
  return [listProductsState, listProductsFunc];
};
