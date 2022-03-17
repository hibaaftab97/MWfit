import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const TextWrapper = props => {
  return (
    <Text
      numberOfLines={1}
      ellipsizeMode="tail"
      allowFontScaling={false}
      {...props}
      style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

export default TextWrapper;
