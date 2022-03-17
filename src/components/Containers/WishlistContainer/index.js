import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { icons } from '../../../assets/images';
import TextWrapper from '../../TextWrapper';
import { vh, vw } from '../../../units';
import theme from '../../../utils/theme';

import { useAddWishlistHook } from '../../../hooks/useAddWishlistHook';
import { useRemoveFromWishlistHook } from '../../../hooks/useRemoveFromWishlistHook';
import { useSelector } from 'react-redux';

const WishlistContainer = props => {
  const [wishlistState, wishlistFunc] = useAddWishlistHook();
  const [removeWishlistState, removeWishListFunc] = useRemoveFromWishlistHook();
  const [wishlistadded, setWishlistAdded] = useState(false);
  const [wishlistItemId, setWishlistItemId] = useState();
  const wishlistItems = useSelector(
    state => state.wishlistReducer.wishlistItems,
  );
  const wishlistFilled = () => {
    let WishListindex = wishlistItems.findIndex(x => x == props?.data?.id);
    if (WishListindex > -1) {
      // setWishlistAdded(true);
      return true;
    } else {
      // setWishlistAdded(false);
      return false;
    }
  };

  const handleWishlist = () => {
    const WishlistItemExist = wishlistItems.filter(x => x == props?.data?.id);

    if (WishlistItemExist?.length) {
      removeWishListFunc(props?.data?.id);
      setWishlistAdded(false);
    } else {
      wishlistFunc(props?.data);
      setWishlistAdded(true);
    }
  };

  return (
    <View style={styles.categoryCartView}>
      <View style={styles.cartTextView}>
        <TextWrapper style={styles.cartCategoryTextStyle}>
          ${props?.data?.price}
        </TextWrapper>
      </View>
      <TouchableOpacity onPress={handleWishlist} style={styles.cartGreenView}>
        <Image
          source={icons.heart}
          style={[
            styles.cartGreenStyle,
            { tintColor: wishlistFilled() ? 'red' : null },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCartView: {
    flexDirection: 'row',
    width: 35 * vw,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginRight: 2 * vw,
    marginTop: 0.5 * vh,
  },

  cartTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartCategoryTextStyle: {
    color: theme.activeTextInputColor,
    fontSize: 1.4 * vh,
    marginTop: 0.5 * vh,
    fontWeight: 'bold',
    width: 28 * vw,
    // backgroundColor: 'red'
  },

  cartGreenView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 6 * vw,
    height: 6 * vw,
    borderRadius: 6 * vw,
    borderWidth: 0.1,
    // width: 10 * vw
  },

  cartGreenStyle: {
    resizeMode: 'contain',
    height: 2 * vh,
    width: 2 * vw,
  },
});

export default WishlistContainer;
