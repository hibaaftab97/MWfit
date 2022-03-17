import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {icons} from '../../../assets/images';
import theme from '../../../utils/theme';
import TextWrapper from '../../TextWrapper';
import styles from './styles';

const CheckoutInput = props => {
  return (
    <View style={[styles.textInputView, props.customTextInputView]}>
      <TextWrapper style={styles.titleStyle}>{props.title}</TextWrapper>
      <View style={styles.textInputRow}>
        <TextInput
          placeholder={props.placeholdText}
          style={[styles.textInputStyle, props.customTextInputStyle]}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholderTextColor={theme.defaultInactiveBorderColor}
        />

        <Image
          source={props.credit ? icons.creditCard : null}
          style={styles.creditCardStyle}
        />
      </View>
    </View>
  );
};

export default CheckoutInput;
