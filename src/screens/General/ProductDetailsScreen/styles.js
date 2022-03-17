import { Platform, StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },

  searchView: {
    flexDirection: 'row',
    marginTop: 10 * vh,
    width: 90 * vw,
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
    color: theme.whiteBackground,
    marginRight: 20 * vw,
  },

  productDetailsStyle: {
    resizeMode: 'contain',
    height: 30 * vh,
    width: 90 * vw,
  },

  productImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  productNameViewWithAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productNameTextStyle: {
    fontSize: 3 * vh,
    fontFamily: Fonts.MSW,
    color: theme.whiteBackground,
  },

  productPriceTextStyle: {
    color: theme.whiteBackground,
    fontSize: 2.8 * vh,
  },

  productAmountTextStyle: {
    fontFamily: Fonts.SFR,
    fontSize: 2.4 * vh,
  },

  productDetailsView: {
    width: 90 * vw,
  },

  buttonView: {
    flexDirection: 'row',
    width: 40 * vw,
    height: 6 * vh,
    justifyContent: 'space-around',
    borderWidth: 2,
    alignItems: 'center',
    borderColor: '#EBEBEB',
    borderRadius: 1 * vw,
  },

  mainButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4 * vh,
    width: 90 * vw,
    alignSelf: 'center',
    height: 20 * vh,
  },

  colorView: {
    backgroundColor: theme.defaultTextColor,
    height: 5 * vw,
    width: 5 * vw,
    borderRadius: 4 * vw,
  },

  mainDescriptionContainer: {
    marginTop: 4 * vh,
    width: 100 * vw,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
  },

  descriptionTextStyle: {
    fontSize: 1.7 * vh,
    fontFamily: Fonts.SFD,
    fontWeight: 'bold',
    marginBottom: 1 * vh,
  },

  descriptionView: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.8 * vh,
  },

  addToCartButtonMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4 * vh,
  },

  cartButton: {
    width: 100 * vw,
    height: 8 * vh,
    borderTopRightRadius: 8 * vw,
    borderTopLeftRadius: 8 * vw,
    backgroundColor: theme.activeTextInputColor,
  },

  amountValueView: {
    backgroundColor: 'lightgray',
    width: 30 * vw,
    height: 5 * vh,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5 * vh,
    borderRadius: 2 * vw,
  },

  increaseAmountView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  decreaseAmountView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  valueView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  icrementTextStyle: {
    fontSize: 2.5 * vh,
  },

  valueTextStyle: {
    fontSize: 2.2 * vh,
  },
  decrementTextStyle: {
    fontSize: 2.5 * vh,
  },

  mayAlsoLikeTextStyle: {
    fontFamily: Fonts.SFR,
    fontSize: 1.5 * vh,
    fontWeight: 'bold',
    marginBottom: 2 * vh,
  },

  recommendedProductsView: {
    marginTop: 3 * vh,
  },

  reviewsTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 1.6 * vh,
  },

  writeYoursTextStyle: {
    color: '#A3A3A3',
    fontSize: 1.6 * vh,
  },

  reviewsContainer: {
    flex: 1,
    width: 100 * vw,
    alignSelf: 'center',
  },

  writeYoursButtonView: {
    marginTop: 2 * vh,
    marginBottom: 1 * vh,
    justifyContent: 'center',
    width: 80 * vw,
  },

  postReviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  postView: {
    justifyContent: 'center',
    marginTop: 1 * vh,
  },

  //

  mainProductsContainerView: {
    backgroundColor: theme.whiteBackground,
    width: 100 * vw,
    height: Platform.OS == 'android' ? 75 * vh : 68 * vh,
    borderTopRightRadius: 15 * vw,
  },

  mainTabsView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60 * vw,
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: 5 * vh,
  },

  detailsTabView: {
    width: 28 * vw,
    height: 5 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.defaultAuthDescriptionColor,
    borderRadius: 1 * vw,
  },

  reviewsTabView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28 * vw,
    height: 5 * vh,
    borderRadius: 1 * vw,
  },

  detailsTextStyle: {
    fontSize: 1.8 * vh,
  },

  reviewsTabTextStyle: {
    fontSize: 1.8 * vh,
  },

  variationValueTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 1.8 * vh,
  },

  variationTextStyle: {
    fontSize: 2 * vh,
  },

  productNameView: {
    marginTop: 5 * vh,
    marginBottom: 4 * vh,
    width: 90 * vw,
  },

  cartButtonView: {
    position: 'absolute',
    bottom: 0,
  },

  continueShoppingView: {
    //  marginTop: 12 * vh
  },

  rightArrowIconView: {
    justifyContent: 'center',
  },

  leftArrowIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },
});
export default styles;
