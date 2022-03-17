import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import TextWrapper from '../TextWrapper';
import theme from '../../utils/theme';

const CheckoutItems = props => {
  console.log(props?.data, 'orderDetailsHere');
  return (
    <View
      style={[
        styles.mainFooterView,
        {borderColor: theme.defaultForgotPasswordColor},
      ]}>
      <View style={styles.subFooterView}>
        {props.data?.image ? (
          <Image
            style={styles.productImageView}
            source={{uri: props.data?.image}}
          />
        ) : null}
        <View style={styles.descriptionView}>
          <View style={styles.productNameWithCrossIconView}>
            <TextWrapper numberOfLines={3} style={styles.productNameTextStyle}>
              {props.data?.name}
            </TextWrapper>
          </View>
          <View style={styles.colorWithNameView}>
            <TextWrapper style={styles.textStyle}>
              Quantity: {props.data?.quantity}
            </TextWrapper>
            <TextWrapper style={styles.textStyle}>
              Unit Price: $ {props.data?.price}
            </TextWrapper>
          </View>
          <TextWrapper
            style={[
              styles.amountTextStyle,
              {color: theme.defaultForgotPasswordColor},
            ]}>
            {/* ${Math.floor(props.data?.price * props.data?.quantity).toFixed(2)} */}
            ${props?.data?.subtotal}
          </TextWrapper>
        </View>
      </View>
    </View>
  );
};
export default CheckoutItems;
