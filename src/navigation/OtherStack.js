import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SiderBarScreen from '../screens/General/SideBarScreen';
import AboutUsScreen from '../screens/General/AboutUsScreen';
import WishlistScreen from '../screens/General/WishlistScreen';
import ContactUsScreen from '../screens/General/ContactUsScreen';
import PrivacyPolicyScreen from '../screens/General/PrivacyPolicyScreen';
import TermsConditionScreen from '../screens/General/TermsConditionScreen';
import ProductDetailsScreen from '../screens/General/ProductDetailsScreen';

function OtherStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='WishlistScreen'>
      <Stack.Screen
        options={{ headerShown: false }}
        name="AboutUsScreen"
        component={AboutUsScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="WishlistScreen"
        component={WishlistScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="TermsConditionScreen"
        component={TermsConditionScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="ContactUsScreen"
        component={ContactUsScreen}
      />
    </Stack.Navigator>
  );
}

export default OtherStack;
