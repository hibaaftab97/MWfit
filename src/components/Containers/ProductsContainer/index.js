import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, icons } from '../../../assets/images';
import { vh, vw } from '../../../units';
import WishlistContainer from '../../../components/Containers/WishlistContainer';

import styles from './styles';

import { useAddToCartHook } from '../../../hooks/useAddToCartHook';
import { useNavigation } from '@react-navigation/native';
import theme from '../../../utils/theme';

const ProductsContainer = props => {
  const navigation = useNavigation();
  const [cartState, addToCartFunc] = useAddToCartHook();


  const handleAddToCart = () => {
    const data = {
      itemId: props?.data?.id,
      itemName: props?.data?.name,
      itemPrice: props?.data?.price,
      itemQuantity: 1,
      itemImage: props?.data?.images[0]?.src,
    };
    addToCartFunc(data);
  };

  const handleProductImage = () => {
    if (props?.data?.images[0] == null) {
      return generalImages.placeholderImage;
    } else {
      return { uri: props?.data?.images[0]?.src };
    }
  };

  const renderRecommended = () => {
    return (
      <View style={styles.mainProductView}>
        <View style={{  width: 40 * vw,
            opacity:0.8,
            right: 5 * vw,
            borderRadius: 4 * vw,
            backgroundColor:'#000000'}}>
        <TouchableOpacity
          style={{
          
          }}
          onPress={() =>
            navigation.navigate('ProductDetailsScreen', {
              params: props?.data.id,
            })
          }
          >
          <Image
            defaultSource={generalImages.placeholderImage}
            source={handleProductImage()}
            // source={props?.data?.image}
            style={styles.productImageStyle}
          />
        </TouchableOpacity>
        </View>
       

        <View style={styles.cartView}>
          <View style={styles.cartTextView}>
            <TextWrapper style={styles.cartTextStyle}>
              {props?.data?.name}
            </TextWrapper>
          </View>
          <TouchableOpacity
            onPress={handleAddToCart}
            style={styles.cartGreenView}>
            <Image
              source={icons.cartGreen}
              style={[
                styles.cartGreenStyle,
                { tintColor: theme.defaultBackgroundColor },
              ]}
            />
          </TouchableOpacity>
        </View>

        <WishlistContainer data={props?.data} />
      </View>
    );
  };

  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      {renderRecommended()}
    </ScrollWrapper>
  );
};
export default ProductsContainer;
