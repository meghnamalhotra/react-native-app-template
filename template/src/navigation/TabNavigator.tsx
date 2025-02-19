import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Images} from '../constants/image';
import ImageComponent from '../components/ImageComponent';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({color, size}: {color: string; size: number}) => {
          let iconName = route.name === 'Home' ? Images.HOME : Images.SETTINGS;
          return (
            <ImageComponent
              source={iconName}
              style={{tintColor : color, width: size, height: size, borderRadius: 10}}
            />
          );
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
