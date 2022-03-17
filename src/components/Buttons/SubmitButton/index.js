import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import TextWrapper from '../../TextWrapper';
import styles from './styles';

const SubmitButton = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled ? props.disabled : false}
      style={[styles.touchableButtonStyle, props.style]}
      onPress={props.onPress}>
      <TextWrapper style={[styles.titleTextStyle, props.textStyle]}>
        {props.title}
      </TextWrapper>
    </TouchableOpacity>
  );
};

export default SubmitButton;
