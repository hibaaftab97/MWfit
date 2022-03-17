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

  mainSearchBoxView: {
    flexDirection: 'row',
    width: 90 * vw,
    backgroundColor: 'lightgray',
    justifyContent: 'space-between',
    height: 6 * vh,
    borderRadius: 2 * vw,
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  searchIconViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5 * vw,
  },

  textInputView: {
    justifyContent: 'center',
    // alignItems: 'center',
    width: 60 * vw,
    marginLeft: 2 * vw,
    marginRight: 10 * vw,
  },

  crossIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    right: 8 * vw,
  },
});
export default styles;
