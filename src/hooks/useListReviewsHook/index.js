import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {listReviews} from '../../redux/actions/reviewsActions';

export const useListReviewsHook = () => {
  const dispatch = useDispatch();
  const [reviewsListState, setReviewsListState] = useState(false);
  const reviewsListFunc = useCallback(productId => {
    dispatch(listReviews(productId)).then(response => {
      setReviewsListState(response);
    });
  }, []);
  return [reviewsListState, reviewsListFunc];
};
