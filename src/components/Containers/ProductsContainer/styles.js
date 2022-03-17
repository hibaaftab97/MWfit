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

  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  cartIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  filterIconStyle: {
    resizeMode: 'contain',
    height: 3.5 * vh,
    width: 3.5 * vw,
  },

  clothingStoreTextStyle: {
    color: theme.defaultTextColor,
    fontSize: 3 * vh,
    fontFamily: Fonts.MSW,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  mainHeaderContainer: {
    marginTop: 8 * vh,
    width: 90 * vw,
  },
  sliderView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  dotStylePagination: {
    width: 3 * vw,
    height: 3 * vw,
    borderRadius: 8,
    backgroundColor: theme.defaultForgotPasswordColor,
    marginHorizontal: -2 * vw,
    borderWidth: 0.5 * vw,
    borderColor: 'transparent',
  },

  inactiveDotStylePagination: {
    width: 16,
    height: 2.2 * vh,
    borderRadius: 8,
    backgroundColor: theme.defaultForgotPasswordColor,
    marginHorizontal: -2 * vw,
    borderColor: 'transparent',
  },

  containerStylePagination: {
    bottom: 15 * vh,
  },

  rowForCategories: {
    flexDirection: 'row',
    width: 85 * vw,
    justifyContent: 'space-between',
    marginBottom: 2 * vh,
    bottom: 28 * vh,
  },

  rowForMainCategories: {
    flexDirection: 'row',
    width: 85 * vw,
    justifyContent: 'space-between',
    marginBottom: 2 * vh,
    bottom: 12 * vh,
  },

  rowForArivalCategories: {
    flexDirection: 'row',
    width: 85 * vw,
    justifyContent: 'space-between',
    marginBottom: 2 * vh,
    bottom: 15 * vh,
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

  productImageStyle: {
    resizeMode: 'cover',
    height: 30 * vh,
    width: 40 * vw,
    right: 5 * vw,
    borderRadius: 4 * vw,
  },

  mainProductView: {
    marginHorizontal: 4 * vw,
    width: 35 * vw,
    marginTop: 2 * vh
  },

  cartGreenStyle: {
    resizeMode: 'contain',
    height: 2 * vh,
    width: 2 * vw,
  },

  cartView: {
    flexDirection: 'row',
    width: 35 * vw,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 2 * vh,
    marginRight: 2 * vw,
  },

  categoryCartView: {
    flexDirection: 'row',
    width: 40 * vw,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginRight: 8 * vw,
  },

  cartTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    right: 1 * vw,
  },

  cartGreenView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartTextStyle: {
    fontSize: 1.7 * vh,
    fontFamily: Fonts.SFR,
    width: 25 * vw
  },

  cartCategoryTextStyle: {
    color: theme.defaultAuthDescriptionColor,
    fontSize: 1.8 * vh,
    marginTop: 0.5 * vh,
  },

  cartGreenView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 6 * vw,
    height: 6 * vw,
    borderRadius: 6 * vw,
    borderWidth: 0.1,
  },

  amountTextStyle: {
    color: theme.defaultForgotPasswordColor,
    fontFamily: Fonts.MSW,
    fontSize: 2.5 * vh,
    marginLeft: 3 * vw,
    marginTop: 0.5 * vh,
    right: 8 * vw,
  },

  headerIconButton: {
    marginHorizontal: 1 * vw,
  },

  displayIconStyle: {
    resizeMode: 'cover',
    height: 10 * vh,
    width: 30 * vw,
    borderRadius: 2 * vw,
  },

  touchableButtonView: {
    marginHorizontal: 2 * vw,
    height: 10 * vh,
    width: 28 * vw,
    borderRadius: 2 * vw,
  },

  textStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.SFD,
    fontWeight: 'bold',
    fontSize: 1.8 * vh,
    position: 'absolute',
    top: 4 * vh,
    color: 'white',
  },

  purchasedProductsView: {height: 30 * vh, bottom: 25 * vh, width: 90 * vw},

  recommendedProductsView: {height: 45 * vh, bottom: 15 * vh, width: 90 * vw},

  drawerIconStyle: {
    resizeMode: 'center',
    height: 6 * vh,
    width: 6 * vw,
    borderRadius: 8 * vw,
  },
});
export default styles;
