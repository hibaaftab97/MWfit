import { StyleSheet, Platform } from 'react-native';
import { vh, vw } from '../../units';

const styles = StyleSheet.create({
  totalAEDView: {
    alignItems: 'flex-end',
    marginTop: 3 * vh,
    marginBottom: 20 * vh
  },

  textView: {
    right: 18 * vw,
  },
  textStyleAED: { fontSize: 3 * vh },

  itemsTextStyle: {
    fontSize: 2 * vh,
  },
});
export default styles;
