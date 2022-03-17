import * as React from 'react';
import { Easing } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screens/General/CategoryScreen';
import ProductsScreen from '../screens/General/ProductsScreen';
import GeneralStack from './GeneralStack';

function CatgoriesStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='CategoryScreen'>
      <Stack.Screen
        options={{ headerShown: false }}
        name="CategoryScreen"
        component={CategoryScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="ProductsScreen"
        component={ProductsScreen}
      />
    </Stack.Navigator>
  );
}

export default CatgoriesStack;
