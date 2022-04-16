import { StyleSheet } from 'react-native';
import fonts, { Fonts } from '../../../assets/fonts';
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
    // width: 100 * vw,
    justifyContent: 'space-between',
    resizeMode: 'contain',
    height: 20 * vh,
  },

  searchIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 5 * vw,
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  searchIconButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 5 * vw,
  },

  searchTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MB,
    fontSize: 2.8 * vh,
    color: theme.whiteBackground,
    marginRight: 10 * vw,
  },

  listView: {
    backgroundColor: theme.whiteBackground,
    height: 100 * vh,
    bottom: 75 * vh,
    borderTopRightRadius: 15 * vw,
    width: 100 * vw,
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
    justifyContent: 'space-between',
    marginLeft: 5 * vw,
  },

  orderDetails: {
    width: 90 * vw,
    height: 5 * vh,
    marginLeft: 8 * vw
    // position: 'absolute',
    // top: 18 * vh,
  },

  yourOrderTextStyle: {
    fontSize: 2 * vh,
    fontFamily: Fonts.MSW,
    color: theme.whiteBackground,
  },

  orderNumberTextStyle: {
    fontSize: 2.2 * vh,
    fontFamily: Fonts.SFR,
    color: theme.whiteBackground,
  },

  applyButtonView: {
    width: 25 * vw,
    backgroundColor: theme.defaultBackgroundColor,
    right: 5 * vw,
    borderRadius: 0,
  },

  textInputStyle: {
    marginLeft: 4 * vw,
    width: 55 * vw,
    fontFamily:Fonts.MR,
    color: theme.defaultBackgroundColor,
  },

  mainVoucherContainer: {
    flexDirection: 'row',
    width: 80 * vw,
    alignSelf: 'center',
    borderWidth: 0.5 * vw,
    justifyContent: 'space-between',
    marginTop: 5 * vh,
  },

  checkoutButton: {
  
      width: 100 * vw,
      height: 8 * vh,
      borderTopRightRadius: 8 * vw,
      borderTopLeftRadius: 8 * vw,
      backgroundColor: theme.activeTextInputColor,
    
  },

  flatListStyle: {
    maxHeight: 40 * vh,
    marginRight: 5 * vw,
  },

  emptyComponentViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5 * vh,
  },

  borderLineView: {
    backgroundColor: '#DDDDDD',
    height: 0.1 * vh,
    width: 80 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 2 * vh,
  },

  numberOfTotalsItemsView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainRow: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 4 * vh,
  },

  mainShippingRow: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 4 * vh,
    marginBottom: 2 * vh,
  },

  mainDiscountRow: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 2 * vh,
    marginBottom: 2 * vh,
  },

  connectionView: {
    height: 0.2 * vh,
    width: 30 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderStyle:'dashed',
    backgroundColor: 'lightgray',
  },

  shippingConnectionView: {
    height: 0.2 * vh,
    width: 50 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgray',
  },

  subtotalTextStyle: {
    color: 'gray',
    fontSize: 2 * vh,
    fontFamily:Fonts.MR
  },

  totalAmountTextStyle: {
    fontSize: 2 * vh,
  },

  totalPriceView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80 * vw,
    marginTop: 4 * vh,
    alignItems: 'center',
    marginBottom:4*vh,
    alignSelf: 'center'
  },

  totalTextStyle: {
    fontFamily: Fonts.MB,
    fontSize: 2.2 * vh,
  },

  amountTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2.2 * vh,
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
