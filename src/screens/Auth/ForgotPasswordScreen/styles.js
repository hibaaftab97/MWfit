import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },

  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5 * vh,
    marginBottom: 3 * vh,
  },

  logoStyle: {
    resizeMode: 'contain',
    height: 40 * vw,
    width: 40 * vw,
  },

  fieldContainer: {
    backgroundColor: theme.whiteBackground,
    height: 100 * vh,
    width: 100 * vw,
    borderTopRightRadius: 15 * vw,
  },

  miniContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80 * vw,
    alignSelf: 'center',
  },

  welcomeDescriptionText: {
    width: 80 * vw,
    fontSize:1.7*vh,
    lineHeight:2.5*vh,
       marginTop: 1 * vh,
       color: theme.defaultAuthDescriptionColor,
  },

  welcomeBackTextStyle: {
    fontSize: 3 * vh,
    width:80*vw,
    marginTop: 2.5 * vh,
    fontFamily: Fonts.MEB,
  },

  fieldsView: {
    marginTop: 2 * vh,
  },

  checkIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  mainRow: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
    marginTop: 2 * vh,
  },

  checkButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rememberTextStyle: {
    fontSize: 1.8 * vh,
    alignSelf: 'center',
    position: 'absolute',
    marginLeft: 6 * vw,
    fontFamily: Fonts.SFR,
  },

  forgotPasswordButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPasswordTextStyle: {
    color: theme.defaultForgotPasswordColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
  },

  submitButtonStyle: {
    width: 40 * vw,
    marginTop: 5 * vh,
  },

  titleTextStyle: {
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFD,
  },

  socialView: {
    marginTop: 1 * vh,
  },

  loaderView: {
    borderWidth: 0.1 * vw,
    width: 17 * vw,
    borderRadius: 4 * vw,
    borderColor: 'transparent',
    backgroundColor: 'rgba(240,169,213,0.24)',
    height: 0.8 * vh,
    alignSelf: 'center',
    marginTop: 0.5 * vh,
    marginBottom: 2 * vh,
    right: 33 * vw,
  },

  subLoaderView: {
    height: 0.5 * vh,
    backgroundColor: theme.activeTextInputColor,
    // width: 29 * vw,
    borderRadius: 4 * vw,
    marginTop: 0.1 * vh,
    marginLeft: 0.2 * vw,
  },

  textStyle: {
    fontSize: 1.8 * vh,
    marginTop: 4 * vh,
    fontFamily:Fonts.MD,
    width: 80 * vw,
  },
});
export default styles;
