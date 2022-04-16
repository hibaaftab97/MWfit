import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  ScrollView,
} from 'react-native';
import { icons } from '../../../assets/images';

import TextWrapper from '../../../components/TextWrapper';

import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import ReviewsContainer from '../../../components/Containers/ReviewsContainer';
import { useGetProductDetailsHook } from '../../../hooks/useGetProductDetailsHook';
import { useRelatedProductsHook } from '../../../hooks/useRelatedProductsHook';
import { useAddToCartHook } from '../../../hooks/useAddToCartHook';
import { useAddWishlistHook } from '../../../hooks/useAddWishlistHook';
import { useRemoveFromWishlistHook } from '../../../hooks/useRemoveFromWishlistHook';
import RenderHtml from 'react-native-render-html';

import MainContainer from '../../../components/Containers/MainContainer';

import { useSelector } from 'react-redux';
import { vh, vw } from '../../../units';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';

const ProductDetailsScreen = props => {
  //Hooks
  const [productDetails, productDetailsFunc] = useGetProductDetailsHook();
  const [listRelatedProducts, listRelatedProductsFunc] =
    useRelatedProductsHook();
  const [cartState, addToCartFunc] = useAddToCartHook();

  const [wishlistState, wishlistFunc] = useAddWishlistHook();
  const [removeWishlistState, removeWishListFunc] = useRemoveFromWishlistHook();
  const [wishlistadded, setWishlistAdded] = useState(false);
  const [defaultTab, setDefaultTab] = useState(false);
  const wishlistItems = useSelector(
    state => state.wishlistReducer.wishlistItems,
  );

  console.log(productDetails, 'productDetails');

  useFocusEffect(
    useCallback(() => {
      productDetailsFunc(props?.route?.params?.params);
    }, [props.route.params]),
  );

  useEffect(() => {
    listRelatedProductsFunc(productDetails?.related_ids);
    wishlistFilled();
  }, []);

  const handleTabs = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setDefaultTab(!defaultTab);
  };

  const handleAddToCart = () => {
    const data = {
      itemId: props?.route?.params?.params,
      itemName: productDetails?.name,
      itemPrice: productDetails?.price * amountValue,
      itemQuantity: amountValue,
      itemImage: productDetails?.images[0]?.src,
    };
    addToCartFunc(data);
  };

  const [amountValue, setAmountValue] = useState(1);
  const incrementValue = () => {
    setAmountValue(amountValue + 1);
  };

  const decrementValue = () => {
    if (amountValue == 1) {
      setAmountValue(1);
    } else {
      setAmountValue(amountValue - 1);
    }
  };

  const wishlistFilled = () => {
    let WishListindex = wishlistItems.findIndex(
      x => x == props?.route?.params?.params,
    );
    if (WishListindex > -1) {
      setWishlistAdded(true);
      return true;
    } else {
      setWishlistAdded(false);
      return false;
    }
  };
  const handleWishlist = () => {
    if (wishlistadded) {
      removeWishListFunc(props?.route?.params?.params);
      setWishlistAdded(false);
    } else {
      wishlistFunc(productDetails);
      setWishlistAdded(true);
    }
  };

  const renderSearchHeader = () => {
    // source={{uri: productDetails?.images[0]?.src}}

    return (
      <View style={{ marginLeft: 4 * vw }}>
        <View style={styles.searchView}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.rightArrowIconView}>
            <Image source={icons.leftArrow} style={styles.leftArrowIconStyle} />
          </TouchableOpacity>
          <TextWrapper style={styles.searchTextStyle}>
            Product Details
          </TextWrapper>

          <View style={styles.searchIconsView}>
            <TouchableOpacity
              onPress={() => handleWishlist()}
              style={styles.searchIconButtonView}>
              <Image
                style={[
                  styles.searchIconStyle,
                  { tintColor: wishlistadded ? 'red' : theme.whiteBackground },
                ]}
                source={icons.heart}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.productNameView}>
          <TextWrapper numberOfLines={2} style={styles.productNameTextStyle}>
            {productDetails?.name}
         
          </TextWrapper>
          <TextWrapper style={styles.productPriceTextStyle}>
            ${productDetails?.price}
          
          </TextWrapper>
        </View>
      </View>
    );
  };

  const renderReviews = () => {
    return (
      <View style={styles.reviewsContainer}>
        <ReviewsContainer productId={props?.route?.params?.params} />
        <View style={styles.continueShoppingView}>
          <SubmitButton
            onPress={() => props.navigation.navigate('HomeScreen')}
            title="Continue Shopping"
            style={styles.cartButton}
          />
        </View>
        {/* <TextWrapper style={styles.ingredienttext}>
         
          INGREDIENTS
        </TextWrapper>
        <TextWrapper style={styles.ingredienttext}>
       
          INGREDIENTS
          MORINGA (Moringa oleífera) and NEEM (Azadirachta indica). Ingredients imported from india.
          Other ingredients: Gelatin
        </TextWrapper> */}
      </View>
    );
  };

  const renderTabDetails = () => {
    if (!defaultTab) {
      return (
        <>
          
          {/* {renderVariationsButtons()} */}
          
          {renderDetailsContent()}
          {renderAddToCart()}
        </>
      );
    } else {
      return (
        <>
          {renderAddToCart()}
          {renderReviews()}
        </>
      )



    }
  };

  const renderProductDetailsContainer = () => {
    return (
      <ScrollWrapper avoidKeyboard={true} showsVerticalScrollIndicator={false} style={styles.mainProductsContainerView}>
        {renderCounter()}
        {renderTabs()}
        {renderTabDetails()}
      </ScrollWrapper>
    );
  };

  const renderCounter = () => {
    return (
      <View style={styles.amountValueView}>
        <TouchableOpacity
          onPress={incrementValue}
          style={styles.increaseAmountView}>
          <TextWrapper style={styles.icrementTextStyle}>+</TextWrapper>
        </TouchableOpacity>

        <View style={styles.valueView}>
          <TextWrapper style={styles.valueTextStyle}>{amountValue}</TextWrapper>
        </View>

        <TouchableOpacity
          onPress={decrementValue}
          style={styles.decreaseAmountView}>
          <TextWrapper style={styles.decrementTextStyle}>-</TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <View style={styles.mainTabsView}>
        <TouchableOpacity
          onPress={handleTabs}
          style={[
            styles.detailsTabView,
            { borderWidth: !defaultTab ? 0.1 * vw : null },
          ]}>
          <TextWrapper
            style={[
              styles.detailsTextStyle,
              {
                color: defaultTab
                  ? theme.defaultInactiveBorderColor
                  : theme.defaultBackgroundColor,
              },
            ]}>
            Details
          </TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleTabs}
          style={[
            styles.reviewsTabView,
            {
              borderWidth: defaultTab ? 0.1 * vw : null,
            },
          ]}>
          <TextWrapper
            style={[
              styles.reviewsTabTextStyle,
              {
                color: !defaultTab
                  ? theme.defaultInactiveBorderColor
                  : theme.defaultBackgroundColor,
              },
            ]}>
            Reviews
          </TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const source = {
    html: productDetails?.description,
  };
  const renderDetailsContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        style={styles.mainDescriptionContainer}>
           <TextWrapper style={styles.descriptionView} numberOfLines={3}>
          {/* {productDetails?.description} */}
          <RenderHtml
            baseStyle={{ width: 70 * vw }}
            contentWidth={70 * vw}
            source={source}
          />
        </TextWrapper>
       
      </ScrollView>
    );
  };

  const renderVariationsButtons = () => {
    return (
      <View style={styles.mainButtonsContainer}>
        <TouchableOpacity style={styles.buttonView}>
          <TextWrapper style={styles.variationTextStyle}>Size</TextWrapper>
          <TextWrapper style={styles.variationValueTextStyle}>M</TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonView}>
          <TextWrapper style={styles.variationTextStyle}>Colour</TextWrapper>
          <TextWrapper style={styles.variationValueTextStyle}>
            Black
          </TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const renderAddToCart = () => {
    return (
      <View style={styles.cartButtonView}>
        <SubmitButton
          onPress={handleAddToCart}
          title="Add To Cart"
          style={styles.cartButton}
        />
    </View>
    );
  };

  return (
    <MainContainer style={styles.content}>
      {/* <ScrollWrapper > */}
      {renderSearchHeader()}
      {renderProductDetailsContainer()}
      {/* </ScrollWrapper> */}

    </MainContainer>
  );
};
export default ProductDetailsScreen;
