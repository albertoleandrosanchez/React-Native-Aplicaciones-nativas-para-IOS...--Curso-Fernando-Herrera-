import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen/BoxObjectModelScreen';
import CounterScreen from './src/screens/CounterScreen/CounterScreen';
import HolaMundoScreen from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    <SafeAreaView>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

export default App;
