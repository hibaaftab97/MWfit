import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../units/index';
import { Fonts } from '../../../assets/fonts';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
  searchView: {
    // flexDirection: 'row',
    width: 100 * vw,
    height: 50 * vh,
    justifyContent: 'space-between',
    resizeMode: 'contain',
  },

  rowContainer: {
    flexDirection: 'row',
    width: 90 * vw,
    height: 50 * vw,
    justifyContent: 'space-between',
    marginLeft: 5 * vw,
  },

  searchTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MSW,
    fontSize: 2.8 * vh,
    color: theme.whiteBackground,
  },

  searchIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIconButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  rightArrowIconView: {
    justifyContent: 'center',
  },

  leftArrowIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  productNameView: {
    bottom: 20 * vh,
    width: 90 * vw,
    marginLeft: 5 * vw,
    height: 8 * vh,
  },

  productNameTextStyle: {
    fontSize: 3.5 * vh,
    fontFamily: Fonts.MSW,
    color: theme.whiteBackground,
  },

  productPriceTextStyle: {
    color: theme.whiteBackground,
    fontSize: 2.8 * vh,
  },
});
