import React from 'react';
import { Text, View } from 'react-native';

const CounterScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
        }}>
        Contador: ---
      </Text>
    </View>
  );
};

export default CounterScreen;
