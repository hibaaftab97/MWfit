import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },

  searchView: {
    flexDirection: 'row',
    width: 100 * vw,
    height: 50 * vh,
    justifyContent: 'space-between',
    resizeMode: 'contain',
    backgroundColor: theme.defaultBackgroundColor,
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
    color: theme.whiteBackground,
    marginLeft: 5 * vw,
  },

  listView: {
    backgroundColor: theme.whiteBackground,
    height: 100 * vh,
    bottom: 30 * vh,
    borderTopRightRadius: 15 * vw,

  },

  searchRowContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: 80 * vw,
    justifyContent: 'space-between',
  },

  rowContainer: {
    flexDirection: 'row',
    width: 90 * vw,
    height: 25 * vh,
    marginLeft: 5 * vw,
  },

  listEmptyComponentView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2 * vh,
  },

  leftArrowIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  leftArrowIconButton: {
    justifyContent: 'center',
  },
});
export default styles;
