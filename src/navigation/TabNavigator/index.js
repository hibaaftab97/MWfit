import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {vh, vw} from '../../units/index';
import {icons} from '../../assets/images';

import {Image, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

import GeneralStack from '../GeneralStack';
import CatgoriesStack from '../CatgoriesStack';
import CartStack from '../CartStack';
import OtherStack from '../OtherStack';
import theme from '../../utils/theme';

const Tab = createMaterialTopTabNavigator();

const tabIcons = {
  Home: {icon: icons.Home},
  Category: {icon: icons.group},
  Cart: {
    icon: icons.shopping,
  },
  Other: {icon: icons.menu},
};

const TabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}>
      <Tab.Screen name="Home" component={GeneralStack} />
      <Tab.Screen name="Category" component={CatgoriesStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Other" component={OtherStack} />
    </Tab.Navigator>
  );
};

const MyTabBar = ({state, navigation}) => {
  const [focusedItem, setFocusedItem] = useState(false);
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          if (!isFocused) {
            setFocusedItem(true);
            navigation.navigate(route.name);
          }
        };
        if (isFocused) {
          return (
            <TouchableOpacity
              onPress={onPress}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={isFocused ? styles.activeBtnStyle : styles.btnStyle}>
                <Image
                  source={tabIcons[route?.name].icon}
                  style={{
                    height: vh * 2.5,
                    width: vh * 2.5,
                    tintColor: isFocused
                      ? theme.activeTextInputColor
                      : theme.whiteBackground,
                  }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              onPress={onPress}
              style={isFocused ? styles.activeBtnStyle : styles.btnStyle}>
              <Image
                source={tabIcons[route?.name].icon}
                style={{
                  height: vh * 2.5,
                  width: vh * 2.5,
                  tintColor: isFocused ? 'white' : '#B7B7B7',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default TabNavigator;
