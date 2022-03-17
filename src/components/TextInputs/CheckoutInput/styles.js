import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
// import {Fonts} from '../../../assets/fonts';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
    titleStyle: {
        color: theme.defaultInactiveBorderColor,
        fontSize: 1.8 * vh,
        marginBottom: 1.5 * vh
    },

    textInputView: {
        width: 80 * vw,
        height: 8 * vh,
        borderBottomWidth: 0.5,
        borderBottomColor: '#BDC4CC',
        marginTop: 3 * vh
    },

    textInputStyle: {
        width: 70 * vw,
        fontSize: 2.1 * vh,
        fontFamily: Fonts.SFR,
        color: theme.defaultBackgroundColor,
        height: 5 * vh
    },

    creditCardStyle: {
        resizeMode: 'contain',
        height: 10 * vw,
        width: 10 * vw,
    },

    textInputRow: {
        flexDirection: 'row'
    }
});
