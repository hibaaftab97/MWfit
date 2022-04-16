import React, { useState } from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import { Image, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';
import TextWrapper from '../../TextWrapper';
import { generalImages, icons, sideIcons } from '../../../assets/images';
import { useSelector } from 'react-redux';
import theme from '../../../utils/theme';
import { vh } from '../../../units';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Fonts } from '../../../assets/fonts';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useLogoutHook } from '../../../hooks/useLogoutHook';
import RemoveProductAlert from '../../Modals/RemoveProductAlert';
import GeneralAlert from '../../Modals/GeneralAlert';
import checkoutReducer from '../../../redux/reducers/checkoutReducer';

const routeOrders = [
  'HomeStack',
  'AboutScreen',
  'WishlistScreen',
  'OrderStack',
  'ContactUsScreen',
  'PrivacyPolicyScreen',
  'TermsConditionScreen',
];

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
    label: 'Orders',
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

const DrawerContent = props => {
  const [visibility, setVisibility] = useState(false);

  const handleVisibility = () => {
    props.navigation.navigate('AuthStack')
    // setVisibility(!visibility);
  };
  const [logoutState, logoutFunc] = useLogoutHook();
  const navigation = useNavigation();
  const user = useSelector(state => state.authReducer?.customer?.user?.email);

  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };
  const progress = useDrawerProgress();
  const opacity = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-5, 1],
  });
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <Animated.View style={[styles.container]}>
      <Animated.View style={{ opacity: opacity }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.crossButtonView}>
          <Image style={styles.crossIconStyle} source={icons.whitecross} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Image
            source={generalImages.placeHolderProfileImage}
            style={styles.profileImage}
          />
          <TextWrapper
            // numberOfLines={3}
            style={{
              color: theme.whiteBackground,
              marginTop: 2 * vh,
              fontFamily: Fonts.MSB,
            }}
          >
            {user}
          </TextWrapper>
          <TextWrapper
            // numberOfLines={3}
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize:2*vh,
              // marginTop: 1 * vh,
              fontFamily: Fonts.MR,
            }}
          >
            {user}
            
            
          </TextWrapper>
        </View>
      </Animated.View>
      <View style={styles.routeContainer}>
        {routeOrders.map((item, index) => {
          return (
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          );
        })}

        <AnimatedTouchable
          onPress={logoutFunc}
          style={[styles.logoutButtonStyle]}>
          <Image style={styles.icon} source={sideIcons.logout} />
          <TextWrapper style={styles.label}>Logout</TextWrapper>
        </AnimatedTouchable>
      </View>

      <RemoveProductAlert
        visibility={visibility}
        onHide={handleVisibility}
        onPress={logoutFunc}
        title="Are You Sure
        You Want To Logout?"
        icon={icons.circleChecked}
      />
    </Animated.View>
  );
};
export default DrawerContent;
