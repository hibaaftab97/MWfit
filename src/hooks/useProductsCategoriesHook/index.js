import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { getCategories } from '../../redux/actions/productsActions';

export const useProductsCategoriesHook = () => {
  const dispatch = useDispatch();
  const [listProductsCategoriesState, setListProductsCategoriesState] =
    useState();
  const listProductsCategoriesFunc = useCallback(data => {
    dispatch(getCategories()).then(res => {
      setListProductsCategoriesState(res);
    });
  }, []);
  return [listProductsCategoriesState, listProductsCategoriesFunc];
};
