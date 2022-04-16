import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import {useSelector} from 'react-redux';
import DrawerNavigator from './DrawerNavigator';

function MainNavigator() {
  const loggedIn = useSelector(state => state.authReducer.loggedin);

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {loggedIn ? (
        <Stack.Screen
          options={{headerShown: false}}
          name="DrawerNavigator"
          component={DrawerNavigator}
        />
      ) : (
        <Stack.Screen
          options={{headerShown: false}}
          name="AuthStack"
          component={AuthStack}
        />
      )}
 
    </Stack.Navigator>
  );
}

export default MainNavigator;
