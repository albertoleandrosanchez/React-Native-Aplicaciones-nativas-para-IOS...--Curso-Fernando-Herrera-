import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: (props) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'home';
              break;
            case 'Tab2':
              iconName = 'search';
              break;
            case 'Sn':
              iconName = 'heart';
              break;
          }

          return <Text style={{color: colors.primary}}>{iconName}</Text>;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
        },
        tabBarLabel: ({focused}) => {
          const label = route.name;
          return (
            <Text
              style={{
                color: focused ? colors.primary : colors.secondary,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              {label}
            </Text>
          );
        },

        sceneContainerStyle: {
          backgroundColor: '#ccc',
        },
      })}>
      <Tab.Screen
        name="Tab1"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="Sn"
        options={{
          title: 'Tab 3',
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
