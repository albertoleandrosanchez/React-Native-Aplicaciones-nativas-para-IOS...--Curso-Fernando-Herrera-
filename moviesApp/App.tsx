import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenNavigation} from './src/navigation/ScreenNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <ScreenNavigation />
    </NavigationContainer>
  );
};
