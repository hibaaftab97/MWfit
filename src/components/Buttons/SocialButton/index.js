import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {icons} from '../../../assets/images';
import TextWrapper from '../../TextWrapper';
import styles from './styles';

const SocialButton = props => {
  return (
    <View style={styles.mainSocialButtonsView}>
      <TouchableOpacity style={styles.buttonView}>
        <Image source={icons.facebook} style={styles.iconStyle} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonView}>
        <Image source={icons.google} style={styles.iconStyle} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonView}>
        <Image source={icons.apple} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialButton;
