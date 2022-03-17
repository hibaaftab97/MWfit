import { StyleSheet } from 'react-native';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  mainScreenView: {
    borderRadius: 4 * vw,
    elevation: 10,
    width: 80 * vw,
    minHeight: 20 * vh,
    marginTop: 2 * vh,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.11,
    shadowRadius: 4 * vw,
    elevation: 10,
  },

  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 3 * vh,
  },

  subjectTextStyle: { fontSize: 1.5 * vh },

  subjectWithSpaceTextStyle: {
    fontSize: 1.5 * vh,
    marginTop: 2 * vh,
  },

  valueTextStyle: { fontSize: 1.8 * vh, color: theme.activeTextInputColor },

  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2 * vh,
    marginBottom: 3 * vh,
  },

  buttonStyle: {
    width: 25 * vw,
    height: 5 * vh,
    backgroundColor: theme.activeTextInputColor

  },

  textStyle: {
    color: theme.whiteBackground,
    fontSize: 1.5 * vh,
  },
});
export default styles;
