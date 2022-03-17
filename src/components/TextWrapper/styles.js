import { StyleSheet } from 'react-native';
import { vh } from '../../units/index';
import { Fonts } from '../../assets/fonts';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
  text: {
    fontSize: 2.5 * vh,
    fontFamily: Fonts.SFR,
    color: theme.defaultTextColor,
    padding: 0,
    margin: 0,
    ...Platform.select({
      android: {
        paddingBottom: 0.2 * vh,
      },
    }),
  },
});
