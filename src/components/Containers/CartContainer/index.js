import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { generalImages, icons } from '../../../assets/images';
import { vh, vw } from '../../../units';
import TextWrapper from '../../TextWrapper';
import theme from '../../../utils/theme';

const CartContainer = (props) => {
  return (
    <TouchableOpacity style={styles.mainCardView}>
      <View style={styles.containerView}>
        <View style={styles.searchItemView}>
          <Image
            source={{ uri: props?.data?.images[0].src }}
            style={styles.searchedItemStyle}
          />
        </View>

        <View style={styles.amountView}>
          <View>
            <TextWrapper style={styles.itemNameTextStyle}>
              {props?.data?.name}
            </TextWrapper>
            <TextWrapper style={styles.categoryGenderTextStyle}>
              {props?.data?.categories[0]?.name}
            </TextWrapper>

            <TextWrapper style={styles.descriptionTextStyle}>
              Description
            </TextWrapper>

            <TextWrapper style={styles.textDescriptionView} numberOfLines={2}>
              {props?.data?.description}
            </TextWrapper>

            <View style={styles.mainButtonsView}>
              <TouchableOpacity style={styles.cartIconButtonView}>
                <Image
                  source={icons.cartGreen}
                  style={styles.cartGreenIconStyle}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.heartIconView}>
                <Image source={icons.heart} style={[styles.heartIconStyle, { tintColor: props?.filled ? 'red' : null }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.amountTextView}>
            <TextWrapper style={styles.amountTextStyle}>${props?.data?.price}</TextWrapper>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainCardView: {
    width: 100 * vw,
    height: 25 * vh,
    justifyContent: 'center',
    marginVertical: 1 * vh,
  },

  searchedItemStyle: {
    resizeMode: 'contain',
    height: 40 * vw,
    width: 40 * vw,
  },

  containerView: {
    flexDirection: 'row',
  },

  amountView: {
    flexDirection: 'row',
    width: 50 * vw,
    justifyContent: 'space-between',
    right: 2 * vw,
    marginTop: 1 * vh,
  },

  itemNameTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2 * vh,
  },

  categoryGenderTextStyle: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 2 * vh,
  },

  descriptionTextStyle: {
    fontFamily: Fonts.SFD,
    fontSize: 1.5 * vh,
    fontWeight: 'bold',
    marginTop: 0.5 * vh,
  },

  textDescriptionView: {
    width: 50 * vw,
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.5 * vh,
    marginTop: 1.5 * vh,
  },

  textStyle: {
    color: theme.defaultInactiveBorderColor,
  },

  amountTextStyle: {
    color: theme.defaultForgotPasswordColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
  },

  cartGreenIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  heartIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  mainButtonsView: {
    flexDirection: 'row',
    marginTop: 0.5 * vh,
  },

  heartIconView: {
    marginLeft: 2 * vw,
  },
});

export default CartContainer;
