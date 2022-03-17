import { StyleSheet } from 'react-native';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  colorTextStyle: {
    fontSize: 1.2 * vh,
  },

  bottomMessageView: {
    marginTop: 5 * vh,
    fontSize: 1.8 * vh,
  },

  mainCart: { flex: 1, alignItems: 'center' },

  mainFooterView: {
    minHeight: 18 * vh,
    width: 85 * vw,
    borderBottomWidth: 0.3,
    marginTop: 2 * vh,
  },

  subFooterView: { width: 85 * vw, flexDirection: 'row' },

  productImageView: {
    width: 30 * vw,
    height: 30 * vw,
    resizeMode: 'cover',
    borderRadius: 3,
    elevation: 3,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F2EEEE',
  },

  descriptionView: {
    width: 60 * vw,
    minHeight: 3 * vh,
    paddingLeft: 3 * vw,
    borderColor: theme.defaultForgotPasswordColor,
  },

  productNameWithCrossIconView: {
    width: 57 * vw,
    flexDirection: 'row',
    paddingTop: 3 * vw,
    justifyContent: 'space-between',
  },

  colorWithNameView: {
    width: 57 * vw,
    justifyContent: 'space-between',
    marginTop: 0.5 * vh,
  },

  productNameTextStyle: { fontSize: 2.3 * vh },

  textStyle: { marginTop: 0.5 * vh },

  amountTextStyle: { marginTop: 0.5 * vh },
});
export default styles;
