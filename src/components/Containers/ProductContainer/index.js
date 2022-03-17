import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {generalImages, icons} from '../../../assets/images';
import {vh, vw} from '../../../units';
import TextWrapper from '../../TextWrapper';
import theme from '../../../utils/theme';
import {useGetProductDetailsHook} from '../../../hooks/useGetProductDetailsHook';
import {useNavigation} from '@react-navigation/native';

const ProductContainer = props => {
  console.log(props.data.id, 'propsData');
  const navigation = useNavigation();
  const handleProductImages = () => {
    if (props.data.images == 'null') {
      return generalImages.placeholderImage;
    }
    return {uri: props?.data?.images[0]?.src};
  };

  const handleSingleDetails = () => {
    navigation.navigate('ProductDetailsScreen', {
      params: props?.data?.id,
    });
  };

  return (
    <TouchableOpacity onPress={handleSingleDetails} style={styles.mainCardView}>
      <View style={styles.containerView}>
        <View style={styles.searchItemView}>
          <Image
            source={handleProductImages()}
            style={styles.searchedItemStyle}
          />
        </View>

        <View style={styles.amountView}>
          <View>
            <TextWrapper style={styles.itemNameTextStyle}>
              {props.data.name}
            </TextWrapper>
            <TextWrapper style={styles.categoryGenderTextStyle}>
              {props.data.categories[0].name}
            </TextWrapper>
            <View style={styles.mainButtonsView}>
              <TouchableOpacity style={styles.cartIconButtonView}>
                <Image
                  source={icons.cartGreen}
                  style={styles.cartGreenIconStyle}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.heartIconView}>
                <Image source={icons.heart} style={styles.heartIconStyle} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.amountTextView}>
            <TextWrapper style={styles.amountTextStyle}>
              ${props?.data?.price}
            </TextWrapper>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainCardView: {
    height: 16 * vh,
    justifyContent: 'center',
    marginVertical: 1 * vh,
  },

  amountTextView: {
    alignItems: 'center',
  },

  searchedItemStyle: {
    resizeMode: 'contain',
    height: 15 * vh,
    width: 40 * vw,
  },

  containerView: {
    flexDirection: 'row',
  },

  amountView: {
    flexDirection: 'row',
    width: 50 * vw,
    justifyContent: 'space-between',
    marginTop: 2 * vh,
  },

  itemNameTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2 * vh,
    width: 30 * vw,
  },

  categoryGenderTextStyle: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 2 * vh,
    marginTop: 1 * vh,
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
    height: 4 * vh,
    width: 4 * vw,
  },

  heartIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  mainButtonsView: {
    flexDirection: 'row',
    marginTop: 0.5 * vh,
  },

  heartIconView: {
    marginLeft: 4 * vw,
  },
});

export default ProductContainer;
