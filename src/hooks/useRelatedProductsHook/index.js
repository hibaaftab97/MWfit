import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {getRelatedProducts} from '../../redux/actions/productsActions';

export const useRelatedProductsHook = () => {
  const dispatch = useDispatch();
  const [listRelatedProducts, setListRelatedProducts] = useState();
  const listRelatedProductsFunc = useCallback(relatedProductsIds => {
    dispatch(getRelatedProducts(relatedProductsIds)).then(res => {
      setListRelatedProducts(res);
    });
  }, []);
  return [listRelatedProducts, listRelatedProductsFunc];
};
