import React from 'react';
import {Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import SearchHeader from '../../../components/Headers/SearchHeader';
import styles from './styles';
import {icons, sideIcons} from '../../../assets/images';
import {useSelector} from 'react-redux';
import {useLogoutHook} from '../../../hooks/useLogoutHook';

const SiderBarScreen = props => {
  const customer = useSelector(state => state.authReducer?.customer?.user);

  console.log(customer, 'customer');

  const [logoutState, logoutFunc] = useLogoutHook();

  const logout = () => {
    logoutFunc();
  };

  const renderProfilePicture = () => {
    return (
      <View style={styles.profileView}>
        <Image source={icons.display1} style={styles.displayIconStyle} />

        <TextWrapper style={styles.nameStyle}>
          {customer?.email ? customer?.email : 'Guest User'}
        </TextWrapper>

        <TextWrapper style={styles.usernameTextStyle}>
          {customer?.email ? customer?.email : 'Guest User'}
        </TextWrapper>
      </View>
    );
  };

  const renderProfileItems = () => {
    return (
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HomeScreen')}
          style={styles.touchableButtonItem}>
          <Image source={sideIcons.home} style={styles.homeIconStyle} />
          <TextWrapper style={styles.itemTextStyle}> Home</TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('AboutUsScreen')}
          style={styles.touchableButtonItem}>
          <Image source={sideIcons.aboutus} style={styles.homeIconStyle} />
          <TextWrapper style={styles.itemTextStyle}> About Us</TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('WishlistScreen')}
          style={styles.touchableButtonItem}>
          <Image source={sideIcons.heart} style={styles.homeIconStyle} />
          <TextWrapper style={styles.itemTextStyle}> Wishlist</TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('BasketScreen')}
          style={styles.touchableButtonItem}>
          <Image source={sideIcons.shopping} style={styles.homeIconStyle} />
          <TextWrapper style={styles.itemTextStyle}> Products</TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ContactUsScreen')}
          style={styles.touchableButtonItem}>
          <Image source={sideIcons.phone} style={styles.homeIconStyle} />
          <TextWrapper style={styles.itemTextStyle}> Contact Us</TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('PrivacyPolicyScreen')}
          style={styles.touchableButtonItem}>
          <Image source={sideIcons.privacy} style={styles.homeIconStyle} />
          <TextWrapper style={styles.itemTextStyle}>
            {' '}
            Privacy Policy
          </TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('TermsConditionScreen')}
          style={styles.touchableButtonItem}>
          <Image source={sideIcons.phone} style={styles.homeIconStyle} />
          <TextWrapper style={styles.itemTextStyle}>
            {' '}
            Terms and Conditions
          </TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ContactUsScreen')}
          style={styles.touchableButtonItem}>
          <Image source={sideIcons.phone} style={styles.homeIconStyle} />
          <TextWrapper style={styles.itemTextStyle}> Contact Us</TextWrapper>
        </TouchableOpacity>

        {customer ? (
          <TouchableOpacity onPress={logout} style={styles.touchableButtonItem}>
            <Image source={sideIcons.logout} style={styles.homeIconStyle} />
            <TextWrapper style={styles.itemTextStyle}> Log Out</TextWrapper>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };
  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      {renderProfilePicture()}
      {renderProfileItems()}
    </ScrollWrapper>
  );
};

export default SiderBarScreen;
