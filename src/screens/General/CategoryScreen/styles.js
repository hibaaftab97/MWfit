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

  imageBackgroundStyle: {
    height: 25 * vh,
    width: 100 * vw,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sliderDescriptionView: {
    flexDirection: 'row',
    width: 80 * vw,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 1,
    marginBottom: 8 * vh,
    justifyContent: 'space-between',
  },

  sliderTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  sliderTextStyle: {
    width: 50 * vw,
    fontSize: 3.5 * vh,
    color: '#fff',
    lineHeight: 3 * vh,
    fontFamily: Fonts.MSW,
  },

  taglineTextStyle: {
    width: 50 * vw,
    fontSize: 1.8 * vh,
    color: '#fff',
    lineHeight: 2 * vh,
    fontFamily: Fonts.SFR,
  },

  flatListView: {
    marginTop: 4 * vh,
    flex: 1
  },

  linearGradient: {
    height: 25 * vh,
    width: 100 * vw,
  },
});
export default styles;
