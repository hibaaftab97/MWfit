import { Platform, StyleSheet } from 'react-native';
// import {themeColors, themeShadow} from '../../Utils/appTheme';
import { vh, vw } from '../../units/index';
import theme from '../../utils/theme';
const styles = StyleSheet.create({
  container: {
    width: vw * 100,
    height: Platform.OS === 'ios' ? vh * 9 : vh * 9,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.defaultTextColor,
    justifyContent: 'space-around',


  },
  btnStyle: {
    height: vh * 5,
    minWidth: vw * 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBtnStyle: {
    height: Platform.OS === 'ios' ? vh * 7 : vh * 6,
    minWidth: Platform.OS === 'ios' ? vw * 15 : vw * 12,
    borderRadius: (vw * 20) / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: vh * 2,
  },
});

export default styles;
