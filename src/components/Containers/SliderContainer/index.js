import React from 'react';
import {ImageBackground, StyleSheet, Image, View} from 'react-native';
import {generalImages} from '../../../assets/images';
import {vh, vw} from '../../../units';

const SliderContainer = props => {
  return (
    <ImageBackground
      source={props.data.image}
      style={styles.imageBackgroundStyle}></ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageBackgroundStyle: {
    height: 100 * vh,
    width: 100 * vw,
    resizeMode: 'contain',
  },
});
export default SliderContainer;
