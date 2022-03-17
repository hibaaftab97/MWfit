import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: theme.defaultForgotPasswordColor
    },
    content: {
        alignItems: 'center',
    },

    displayIconStyle: {
        resizeMode: 'contain',
        height: 15 * vw,
        width: 15 * vw,
    },

    profileView: {
        marginTop: 10 * vh,
        width: 85 * vw
    },

    nameStyle: {
        fontFamily: Fonts.MSW,
        color: theme.whiteBackground,
        fontSize: 2.8 * vh,
        marginTop: 1 * vh,
        marginBottom: 1 * vh
    },

    usernameTextStyle: {
        color: theme.whiteBackground,
        opacity: 0.6,
        fontFamily: Fonts.SFR,
        fontSize: 1.8 * vh
    },

    touchableButtonItem: {
        flexDirection: 'row',
        marginTop: 1 * vh
    },

    homeIconStyle: {
        resizeMode: 'contain',
        height: 5 * vh,
        width: 5 * vw,
    },

    itemTextStyle: {
        fontFamily: Fonts.SFR,
        fontSize: 2 * vh,
        color: theme.whiteBackground,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 2 * vw

    },

    mainView: {
        width: 85 * vw,
        marginTop: 5 * vh
    }


});
export default styles;
