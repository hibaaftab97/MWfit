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
    height: 8 * vh,
    width: 8 * vw,
  },

  billingAlertTextStyle: {
    fontFamily: Fonts.SFR,
    fontSize: 1.7 * vh
  },

  billingContainer: {
    flexDirection: 'row',
  },

  checkedView: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  billingAlertView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3 * vw
  },

  stateCountryView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  customTextInputView: {
    width: 38 * vw
  },

  customTextInputStyle: {
    width: 30 * vw
  },

  buttonsView: {
    flexDirection: 'row',
    marginTop: 5 * vh,
    width: 90 * vw,
    justifyContent: 'space-around'
  },

  backButtonStyle: {
    width: 40 * vw,
    backgroundColor: theme.whiteBackground,
    borderColor: theme.defaultTextColor,
    borderWidth: 1
  },

  nextButtonStyle: {
    width: 40 * vw
  },

  textStykeBackButton: {
    color: theme.defaultTextColor
  },

  summaryTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MSW,
    fontSize: 2 * vh,
    width: 80 * vw
  },

  dressImageStyle: {
    height: 35 * vw,
    width: 35 * vw,
    resizeMode: 'contain'
  },

  summaryView: {
  },

  itemsView: {
    marginTop: 2 * vh,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: theme.borderBottomDefaultColor,
    height: 25 * vh

  },

  amountTextStyle: {
    fontSize: 2 * vh,
    fontFamily: Fonts.SFD,
    color: theme.defaultForgotPasswordColor
  },

  dressNameStyle: {
    fontSize: 2 * vh,
    fontFamily: Fonts.SFD,
    marginTop: 1.5 * vh
  },

  miniItemView: {
  },

  shippingAddressHeadingView: {
    flexDirection: 'row',

    justifyContent: 'space-between'
  },

  shippingAddressHeadingTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MSW,
    fontSize: 2 * vh
  },

  textDescriptionStyle: {
    color: theme.defaultInactiveBorderColor,
    width: 80 * vw,
    fontSize: 2 * vh
  },

  cardNumberTextStyle: {
    color: theme.defaultTextColor,
    width: 80 * vw,
    fontSize: 2 * vh
  },

  masterCardTextStyle: {
    color: theme.borderBottomDefaultColor,
    width: 80 * vw,
    fontSize: 1.9 * vh
  },

  changeButtonView: {
    marginTop: 2 * vh
  },

  changeTextStyle: {
    color: theme.defaultForgotPasswordColor,
    fontSize: 1.8 * vh
  },

  mainCardDetailsView: {
    height: 20 * vh,
    borderBottomWidth: 1,
    borderBottomColor: theme.borderBottomDefaultColor

  },

  mainPaymentView: {
    height: 15 * vh,
    borderBottomColor: theme.borderBottomDefaultColor,
    width: 80 * vw,
    marginTop: 3 * vh
  },

  paymentDetailsView: {
    flexDirection: 'row',
    width: 80 * vw,
  },

  creditCardStyle: {
    resizeMode: 'contain',
    height: 14 * vw, width: 14 * vw,
  },

  cardImageView: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2 * vw,
    marginTop: 1 * vh

  },

  checkView: {
    justifyContent: 'center',
    alignItems: 'center',
    right: 25 * vw
  },

  stepsImageStyle: {
    resizeMode: 'contain',
    height: 14 * vw,
    width: 100 * vw
  },

  stepsView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80 * vw,
    marginTop: 2 * vh,
    marginBottom: 3 * vh
  },

  cardsView: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between'
  },

  cardButtonView: {
    width: 25 * vw,
    height: 7 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.borderBottomDefaultColor,
    borderRadius: 8 * vw
  },

  cardIconView: {
    height: 4 * vw,
    width: 4 * vw
  },

  cardViewStyle: {
    height: (90 * vw) / 2.01,
    width: 85 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    marginTop: 4 * vh,
    // backgroundColor: "red",
    resizeMode: "cover"
  },

  cardCodeView: {
    width: 80 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8 * vh,
    top: 5 * vh
  },

  codeTextStyle: {
    fontFamily: Fonts.SFR,
    fontWeight: 'bold',
    color: theme.whiteBackground,
    fontSize: 2.2 * vh
  },

  cardHoldersDetailsView: {
    flexDirection: 'row',
    width: 70 * vw,
    justifyContent: 'space-between',
  },

  cardHoldersNameView: {
    justifyContent: 'center',
  },

  cardExpirtyView: {
    justifyContent: 'center',
  },

  cardHoldersNameTextStyle: {
    fontFamily: Fonts.SFR,
    fontSize: 1.5 * vh,
    color: theme.whiteBackground
  },

  cardExpiryTextStyle: {
    fontFamily: Fonts.SFR,
    fontSize: 1.5 * vh,
    color: theme.whiteBackground
  },


  cardsNameTextStyle: {
    fontSize: 2 * vh,
    fontFamily: Fonts.SFD,
    lineHeight: 4 * vh,
    color: theme.whiteBackground

  },

  cardExpirtyDateText: {
    fontSize: 2 * vh,
    fontFamily: Fonts.SFD,
    lineHeight: 4 * vh,
    color: theme.whiteBackground
  }



});
export default styles;
