import React, { useCallback } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { generalImages, icons } from '../../../assets/images';

import TextWrapper from '../../../components/TextWrapper';

import CartContainer from '../../../components/Containers/CartContainer';

import styles from './styles';

import { useListWishlistHook } from '../../../hooks/useListWishlistHook';
import { useFocusEffect } from '@react-navigation/core';

import { useSelector } from 'react-redux';
import { vh, vw } from '../../../units';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import ProductsContainer from '../../../components/Containers/ProductsContainer';
import MainContainer from '../../../components/Containers/MainContainer';
import theme from '../../../utils/theme';

const WishlistScreen = props => {
  const navigation = useNavigation();
  const wishlistItems = useSelector(
    state => state.wishlistReducer.wishlistItems,
  );

  const [wishlistProductsState, listWishlistProductFunc] =
    useListWishlistHook();
  useFocusEffect(
    useCallback(() => {
      listWishlistProductFunc(wishlistItems);
    }, [wishlistItems]),
  );
  
  const renderSearchHeader = () => {
    return (
      <View style={{alignItems:'center', backgroundColor: '#707070',}}>

      
      <View
        style={styles.searchView}>
         
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={styles.leftArrowIconButton}>
            <Image source={icons.leftArrow} style={styles.leftArrowIconStyle} />
          </TouchableOpacity>
          <TextWrapper style={styles.searchTextStyle}>WishList</TextWrapper>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.searchIconButtonView}>
              <Image
                style={[
                  styles.searchIconStyle,
                  {tintColor: theme.whiteBackground},
                ]}
                source={icons.search}
              />
            </TouchableOpacity>
          </View> 
         
      </View>
      </View>
    );
  };

  const renderListView = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        {/* <CartContainer filled={true} data={item} /> */}
        <ProductsContainer filled={true} data={item} />
      </View>
    );
  };

  const renderListEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponentView}>
        <TextWrapper>No Items are available</TextWrapper>
      </View>
    );
  };

  const renderWishFlatList = () => {
    return (
      <FlatList
        data={wishlistProductsState}
        renderItem={renderListView}
        style={styles.listView}
        ListEmptyComponent={renderListEmptyComponent}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
      />
    );
  };

  return (
    <View>
      {renderSearchHeader()}
      {renderWishFlatList()}
    </View>
  );
};
export default WishlistScreen;
