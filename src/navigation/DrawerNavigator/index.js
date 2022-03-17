import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import TabNavigator from '../../Navigation/TabNavigator';
import DrawerScreenWrapper from '../../components/DrawerComponents/DrawerScreenWrapper';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import GeneralStack from '../GeneralStack';
import AboutUsScreen from '../../screens/General/AboutUsScreen';
import ContactUsScreen from '../../screens/General/ContactUsScreen';
import PrivacyPolicyScreen from '../../screens/General/PrivacyPolicyScreen';
import TermsConditionScreen from '../../screens/General/TermsConditionScreen';
import HomeScreen from '../../screens/General/HomeScreen';
import OtherStack from '../OtherStack';

import { vh, vw } from '../../units';
import { useSelector } from 'react-redux';
import OrderStack from '../OrderStack';

const Drawer = createDrawerNavigator();

const AnimatedHomeStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <GeneralStack />
    </DrawerScreenWrapper>
  );
};


const DrawerNavigator = props => {
  const user = useSelector(state => state.authReducer);

  console.log(user, 'drawerUser');
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {
          width: 70 * vw,
        },
        sceneContainerStyle: { backgroundColor: 'black' },
      }}>
      <Drawer.Screen name="HomeStack" component={AnimatedHomeStack} />
      <Drawer.Screen name="AboutScreen" component={AboutUsScreen} />
      <Drawer.Screen name="WishlistScreen" component={OtherStack} />
      <Drawer.Screen name="OrderStack" component={OrderStack} />

      <Drawer.Screen name="ContactUsScreen" component={ContactUsScreen} />
      <Drawer.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Drawer.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
