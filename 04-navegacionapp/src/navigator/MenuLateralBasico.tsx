import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import { useEffect from 'react';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator initialRouteName="StackNavigator" drawerContent={{
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#e91e63',
      },
      itemsContainerStyle: {

    }>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
