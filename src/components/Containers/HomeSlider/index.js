import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {vh, vw} from '../../../units/index';
import TextWrapper from '../../TextWrapper';
import fonts, {Fonts} from '../../../assets/fonts';
import SubmitButton from '../../Buttons/SubmitButton';
import theme from '../../../utils/theme';
import LinearGradient from 'react-native-linear-gradient';

const HomeSlider = props => {
  // console.log(props?.data, 'sliderDataProps');
  return (
    <ImageBackground
      imageStyle={{borderRadius: 4 * vw}}
      // source={{uri: props?.data?.images}} //comment beta
      source={props?.data?.image}
      style={styles.imageBackgroundStyle}>
      {/* <LinearGradient
        colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.8)']}
        style={styles.linearGradient}> */}
        <View style={styles.sliderDescriptionView}>
          <View style={styles.sliderTextView}>
            {/* <TextWrapper style={styles.sliderTextStyle}>{props?.data?.description}</TextWrapper> */}

            <TextWrapper numberOfLines={3} style={styles.sliderMainTextHeading}>
              {props?.data?.description}
            </TextWrapper>
            <TextWrapper numberOfLines={3} style={styles.slidersecMainTextHeading}>
              {props?.data?.shortdes}
            </TextWrapper>

            <SubmitButton
              textStyle={styles.textStyleSubmitButton}
              title="Shop Now"
              style={styles.submitButtonView}
              onPress={props.onPress}
            />
          </View>
        </View>
      {/* </LinearGradient> */}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageBackgroundStyle: {
    height: 25 * vh,
    width: 90 * vw,
    resizeMode: 'contain',
    marginTop: 2 * vh,
  },

  sliderDescriptionView: {
    flexDirection: 'row',
    width: 80 * vw,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 1,
    marginBottom: 3 * vh,
    justifyContent: 'space-between',
  },

  rightArrowIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  sliderTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  touchableArrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  sliderTextStyle: {
    width: 70 * vw,
    fontSize: 2 * vh,
    color: '#fff',
    lineHeight: 3 * vh,
    fontFamily: Fonts.SFR,
    fontSize: 2.8 * vh,
  },

  sliderMainTextHeading: {
    width: 70 * vw,
    fontSize: 2 * vh,
    color: '#fff',
    // lineHeight: 3 * vh,
    fontFamily: Fonts.MR,
    // fontSize: 2.8 * vh,
  },
  slidersecMainTextHeading: {
    width: 70 * vw,
    fontSize: 5 * vh,
    color: '#fff',
    // lineHeight: 3 * vh,
    fontFamily: Fonts.MSB,
    // fontSize: 2.8 * vh,
  },
  collectionTextStyle: {
    width: 70 * vw,
    fontSize: 2 * vh,
    color: '#fff',
    lineHeight: 3 * vh,
    fontFamily: Fonts.SFD,
    fontSize: 1.8 * vh,
  },

  submitButtonView: {
    width: 28 * vw,
    height: 4 * vh,
    marginRight: 42 * vw,
    backgroundColor: theme.whiteBackground,
    borderRadius: 1 * vw,
    // marginTop: 1 * vh,
  },

  textStyleSubmitButton: {
    color: theme.defaultBackgroundColor,
    fontFamily:Fonts.MD,
    fontSize: 1.8 * vh,
  },

  linearGradient: {
    height: 25 * vh,
    width: 90 * vw,
    borderBottomLeftRadius: 4 * vw,
    borderBottomRightRadius: 4 * vw,
  },
});
export default HomeSlider;
