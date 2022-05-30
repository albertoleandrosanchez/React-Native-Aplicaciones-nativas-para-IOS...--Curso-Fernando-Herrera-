import React from 'react';
import CalculadoraScreen from './src/screens/CalculadoraScreen/CalculadoraScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/theme/appTheme';

function App() {
  return (
    <SafeAreaView style={styles.areaView}>
      <StatusBar
        backgroundColor={styles.areaView.backgroundColor}
        barStyle="light-content"
      />
      <CalculadoraScreen />
    </SafeAreaView>
  );
}

export default App;
