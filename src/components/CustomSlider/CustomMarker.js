import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {icons} from '../../assets/images';
import theme from '../../utils/theme';

class CustomMarker extends React.Component {
  render() {
    return <View style={styles.marker}></View>;
  }
}

const styles = StyleSheet.create({
  marker: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: theme.defaultBackgroundColor,
  },
});

export default CustomMarker;
