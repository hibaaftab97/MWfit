import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {listOrders} from '../../redux/actions/ordersActions';

export const useOrdersListHook = () => {
  const dispatch = useDispatch();
  const [ordersListState, setOrdersListState] = useState(false);
  const ordersListFunc = useCallback(customerId => {
    dispatch(listOrders(customerId)).then(response => {
      setOrdersListState(response);
    });
  }, []);
  return [ordersListState, ordersListFunc];
};
