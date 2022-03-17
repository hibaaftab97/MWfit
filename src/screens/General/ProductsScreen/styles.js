import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    alignItems: 'center',
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

  filterIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  searchIconButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 1 * vw,
  },

  searchTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MSW,
    fontSize: 2.8 * vh,
  },

  imageStyle: {
    resizeMode: 'contain',
    height: 25 * vh,
    width: 25 * vw,
  },

  mainSearchCategoriesView: {
    flexDirection: 'row',
    width: 90 * vw,
    justifyContent: 'space-around',
    height: 30 * vh,
  },

  categoryNameTextStyle: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 6 * vh,
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
  },

  rowForCategories: {
    flexDirection: 'row',
    width: 85 * vw,
    justifyContent: 'space-between',
    marginBottom: 2 * vh,
  },

  categoriesTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2 * vh,
  },

  categoriesTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewAllTextButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewAllTextButton: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.8 * vh,
  },

  listView: { width: 100 * vw },

  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5 * vh,
  },
});
export default styles;
