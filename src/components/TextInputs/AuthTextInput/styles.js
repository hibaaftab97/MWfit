import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../units/index';
// import {Fonts} from '../../../assets/fonts';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
  textInputView: {
    width: 80 * vw,
    height: 8 * vh,
    borderColor: "rgba(12,13,52,0.08)",
    borderWidth: 0.2 * vw,
    flexDirection: 'row',
    borderRadius: 1 * vw,
    marginTop: 2 * vh,
  },

  customStyle: {
    width: 80 * vw,
    height: 8 * vh,
    borderColor: theme.activeTextInputColor,
    borderWidth: 0.1 * vw,
    flexDirection: 'row',
    borderRadius: 1 * vw,
    marginTop: 2 * vh,
  },

  textInputStyle: {
    marginLeft: 2 * vw,
    color: theme.defaultTextColor,
    width: 66 * vw,
  },

  emailStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  emailIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4 * vw,
  },
});
