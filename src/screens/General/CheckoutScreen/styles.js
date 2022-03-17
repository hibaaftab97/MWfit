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
  },

  checkedStyle: {
    resizeMode: 'contain',
    height: 6 * vh,
    width: 6 * vw,
  },

  shippingCheckedCircleStyle: {
    resizeMode: 'contain',
    height: 6 * vh,
    width: 6 * vw,
    right: 4 * vw,
    top: 0.5 * vh,
  },

  billingAlertTextStyle: {
    fontFamily: Fonts.SFR,
    fontSize: 1.7 * vh,
  },

  billingContainer: {
    flexDirection: 'row',
    width: 85 * vw,
    marginLeft: 5 * vw,
  },

  checkedView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  billingAlertView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3 * vw,
  },

  stateCountryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  customTextInputView: {
    width: 38 * vw,
  },

  customTextInputStyle: {
    width: 30 * vw,
  },

  buttonsView: {
    flexDirection: 'row',
    marginTop: 5 * vh,
    width: 90 * vw,
    justifyContent: 'space-around',
    marginBottom: 10 * vh,
  },

  backButtonStyle: {
    width: 40 * vw,
    backgroundColor: theme.whiteBackground,
    borderColor: theme.defaultTextColor,
    borderWidth: 1,
  },

  nextButtonStyle: {
    width: 40 * vw,
  },

  textStykeBackButton: {
    color: theme.defaultTextColor,
  },

  summaryTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MSW,
    fontSize: 2 * vh,
    width: 80 * vw,
  },

  dressImageStyle: {
    height: 20 * vh,
    width: 30 * vw,
    resizeMode: 'contain',
  },

  summaryView: {},

  itemsView: {
    marginTop: 2 * vh,
    height: 25 * vh,
    marginHorizontal: 2 * vw,
  },

  amountTextStyle: {
    fontSize: 2 * vh,
    fontFamily: Fonts.SFD,
    color: theme.defaultForgotPasswordColor,
  },

  dressNameStyle: {
    fontSize: 2 * vh,
    fontFamily: Fonts.SFD,
    marginTop: 1.5 * vh,
    width: 30 * vw,
  },

  miniItemView: {},

  shippingAddressHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1 * vh,
  },

  shippingAddressHeadingTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MSW,
    fontSize: 2 * vh,
  },

  shippingCostTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.SFR,
    fontSize: 1.8 * vh,
    marginRight: 1.5 * vh,
  },

  textDescriptionStyle: {
    color: theme.defaultInactiveBorderColor,
    width: 80 * vw,
    fontSize: 2 * vh,
  },

  cardNumberTextStyle: {
    color: theme.defaultTextColor,
    width: 80 * vw,
    fontSize: 2 * vh,
  },

  masterCardTextStyle: {
    color: theme.borderBottomDefaultColor,
    width: 80 * vw,
    fontSize: 1.9 * vh,
  },

  changeButtonView: {
    marginTop: 2 * vh,
  },

  changeTextStyle: {
    color: theme.defaultForgotPasswordColor,
    fontSize: 1.8 * vh,
  },

  mainCardDetailsView: {
    height: 20 * vh,
    borderBottomWidth: 1,
    borderBottomColor: theme.borderBottomDefaultColor,
  },

  mainPaymentView: {
    height: 15 * vh,
    borderBottomColor: theme.borderBottomDefaultColor,
    width: 80 * vw,
    marginTop: 3 * vh,
  },

  paymentDetailsView: {
    flexDirection: 'row',
    width: 80 * vw,
  },

  creditCardStyle: {
    resizeMode: 'contain',
    height: 14 * vw,
    width: 14 * vw,
  },

  cardImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2 * vw,
    marginTop: 1 * vh,
  },

  checkView: {
    justifyContent: 'center',
    alignItems: 'center',
    right: 25 * vw,
  },

  stepsImageStyle: {
    resizeMode: 'contain',
    height: 14 * vw,
    width: 100 * vw,
  },

  stepsView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80 * vw,
    marginTop: 2 * vh,
    marginBottom: 3 * vh,
  },

  cardsView: {
    flexDirection: 'row',
    width: 90 * vw,

    justifyContent: 'space-between',
  },

  cardButtonView: {
    width: 32 * vw,
    height: 10 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.borderBottomDefaultColor,
    // borderRadius: 1 * vw,
    // marginLeft: 28 * vw,
  },

  cardPayButtonView: {
    width: 32 * vw,
    height: 10 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.borderBottomDefaultColor,
    // borderRadius: 1 * vw,
    // marginLeft: 28 * vw,
  },

  cardIconView: {
    height: 5 * vw,
    width: 5 * vw,
    tintColor: theme.borderBottomDefaultColor,
  },

  cartItemsListStyle: {
    marginRight: 5 * vw,
    height: 30 * vh,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.borderBottomDefaultColor,
    width: 80 * vw,
  },
});
export default styles;
