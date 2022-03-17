import {StyleSheet} from 'react-native';
// import {Fonts} from '../../../assets/fonts/index';
import theme from '../../../utils/theme';
import {vw, vh} from '../../../units/index';

export default style = StyleSheet.create({
  touchableButtonStyle: {
    width: 90 * vw,
    backgroundColor: theme.defaultBackgroundColor,
    // borderRadius: 8 * vw,
    height: 7 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // borderRadius: 1 * vw,
  },

  titleTextStyle: {
    // fontFamily: Fonts.PM,
    color: theme.whiteBackground,
    fontSize: 2 * vh,
  },
});
