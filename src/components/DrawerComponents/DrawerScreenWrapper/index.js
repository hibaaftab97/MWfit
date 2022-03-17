import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {vh, vw} from '../../../units';
import styles from './styles';

const DrawerScreenWrapper = props => {
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 3],
    outputRange: [1, 0.4],
  });

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, -4 * vw],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 1 * vw],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};
  const animatedOuterStyle = {transform: [{scale}]};

  return (
    <Animated.View
      style={[
        animatedOuterStyle,
        styles.outerStyle,
        {transform: [{translateX}]},
      ]}>
      <Animated.View style={StyleSheet.flatten([styles.stack, animatedStyle])}>
        {props.children}
      </Animated.View>
    </Animated.View>
  );
};
export default DrawerScreenWrapper;
