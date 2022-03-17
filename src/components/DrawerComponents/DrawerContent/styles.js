import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../units';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.defaultBackgroundColor,
    // borderBottomRightRadius: 10 * vw,
    // borderTopRightRadius: 10 * vw,
  },
  routeContainer: {
    marginTop: 3 * vh,
  },
  name: {
    fontSize: 2.4 * vh,
    color: 'white',
    marginLeft: 5 * vw,
  },
  profileImage: {
    height: vh * 8,
    width: vh * 8,
    borderRadius: (vh * 10) / 2,
    backgroundColor: 'green',
  },
  header: {
    marginBottom: vh * 5,
    marginLeft: 5 * vw,
  },

  crossButtonView: {
    marginTop: 10 * vh,
    alignItems: 'flex-end',
    marginRight: 4 * vw,
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 3 * vh,
    width: 3 * vw,
  },

  icon: {
    tintColor: theme.whiteBackground,
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },

  label: {
    fontSize: 2 * vh,
    color: theme.whiteBackground,
  },

  logoutButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
});
export default styles;
