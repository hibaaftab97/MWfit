import React from 'react';
import {Text, View} from 'react-native';
import {vh, vw} from '../../units';
import theme from '../../utils/theme';
import TextWrapper from '../TextWrapper';

import styles from './styles';

const ItemsWithTotalWrapper = props => {
  // const 'red'st font = getFont();
  const renderTotalView = () => {
    return (
      <View
        style={[
          styles.totalAEDView,
          {width: props.noWidth === false ? null : 90 * vw},
        ]}>
        <View style={styles.textView}>
          <TextWrapper style={[styles.itemsTextStyle, {color: theme.defaultForgotPasswordColor}]}>
            {props.noOfItems} Items
          </TextWrapper>
        </View>

        <View>
          <TextWrapper style={styles.textStyleAED}>
            Total: $ {props.totalAmount}
          </TextWrapper>
        </View>
      </View>
    );
  };
  return <>{renderTotalView()}</>;
};

export default ItemsWithTotalWrapper;
