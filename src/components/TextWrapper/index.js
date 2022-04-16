import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const TextWrapper = props => {
  return (
    <Text
      numberOfLines={props.noOflines&& props.noOflines}
      ellipsizeMode="tail"
      allowFontScaling={false}
      {...props}
      style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

export default TextWrapper;
