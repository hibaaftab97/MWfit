import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { useNavigation } from '@react-navigation/native';
import { AddtoWishList } from '../../redux/actions/productsActions';

export const useAddWishlistHook = () => {
    const navgiation = useNavigation();
    const dispatch = useDispatch();
    const [wishlistState, setWishlistState] = useState(false);

    const wishlistFunc = useCallback(data => {
        console.log(data, 'wishlistData');
        try {
            dispatch(AddtoWishList(data)).then(res => {
                setWishlistState(true);
            });
        } catch (e) {
            showToast(e);
        }
    }, []);
    return [wishlistState, wishlistFunc];
};
