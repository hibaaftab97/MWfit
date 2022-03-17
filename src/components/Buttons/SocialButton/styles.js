import {StyleSheet} from 'react-native';
// import {Fonts} from '../../../assets/fonts/index';
import theme from '../../../utils/theme';
import {vw, vh} from '../../../units/index';

export default style = StyleSheet.create({
  mainSocialButtonsView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  iconStyle: {
    resizeMode: 'contain',
    height: 10 * vh,
    width: 10 * vw,
  },

  buttonView: {
    marginLeft: 2 * vw,
  },
});
