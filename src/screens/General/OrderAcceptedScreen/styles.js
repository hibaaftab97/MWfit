import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: theme.defaultBackgroundColor
  },
  content: {
    alignItems: 'center',
  },

  searchView: {
    flexDirection: 'row',
    marginTop: 10 * vh,
    width: 80 * vw,
    justifyContent: 'space-between',
  },

  searchIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  searchIconButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MSW,
    fontSize: 2.8 * vh,
    color: theme.whiteBackground
  },

  orderImageStyle: {
    resizeMode: 'contain',
    height: 40 * vh,
    width: 70 * vw

  },

  mainView: {
    backgroundColor: theme.whiteBackground,
    width: 100 * vw,
    height: 100 * vh,
    marginTop: 4 * vh,
    borderTopRightRadius: 15 * vw

  },

  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6 * vh
  },

  descriptionView: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  orderAcceptedTextStyle: {
    fontFamily: Fonts.MEB,
    fontSize: 2.8 * vh,
    marginBottom: 2 * vh,
    marginTop: 2 * vh
  },

  orderNumberTextStyle: {
    fontSize: 2 * vh,
    fontFamily: Fonts.MR,
    color: theme.borderBottomDefaultColor,
    width: 50 * vw,
    textAlign: 'center',
    marginBottom: 4 * vh
  },

  titleView: {
    width: 40 * vw
  }



});
export default styles;
