import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {sideIcons} from '../../../assets/images';
import {vw, vh} from '../../../units';
import TextWrapper from '../../TextWrapper';

import styles from './styles';

const drawerRoutes = {
  HomeStack: {
    label: 'Home',
    icon: sideIcons.home,
  },

  AboutScreen: {
    label: 'About',
    icon: sideIcons.aboutus,
  },

  WishlistScreen: {
    label: 'Wishlist',
    icon: sideIcons.heart,
  },
  OrderStack: {
    label: 'My Orders',
    icon: sideIcons.shopping,
  },
  ContactUsScreen: {
    label: 'Contact Us',
    icon: sideIcons.phone,
  },
  PrivacyPolicyScreen: {
    label: 'Privacy Policy',
    icon: sideIcons.privacy,
  },
  TermsConditionScreen: {
    label: 'Terms & Conditions',
    icon: sideIcons.terms,
  },
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {
  const progress = useDrawerProgress();
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-40 * vw * (props.index + 1), 0],
  });
  const animatedStyles = {
    transform: [{translateX}],
  };
  const routeConfigs = drawerRoutes[props.routeName];
  console.log('DrawerButton :', routeConfigs);
  if (!routeConfigs) {
    return null;
  }
  return (
    <AnimatedTouchable
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container, animatedStyles]}>
      <Image style={styles.icon} source={routeConfigs.icon} />
      <TextWrapper style={styles.label}>{routeConfigs.label}</TextWrapper>
    </AnimatedTouchable>
  );
};

export default DrawerButton;
