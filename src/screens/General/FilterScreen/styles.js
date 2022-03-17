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

  touchableCategoriesRow: {
    flexDirection: 'row',
    width: 90 * vw,
    justifyContent: 'space-around',
    marginTop: 2 * vh,
  },

  touchableTextStyle: {
    fontFamily: Fonts.SFR,
    fontSize: 2.1 * vh,
  },

  contentView: {
    flexDirection: 'row',
    width: 90 * vw,
    justifyContent: 'space-between',
    marginTop: 4 * vh,
  },

  popularityView: {
    justifyContent: 'center',
  },

  dropView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  dropIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  mainTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2 * vh,
  },

  bellowTextStyle: {
    fontFamily: Fonts.SFR,
    fontSize: 1.6 * vh,
  },

  rangeStyle: {
    resizeMode: 'contain',
    height: 40 * vw,
    width: 90 * vw,
  },

  rangeImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonsView: {
    flexDirection: 'row',
    width: 90 * vw,
    justifyContent: 'space-evenly',
    marginTop: 2 * vh,
    marginBottom: 15 * vh,
  },

  clearButtonView: {
    width: 40 * vw,
    backgroundColor: theme.whiteBackground,
    borderColor: theme.defaultTextColor,
    borderWidth: 1,
  },

  applyButtonView: {
    width: 40 * vw,
  },

  textStyle: {
    color: theme.defaultTextColor,
  },

  //
  root: {
    alignItems: 'stretch',
    padding: 12,
    flex: 1,
    backgroundColor: '#555',
  },
  slider: {},
  button: {},
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 12,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  valueText: {
    width: 50,
    color: 'white',
    fontSize: 20,
  },
});
export default styles;
