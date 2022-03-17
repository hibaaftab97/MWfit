import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { generalImages, icons } from '../../../assets/images';
import { vh, vw } from '../../../units';
import TextWrapper from '../../TextWrapper';
import theme from '../../../utils/theme';
import { useDeleteFromCartHook } from '../../../hooks/useDeleteFromCartHook';
import { useSelector } from 'react-redux';
import { useUpdateCartHook } from '../../../hooks/useUpdateCartHook';

const OrderItemsContainer = props => {
  const cartReducer = useSelector(state => state.cartReducer);
  const [removeCartItemState, removeFromCartFunc] = useDeleteFromCartHook();
  const [updateCartState, updateCartFunc] = useUpdateCartHook();
  const [amountValue, setAmountValue] = useState(props.data?.quantity ?? 1);

  const incrementValue = () => {
    const data = {
      id: props?.data?.product_id,
      quantity: amountValue + 1,
    };
    setAmountValue(amountValue + 1);
    updateCartFunc(data);
  };

  const decrementValue = () => {
    if (amountValue == 1) {
      setAmountValue(1);
      const data = {
        id: props?.data?.product_id,
        quantity: 1,
      };
      updateCartFunc(data);
    } else {
      const data = {
        id: props?.data?.product_id,
        quantity: amountValue - 1,
      };
      setAmountValue(amountValue - 1);
      updateCartFunc(data);
    }
  };

  const deleteCartItem = id => {
    removeFromCartFunc(id);
  };
  return (
    <View style={styles.mainCardView}>
      <View style={styles.containerView}>
        <View style={styles.searchItemView}>
          <Image
            source={{ uri: props?.data?.product_image }}
            style={styles.searchedItemStyle}
          />
        </View>

        <View style={styles.amountView}>
          <View style={{ width: 35 * vw }}>
            <TextWrapper style={styles.itemNameTextStyle}>
              {props.data?.product_name}
            </TextWrapper>
            <TextWrapper style={styles.categoryGenderTextStyle}>
              ${props?.data?.product_price}
            </TextWrapper>

            <View style={styles.amountValueView}>
              <TouchableOpacity
                onPress={incrementValue}
                style={styles.increaseAmountView}>
                <TextWrapper style={styles.icrementTextStyle}>+</TextWrapper>
              </TouchableOpacity>

              <View style={styles.valueView}>
                <TextWrapper style={styles.valueTextStyle}>
                  {/* {props.data?.quantity ? props.data?.quantity : amountValue} */}
                  {amountValue}
                </TextWrapper>
              </View>

              <TouchableOpacity
                onPress={decrementValue}
                style={styles.decreaseAmountView}>
                <TextWrapper style={styles.decrementTextStyle}>-</TextWrapper>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.amountTextView}>
            {/* <View style={styles.productAmountView}>
              <TextWrapper style={styles.amountTextStyle}>
                ${props?.data?.product_price}
              </TextWrapper>
            </View> */}

            <TouchableOpacity
              onPress={() => deleteCartItem(props?.data?.product_id)}
              style={styles.deleteButtonView}>
              <Image source={icons.delete} style={styles.deleteIconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCardView: {
    height: 16 * vh,
    justifyContent: 'center',
    marginTop: 3 * vh,
  },

  amountTextView: {
    alignItems: 'center',
    marginLeft: 5 * vw,
  },

  searchedItemStyle: {
    resizeMode: 'center',
    height: 15 * vh,
    width: 35 * vw,
    borderRadius: 6 * vw,
  },

  containerView: {
    flexDirection: 'row',
  },

  amountView: {
    flexDirection: 'row',
    width: 60 * vw,
    justifyContent: 'space-between',
    marginTop: 2 * vh,
    marginLeft: 2 * vw
  },

  itemNameTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2 * vh,
  },

  categoryGenderTextStyle: {
    color: theme.activeTextInputColor,
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

  amountValueView: {
    backgroundColor: 'lightgray',
    width: 25 * vw,
    height: 4 * vh,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 1 * vh,
  },

  increaseAmountView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  valueView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  valueTextStyle: {
    fontSize: 2.2 * vh,
  },

  decreaseAmountView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },
  decrementTextStyle: {
    fontSize: 2.5 * vh,
  },

  deleteIconStyle: {
    resizeMode: 'contain',
    height: 12 * vw,
    width: 12 * vw,
  },

  deleteButtonView: {
    top: 2 * vh,
    marginRight: 8 * vw,
  },

  searchItemView: {
    marginLeft: 5 * vw
  },
});

export default OrderItemsContainer;
