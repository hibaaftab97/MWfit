import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './MainNavigator';
import AnimatedSplash from "react-native-animated-splash";

function Navigation() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);


  AnimatedSplash.hide()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
