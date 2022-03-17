import {StyleSheet} from 'react-native';

import {vh, vw} from '../../../units/index';

import {Fonts} from '../../../assets/fonts/index';
import theme from '../../../utils/theme';

export default StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 1 * vh,
  },

  touchableTextView: {},

  textStyle: {
    color: theme.defaultBackgroundColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.MSB,
  },

  textAccountStyle: {
    color: theme.defaultBackgroundColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
  },

  backToTextStyle: {
    color: theme.defaultTextColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
  },
});
